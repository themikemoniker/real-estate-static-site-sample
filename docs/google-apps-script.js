/**
 * Google Apps Script — Contact Form Handler + Deploy Button
 *
 * This script does two things:
 * 1. Receives contact form submissions and writes them to a "Leads" tab
 * 2. Adds a "Deploy Site" button/menu to trigger a GitHub Pages rebuild
 *
 * SETUP INSTRUCTIONS:
 *
 * 1. Open your Google Sheet (the same one used for listings)
 * 2. Go to Extensions > Apps Script
 * 3. Delete any existing code and paste this entire file
 * 4. Click Deploy > New deployment
 * 5. Set type to "Web app"
 * 6. Set "Execute as" to "Me"
 * 7. Set "Who has access" to "Anyone"
 * 8. Click Deploy and authorize when prompted
 * 9. Copy the Web app URL
 * 10. Add it as a GitHub repository secret named PUBLIC_FORM_URL
 *     (Settings > Secrets and variables > Actions > New repository secret)
 *
 * DEPLOY BUTTON SETUP:
 * 1. After pasting this script, run the "setup" function once from the
 *    Apps Script editor (select "setup" from the function dropdown, click Run)
 * 2. Authorize when prompted — this stores your GitHub token securely
 * 3. To get a GitHub token: go to github.com > Settings > Developer settings >
 *    Personal access tokens > Fine-grained tokens > Generate new token
 *    - Repository access: select "real-estate-static-site-sample"
 *    - Permissions: Actions (Read and write)
 * 4. After setup, reload the spreadsheet — you'll see a "Deploy" menu in the menu bar
 *
 * The script will automatically create a "Leads" tab if it doesn't exist.
 *
 * TESTING:
 * After deployment, you can test with curl:
 *   curl -L -X POST "YOUR_WEB_APP_URL" \
 *     -d "name=Test&email=test@example.com&phone=555-1234&interest=Buying&message=Hello"
 */

// ─── Deploy Button ───────────────────────────────────────────────

/**
 * Run this once from the Apps Script editor to store your GitHub token.
 * Select "setup" in the function dropdown and click Run.
 */
function setup() {
  var ui = SpreadsheetApp.getUi();
  var result = ui.prompt(
    'GitHub Token Setup',
    'Paste your GitHub Personal Access Token (fine-grained, with Actions write permission):',
    ui.ButtonSet.OK_CANCEL
  );
  if (result.getSelectedButton() === ui.Button.OK) {
    PropertiesService.getScriptProperties().setProperty('GITHUB_TOKEN', result.getResponseText().trim());
    ui.alert('Token saved! Reload the spreadsheet to see the Deploy menu.');
  }
}

/**
 * Adds a "Deploy" menu to the spreadsheet menu bar.
 * Runs automatically when the spreadsheet is opened.
 */
function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('🚀 Deploy')
    .addItem('Publish site now', 'deploySite')
    .addSeparator()
    .addItem('Set GitHub token', 'setup')
    .addToUi();
}

/**
 * Triggers a GitHub Actions workflow_dispatch to rebuild and deploy the site.
 */
function deploySite() {
  var token = PropertiesService.getScriptProperties().getProperty('GITHUB_TOKEN');
  if (!token) {
    SpreadsheetApp.getUi().alert('No GitHub token found. Please run "Set GitHub token" from the Deploy menu first.');
    return;
  }

  var repo = 'themikemoniker/real-estate-static-site-sample';
  var url = 'https://api.github.com/repos/' + repo + '/actions/workflows/deploy.yml/dispatches';

  var options = {
    method: 'post',
    headers: {
      'Authorization': 'Bearer ' + token,
      'Accept': 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28'
    },
    contentType: 'application/json',
    payload: JSON.stringify({ ref: 'main' }),
    muteHttpExceptions: true
  };

  var response = UrlFetchApp.fetch(url, options);
  var code = response.getResponseCode();

  if (code === 204) {
    SpreadsheetApp.getUi().alert('Deploy triggered! The site will update in about 30 seconds.');
  } else {
    SpreadsheetApp.getUi().alert('Deploy failed (HTTP ' + code + '): ' + response.getContentText());
  }
}

// ─── Contact Form Handler ────────────────────────────────────────

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Leads');

    // Create Leads sheet if it doesn't exist
    if (!sheet) {
      sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet('Leads');
      sheet.appendRow(['Timestamp', 'Name', 'Email', 'Phone', 'Interest', 'Message']);
      // Bold header row
      sheet.getRange(1, 1, 1, 6).setFontWeight('bold');
    }

    var params = e.parameter;

    sheet.appendRow([
      new Date().toISOString(),
      params.name || '',
      params.email || '',
      params.phone || '',
      params.interest || '',
      params.message || '',
    ]);

    return ContentService.createTextOutput(
      JSON.stringify({ result: 'success' })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ result: 'error', error: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
