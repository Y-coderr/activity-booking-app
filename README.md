# 🎯 Activity Booking App

A Backend **Node.js + MongoDB** application that allows users to **register**, **log in**, **browse activities**, and **book** them.

---

## 📸 Screenshots




---

## 🛠️ Getting Started Locally

### 📋 Prerequisites

- Node.js and npm installed
- MongoDB URI (local or Atlas)
- [Postman](https://www.postman.com/) for API testing

### ⚙️ Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/activity-booking-app.git
   cd activity-booking-app
   ```

2. install node modules
   ```
   npm install
   ```

3. create .env file
   ```
   MONGO_URI=your_mongodb_connection_uri
   JWT_SECRET=your_jwt_secret
   ```

4. Server will run at
  ```
  http://localhost:5000
  ```   


### 🚀 Live Deployment

#### Live api URL:
https://activity-booking-app-x0wb.onrender.com



### 🔌 API Endpoints

🌐 Base URL(for online deployment): https://activity-booking-app-x0wb.onrender.com/

🌐 Base URL(for local host): http://localhost:5000 

| Method | Endpoint                           | Description                    |
| ------ | ---------------------------------- | ------------------------------ |
| POST   | `/api/auth/register`               | Register a new user            |
| POST   | `/api/auth/login`                  | Log in and receive a JWT token |
| GET    | `/api/activities`                  | Get all available activities   |
| POST   | `/api/activities`                  | Create a new activity          |
| POST   | `/api/activities/book/:id`         | Book an activity by its ID     |
| GET    | `/api/activities/bookings`         | Get all bookings for the user  |



