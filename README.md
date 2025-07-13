# 🏡 Nestora – Airbnb-Style Full-Stack Listing Platform

Nestora is a full-stack web application that lets users **explore, create, and manage vacation rental listings**, similar to Airbnb. Built using the **MVC architecture**, it supports user authentication, image uploads via Cloudinary, review management, real-time search, and full CRUD operations — all wrapped in a responsive UI powered by Bootstrap 5.

## 🔧 Tech Stack

- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Frontend**: EJS, Bootstrap 5
- **Authentication**: Passport.js (Local Strategy)
- **Validation**: Joi
- **Image Storage**: Multer + Cloudinary
- **Flash Messaging**: connect-flash
- **Session & Security**: express-session, method-override
- **Deployment**: Render

## 🚀 Features

### 👥 Authentication & Authorization
- User registration, login, logout using `passport-local`
- Route protection

### 🏘 Listings
- Full CRUD functionality
- Server-side validation using Joi
- Cloudinary image upload & resizing
- Listing ownership enforced for edits/deletes

### 📝 Reviews
- Users can post/delete reviews with star ratings (1–5)
- Review ownership enforced
- Review validation using Joi

### 🔍 Search & Filters
- Real-time search by listing title or location
- Responsive filter bar with mobile optimization

### 🌐 UI/UX
- Clean, responsive interface built with Bootstrap 5
- Flash messages for success/error states
- Star rating system for visual feedback



