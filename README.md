<div align="center">
  <img src="https://i.ibb.co/Z6SMvp8/assessli.png" alt="Contact Page Logo" width="100%">
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

3. **Google Sheets Configuration**

    - Open `src/App.js` in your code editor.
    - Find the section where the Google Sheets API is called.
    - Replace the URL in the API call with your Google Sheets URL.

    ```javascript
    // Example API Call
    const response = await fetch('YOUR_GOOGLE_SHEETS_URL_HERE');
    ```

    Replace `YOUR_GOOGLE_SHEETS_URL_HERE` with your Google Sheets URL.

4. **Run the Application**

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
