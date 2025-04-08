# 🌟 Feedback Collector App

A simple yet stylish full-stack web app to collect user feedback using a modern UI and Firebase backend. Built with **React**, **Tailwind CSS**, and **Firebase**, this app allows users to submit feedback and lets admins view all entries in real-time.

---

## 🚀 Live Demo

🔗 [Live Website](https://your-deployment-link.netlify.app)

---

## 🧰 Tech Stack

| Technology         | Description                                |
|--------------------|--------------------------------------------|
| **React.js**       | UI library for building the frontend       |
| **Tailwind CSS**   | Utility-first CSS for rapid styling        |
| **Firebase**       | Backend (Firestore DB & Hosting support)   |
| **React Hot Toast**| For toast notifications                    |
| **Vite**           | Fast development build tool                |

---

## 💡 Features

- 🎨 Light and dark mode toggle
- 📝 Submit feedback with name and message
- 📋 Admin view to see submitted feedback
- 🔔 Toast notifications on form actions
- 📱 Responsive design with smooth transitions
- 🧠 Stored in Firebase Firestore with timestamp ordering

---

## 🔐 Environment Setup

Create a `.env` file in your root (optional but recommended):

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

