### Restaurant Reservation MERN App
MERN app to book restaurant tables. Users submit first name, last name, date, time, email, and a 10‑digit phone; data is validated server‑side, stored in MongoDB, and on success the UI redirects to a Success page. Easily extendable with auth and admin features.

## How it works
text
Form:
- firstName, lastName, date, time, email, phone (10 digits)

Validation:
- All fields required
- phone: exactly 10 digits
- email: valid format

Responses:
- 400: { success:false, message:"Phone number must contain 10 digits." }
- 400: { success:false, message:"Please fill full reservation form." }
- 200/201: { success:true, message:"Reservation sent successfully." } + redirect to Success page

DB:
- Saved in MongoDB; list endpoints show customer reservation details

## Tech Stack 
MongoDB + Mongoose
Express + Node
React (Vite) + React Router
Axios/Fetch, CORS
Nodemon / Concurrently

## Install
git clone https://github.com/Pariveshtiwari/Restaurant-Reservation-MERN-App.git
cd Restaurant-Reservation-MERN-App

## Backend

cd backend
npm i
# create config/config.env with:
# PORT=4000
# MONGO_URI=your-mongodb-uri
npm run dev

## Frontend

cd ../frontend
npm i
npm start

API (base: /api/v1/reservations)

GET    /        # list reservations
POST   /        # create reservation
GET    /:id     # get one
PUT    /:id     # update
DELETE /:id     # cancel


## Scripts

# backend
npm run dev
npm start

# frontend
npm start
npm run build

## Env & security

- config/config.env is .gitignored
- never commit real secrets
- set variables on the deploy host
## Extend
  
- Auth (JWT/sessions), role-based admin
- Email/SMS confirmations & reminders
- Pagination, search, export
