# Awesome LMS App

A modern Learning Management System (LMS) built with **Next.js**, **NextAuth.js**, and **MongoDB**, allowing instructors to post courses and students to browse and enroll.

---

## 🔹 Short Project Description

This project enables users to manage and explore online courses. Features include:

- User authentication via **Google** and **Email/Password**.
- Instructors can **add, update, and delete their courses**.
- Students can **browse courses**, view details, and enroll.
- Role-based access (Instructor vs Student).
- Search and filter courses.
- Responsive UI built with **Tailwind CSS** and reusable components.

---

## 🔹 Setup & Installation

### 1. Clone the repository

```bash
git clone https://github.com/HasinIshrakK/awesome-lms-app
cd awesome-lms-app
```
### 2. Install dependencies
```bash
Copy code
npm install
```
### 3. Setup environment variables
Create a .env.local file in the root directory:


## env
```bash
Copy code
NEXTAUTH_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:4000

GOOGLE_ID=your-google-client-id
GOOGLE_SECRET=your-google-client-secret
MONGODB_URI=your-mongodb-connection-string
```
### 4. Run the development server
```bash
Copy code
npm run dev
Open http://localhost:3000 in your browser.
```
### 5. Build & Production
```bash
Copy code
npm run build
npm start
```
## 🔹 Route Summary
### Public Routes
Route	Method	Description
/	GET	Home page with featured courses
/courses	GET	Get all courses
/courses/:id	GET	Get course details by ID
/auth/login	GET	Login page
/auth/register	GET	Registration page

### Protected Routes (requires login)
Route	Method	Description
/add-course	POST	Add a new course
/my-courses	GET	Get courses added by the logged-in instructor
/courses/:id	PATCH	Update a course by ID
/courses/:id	DELETE	Delete a course by ID

## 🔹 API Endpoints (Backend)
Endpoint	Method	Description
/api/courses	GET	Get all courses
/api/courses?email=user@x	GET	Get courses for a specific user
/api/courses/:id	GET	Get a single course by ID
/api/courses	POST	Add a new course
/api/courses/:id	PATCH	Update course by ID
/api/courses/:id	DELETE	Delete course by ID

## 🔹 Technologies Used
Next.js 16

NextAuth.js for authentication

MongoDB for database

Tailwind CSS for styling

React Hooks & Context API for state management

React Hot Toast for notifications