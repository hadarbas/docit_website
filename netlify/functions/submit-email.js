const fetch = require('node-fetch');

exports.handler = async (event) => {
  try {
    const { email, source } = JSON.parse(event.body);

    if (!email) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Email is required' }),
      };
    }
    if (!source) {
      return {
        statusCode: 400,
         body: JSON.stringify({ message: 'Source is required' }),
       };
    }
      // Log Data to Google Sheets
        try {
                const googleSheetResponse =  await fetch(process.env.GOOGLE_SHEETS_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                   },
                    body: JSON.stringify({ email: email, source: source })
                });
                 if (!googleSheetResponse.ok) {
                    const googleSheetError = await googleSheetResponse.json();
                   console.error("Google Sheets Error", googleSheetError);
                    return {
                        statusCode: 500,
                         body: JSON.stringify({ message: "Error saving data to Google Sheets", error: googleSheetError }),
                    }
                 }
           } catch (googleSheetsError) {
                 console.error("Google Sheets Error:", googleSheetsError);
              return {
                statusCode: 500,
                body: JSON.stringify({ message: "Error saving data to Google Sheets", error: googleSheetsError })
            }
        }
     return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Email sent successfully!' }),
      };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'General error', error: error }),
    };
  }
};
