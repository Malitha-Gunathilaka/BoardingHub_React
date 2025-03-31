# 🏠 BoardingHub

A full-stack MERN application to help users find and list boarding places easily.

## 🌟 Overview

BoardingHub is a web platform that connects people looking for boarding places with those who have spaces to rent. It provides an intuitive interface for browsing listings, managing properties, and facilitating communication between parties.

## 🏗 Project Structure

```
BoardingHub/
├── frontend/           # React frontend application
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── assets/
│   └── package.json
│
├── backend/           # Node.js/Express backend
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
│
└── README.md
```

## ⚡ Quick Start

1. Clone the repository:
```bash
git clone <repository-url>
cd BoardingHub
```

2. Install dependencies:
```bash
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

3. Set up environment variables:

Create `.env` in backend directory:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/boardinghub
JWT_SECRET=your_jwt_secret
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-email-app-password
```

Create `.env` in frontend directory:
```env
VITE_API_URL=http://localhost:5000
```

4. Start the application:
```bash
# Start backend (from backend directory)
npm run dev

# Start frontend (from frontend directory)
npm run dev
```

## 🛠 Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- React Router DOM
- React Icons

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Multer
- Nodemailer

## 🚀 Features

### Frontend
- Responsive design
- User authentication
- Interactive boarding listings
- Search and filter options
- Contact forms
- Social media integration

### Backend
- JWT authentication
- CRUD operations
- File uploads
- Email notifications
- Input validation
- Error handling

## 📦 Available Scripts

### Frontend
```bash
npm run dev     # Start development server
npm run build   # Create production build
npm run preview # Preview production build
```

### Backend
```bash
npm run dev   # Start development server
npm start     # Start production server
npm test      # Run tests
```

## 🔐 Security Features

- Password hashing (bcrypt)
- JWT authentication
- Input validation
- CORS configuration
- Rate limiting
- Security headers

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Contact

- Project Link: [https://github.com/yourusername/BoardingHub](https://github.com/yourusername/BoardingHub)
- Developer: [Malitha](mailto:malithavisada@gmail.com)

## ✨ Acknowledgements

- [React Documentation](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Tailwind CSS](https://tailwindcss.com/)