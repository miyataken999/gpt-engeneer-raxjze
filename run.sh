#!/bin/bash

# Install dependencies
npm install @google/clasp

# Run the code
clasp login
clasp create --type sheets --title "Register Sheet to Calendar"
clasp push -f Code.gs
clasp run registerSheetToCalendar
