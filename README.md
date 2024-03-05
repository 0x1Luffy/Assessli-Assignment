<div align="center">
  <img src="https://i.ibb.co/Z6SMvp8/assessli.png" alt="Contact Page Logo" width="200">
</div>

# Contact Page to Google Sheets Integration

## Overview

This project is a contact page built with React and Vite that allows users to submit their information, which is then stored in a Google Sheets spreadsheet.

## Installation

Follow these steps to set up and run the project locally:

1. **Clone the Repository**

    ```bash
    git clone https://github.com/0x1Luffy/Assessli-Assignment.git
    cd Assessli-Assignment
    ```

2. **Install Dependencies**

    ```bash
    npm install
    ```

3. **Configure Google Sheets API**

    - Go to the [Google Cloud Console](https://console.developers.google.com/).
    - Create a new project.
    - Enable the Google Sheets API for your project.
    - Create API credentials (OAuth client ID).
    - Download the JSON file containing your client ID and secret.
    - Rename the downloaded JSON file to `credentials.json`.
    - Place the `credentials.json` file in the project root.

4. **Configure Environment Variables**

    Create a `.env` file in the project root and add the following variables:

    ```env
    GOOGLE_SHEETS_SPREADSHEET_ID=your_spreadsheet_id
    GOOGLE_SHEETS_RANGE=Sheet1!A1:B
    ```

    Replace `your_spreadsheet_id` with the actual ID of your Google Sheets spreadsheet.

5. **Run the Application**

    ```bash
    npm run dev
    ```

    Visit [http://localhost:3000](http://localhost:3000) in your browser to see the contact page.

## Contributing

If you'd like to contribute to the project, please follow the standard GitHub flow:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/my-feature`.
3. Make your changes and commit them: `git commit -m 'Add my feature'`.
4. Push to the branch: `git push origin feature/my-feature`.
5. Open a pull request.

