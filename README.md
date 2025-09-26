# 🧠 AI Interview Platform

An automated recruitment platform that uses the Gemini AI to conduct and evaluate voice-based interviews based on a candidate's resume and a job description.

## ✨ Features

-   **Dynamic Question Generation**: Creates unique, context-aware interview questions based on the candidate's resume and the job role.
-   **Voice-to-Text Transcription**: Captures and transcribes the candidate's spoken answers in real-time.
-   **AI-Powered Evaluation**: Analyzes the interview transcript to provide scores across multiple categories like technical skills, communication, and problem-solving.
-   **Detailed Feedback Reports**: Generates a comprehensive summary of the candidate's strengths and areas for improvement.

## 🛠️ Tech Stack

-   **Frontend**: HTML, Tailwind CSS, JavaScript
-   **Backend**: Node.js, Express.js
-   **AI**: Google Gemini API
-   **File Parsing**: pdf.js for resume and job description analysis.

## 🚀 How to Run Locally

To get a local copy up and running, follow these simple steps.

### Prerequisites

-   Node.js installed (which includes npm)
-   Git installed
-   A Google Gemini API Key

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/TanmayNaval/ai-interview-platform.git](https://github.com/TanmayNaval/ai-interview-platform.git)
    ```

2.  **Navigate to the project directory:**
    ```sh
    cd ai-interview-platform
    ```

3.  **Install backend dependencies:**
    ```sh
    cd backend
    npm install
    ```

4.  **Create your environment file:**
    -   In the `backend` folder, create a new file named `.env`.
    -   Add your Gemini API key to it like this:
        ```
        GEMINI_API_KEY="YOUR_API_KEY_HERE"
        ```

5.  **Start the backend server:**
    -   While still in the `backend` folder, run:
        ```sh
        npm start
        ```
    -   The server will be running on `http://localhost:3000`.

6.  **Open the frontend:**
    -   Go back to the root `ai-interview-app` folder.
    -   Navigate into the `frontend` folder.
    -   Open the `index.html` file in your web browser.