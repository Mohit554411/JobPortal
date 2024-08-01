# Job Portal

This is a Job Portal application built with Node.js and Express. It allows users to register, login, and apply for jobs. Employers can post and manage job listings.

## Features

- **User Registration**: Users can register an account.
- **User Login**: Registered users can log in to their accounts.
- **User Logout**: Users can log out of their accounts.
- **View Jobs**: Users can view all job listings.
- **Post Jobs**: Employers can post new job listings.
- **View Job Details**: Users can view details of a specific job.
- **Apply for Jobs**: Users can apply for jobs by uploading their resume.
- **Delete Jobs**: Employers can delete job listings.
- **Update Jobs**: Employers can update job listings.
- **404 Error Handling**: Handles incorrect page requests by rendering a custom 404 page.

## Endpoints

### User Routes

- `POST /register`: Register a new user.
- `GET /login`: Render the login page.
- `POST /login`: Log in a user.
- `GET /logout`: Log out the current user.

### Job Routes

- `GET /jobs`: Get all job listings.
- `GET /postJobs`: Render the page to post a new job.
- `GET /jobDetails`: Get details of a specific job.
- `POST /postJobs`: Post a new job (requires a logo upload).
- `DELETE /deleteJob`: Delete a job listing.
- `POST /applyJob`: Apply for a job (requires a resume upload).
- `GET /updateJob`: Render the page to update a job.
- `PUT /updateJob`: Update a job listing.

### Error Handling

- `app.use((req, res, next) => { res.status(404).render('pageNotFound'); });`: Handles 404 errors by rendering a custom 404 page.

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/job-portal.git

2. Navigate to the project directory:
   cd job-portal

3. Install dependencies:
   npm install

4. Running the Application
    Start the server: npm start
    Open your browser and navigate to http://localhost:3000.

## File Uploads
   The application uses multer for handling file uploads.
   Job postings can include a logo image.
   Job applications can include a resume file.