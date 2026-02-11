/**
 * Google Apps Script — Contact Form Handler
 *
 * This script receives form submissions from the Vallarta Luxury Living
 * contact page and writes them to a "Leads" tab in your Google Sheet.
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
 * The script will automatically create a "Leads" tab if it doesn't exist.
 *
 * TESTING:
 * After deployment, you can test with curl:
 *   curl -L -X POST "YOUR_WEB_APP_URL" \
 *     -d "name=Test&email=test@example.com&phone=555-1234&interest=Buying&message=Hello"
 */

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
