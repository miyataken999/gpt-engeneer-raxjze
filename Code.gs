/**
 * Registers Google Sheets content to Google Calendar
 */
function registerSheetToCalendar() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var calendarId = 'your_calendar_id';
  var calendar = CalendarApp.getCalendarById(calendarId);
  
  // Get the data range from the sheet
  var dataRange = sheet.getDataRange();
  var data = dataRange.getValues();
  
  // Create events from the data
  for (var i = 0; i < data.length; i++) {
    var row = data[i];
    var title = row[0];
    var startDateTime = row[1];
    var endDateTime = row[2];
    
    // Create a new event
    var event = calendar.createEvent(title, startDateTime, endDateTime);
  }
  
  // Return the result as JSON
  var result = {
    'message': 'Events registered successfully'
  };
  return ContentService.createTextOutput(JSON.stringify(result)).setMimeType(ContentService.MimeType.JSON);
}