# 🎯 Activity Booking App

A Backend **Node.js + MongoDB** application that allows users to **register**, **log in**, **browse activities**, and **book** them.

---

## 📸 Screenshots
<img width="1470" alt="Screenshot 2025-05-20 at 4 29 09 PM" src="https://github.com/user-attachments/assets/0a58f842-1fad-400e-9fce-5b471d638710" />

<img width="1470" alt="Screenshot 2025-05-20 at 4 29 23 PM" src="https://github.com/user-attachments/assets/71567737-d501-4510-82b4-f90b630d3d63" />

<img width="1470" alt="Screenshot 2025-05-20 at 4 32 04 PM" src="https://github.com/user-attachments/assets/989dab82-684f-4fa2-a1b6-fbc998bc2396" />

<img width="1469" alt="Screenshot 2025-05-20 at 4 33 55 PM" src="https://github.com/user-attachments/assets/74d9320e-1cf6-44a7-8b53-7eb75d7ee676" />

<img width="1470" alt="Screenshot 2025-05-20 at 5 27 17 PM" src="https://github.com/user-attachments/assets/05089d30-e908-4ffa-b61a-f1cc65c2b9dd" />

<img width="1470" alt="Screenshot 2025-05-20 at 5 27 35 PM" src="https://github.com/user-attachments/assets/ff9b74dc-de33-4aa5-84b6-575623eb2a4c" />

<img width="1349" alt="Screenshot 2025-05-20 at 5 55 41 PM" src="https://github.com/user-attachments/assets/61690833-48ab-46aa-adf8-b4e3efdba6a1" />

<img width="1406" alt="Screenshot 2025-05-20 at 5 55 58 PM" src="https://github.com/user-attachments/assets/8c32fd6e-beb7-4492-a5a4-bcc37aa96114" />











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



