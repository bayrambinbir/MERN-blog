# MERN Blog App

A full-stack blog application built with the MERN stack.

## Live Demo

Check out the app: [https://mern-blog-jcoa.onrender.com/](https://mern-blog-jcoa.onrender.com/)

## Features

- User authentication (register, login, logout)
- Create, edit, and delete blog posts
- Search and filter posts
- Responsive design with Tailwind CSS and Flowbite
- Dark/light theme toggle

## Front End Technologies

- JavaScript
- React
- Tailwind CSS
- Flowbite React
- react-icons
- react-circular-progressbar
- react-quill

## Back End Technologies

- Express
- nodemon
- mongoose
- bcryptjs (for password hashing)

## Other Technologies

- dotenv
- Google Firebase
- cookie-parser

## Deployment

This app is deployed on [Render](https://render.com/). Render provides a simple way to deploy full-stack applications with automatic builds and HTTPS.

## Folder Structure

```
mern-blog/
  client/        # React frontend
  api/           # Express backend
  README.md
  package.json
  ...
```

## Running Locally

To run this project on your local machine:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/mern-blog.git
   cd mern-blog
   ```

2. **Install dependencies for both backend and frontend:**
   - For the backend (from the root folder):
     ```bash
     npm install
     ```
   - For the frontend:
     ```bash
     cd client
     npm install
     cd ..
     ```

3. **Start the backend server (from the root folder):**
   ```bash
   npm run dev
   ```
   This will start your Express backend using `nodemon` at `api/index.js`.

4. **Start the frontend React app (in a new terminal):**
   ```bash
   cd client
   npm run dev
   ```
   This will start your React app (usually at [http://localhost:3000](http://localhost:3000)).

5. **Open your browser and visit:**
   ```
   http://localhost:3000
   ```

6. **Environment Variables:**
   - Make sure to set up any required `.env` files for both backend (`api/`) and frontend (`client/`) as needed.
   - Example for backend:
     ```
     MONGO_URI=your_mongodb_uri
     JWT_SECRET=your_jwt_secret
     ```

---

**Note:**  
- The `npm run build` script will install dependencies and build the frontend for production, but is not needed for local development.

## Credits

This project is based on the MERN blog course created by [Sahand Ghavidel](https://github.com/sahandghavidel). The code and structure closely follow his original work, and all credits for the course content and foundational implementation belong to him.

## License

Feel free to contribute or report issues on the [GitHub repository](https://github.com/yourusername/mern-blog). Your feedback and contributions are welcome!
