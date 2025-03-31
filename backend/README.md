# BoardingHub Backend

Node.js/Express backend API for the BoardingHub application that manages boarding places and user authentication.

## 🚀 Features

- User authentication and authorization
- CRUD operations for boarding places
- File upload for boarding images
- Email notifications
- Input validation and sanitization
- Error handling middleware
- MongoDB database integration

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- Multer (file uploads)
- Bcrypt (password hashing)
- Cors
- Dotenv

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd BoardingHub/backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/boardinghub
JWT_SECRET=your_jwt_secret
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-email-app-password
```

4. Start the server:
```bash
npm run dev
```

## 📁 Project Structure

```
backend/
├── config/
│   └── db.js
├── controllers/
│   ├── authController.js
│   └── boardingController.js
├── middleware/
│   ├── auth.js
│   └── errorHandler.js
├── models/
│   ├── User.js
│   └── Boarding.js
├── routes/
│   ├── auth.js
│   └── boarding.js
└── server.js
```

## 🔑 Available Scripts

- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server
- `npm test` - Run tests
- `npm run lint` - Run ESLint

## 📚 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile

### Boarding Places
- `GET /api/boarding` - Get all boarding places
- `POST /api/boarding` - Create new boarding place
- `GET /api/boarding/:id` - Get boarding place by ID
- `PUT /api/boarding/:id` - Update boarding place
- `DELETE /api/boarding/:id` - Delete boarding place

## 🔧 Environment Variables

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/boardinghub
JWT_SECRET=your_jwt_secret
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-email-app-password
```

## 🔒 Security

- Password hashing using bcrypt
- JWT authentication
- Input validation and sanitization
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
- Developer: [Your Name](mailto:malithavisada@gmail.com)