# Health Appointment Booking System With Face Recognition

## Project Overview
This project integrates a health appointment booking system with face recognition technology to enhance security and ensure user identification.

### Key Features
- User registration and login
- Appointment booking system for patients
- Face recognition for secure access
- Admin panel for managing appointments

## Technologies Used
- **Frontend**: React.js
- **Backend**: Django (REST Framework)
- **Face Recognition**: OpenCV, `face_recognition` (Python library)

## Installation Instructions

### Backend Setup (Django)
1. **Clone the Repository**:
    ```bash
    git clone https://github.com/AbdullahCodingMaster/Health-Appointment-Booking-System-With-Face-Recognition.git
    cd Health-Appointment-Booking-System-With-Face-Recognition/backend
    ```

2. **Create and Activate a Virtual Environment**:
    ```bash
    python -m venv env
    source env/bin/activate  # For Windows, use .\env\Scripts\activate
    ```

3. **Install Backend Dependencies**:
    ```bash
    pip install -r requirements.txt
    ```

4. **Run Migrations**:
    ```bash
    python manage.py migrate
    ```

5. **Start the Django Development Server**:
    ```bash
    python manage.py runserver
    ```

### Frontend Setup (React.js)
1. **Navigate to the Frontend Directory**:
    ```bash
    cd ../frontend
    ```

2. **Install Frontend Dependencies**:
    ```bash
    npm install
    ```

3. **Start the React Development Server**:
    ```bash
    npm start
    ```

## Usage
- Access the **React frontend** at: [http://localhost:3000](http://localhost:3000)
- Access the **Django backend** at: [http://localhost:8000](http://localhost:8000)

## Python Dependencies
To install the necessary Python dependencies, use:
```bash
pip install -r requirements.txt
