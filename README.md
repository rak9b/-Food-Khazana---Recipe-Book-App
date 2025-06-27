# 🍲 Food Khazana - Recipe Book App

-A user-friendly Recipe Book App where users can manage their recipes, discover recipes from others, add recipes to a wishlist, and like recipes. The app features a dynamic top recipes section based on likes, providing a simple and engaging platform for food enthusiasts.
---
...................
## 🌟 Why Food Khazana?

> “Food is the ingredient that binds us together.”  
Explore global recipes, share your creations, and discover community favorites — all in one place.

---
## 🌐 Live Site
🔗 [Food Khazana](https://food-khazana.netlify.app/)  

## 🧩 Key Features

- 🔐 **Authentication & Authorization**
  - Email/Password login and registration
  - Google sign-in
  - Protected routes for logged-in users only
  - Avatar menu with logout functionality

- 📝 **Recipe Management**
  - Add new recipes with image, title, cuisine, steps, and categories
  - View all recipes in a responsive 4-column layout
  - View individual recipe details (private route)
  - Like button increases like count (except on your own recipes)

- 🌍 **Discover & Filter**
  - Top liked recipes shown on home
  - Filter recipes by cuisine on "All Recipes" page

- 💖 **User Features**
  - My Recipes section for managing personal recipes
  - Update and delete your own recipes
  - Sweet Alerts for success and error feedback (no default alerts used)

- 🎨 **Enhanced UI**
  - Light/Dark mode toggle(DaisyUI theme)
  - Animations using Lottie, React Simple Typewriter
  - Fully responsive design for all devices

---


## 🚀 Tech Stack

| Frontend | Backend |
|----------|---------|
| React, Tailwind, DaisyUI | Node.js, Express.js |
| Firebase Auth | MongoDB Atlas |
| React Router | CORS, dotenv |
| React Icons, Lottie, Typewriter, SweetAlert2, Tooltip | Vercel Deployment |

---


## 🔐 Authentication Features

* Google Login via Firebase
* Password validation:
  * One uppercase, one lowercase, minimum 6 characters
* Real-time feedback with SweetAlert2
* No page reloads — SPA powered by React Router

---

## 🔍 Pages Breakdown

| Page           | Public/Private | Description                                  |
| -------------- | -------------- | -------------------------------------------- |
| Home           | ✅ Public       | Includes top 6 recipes and banner slider     |
| All Recipes    | ✅ Public       | Filterable list of all added recipes         |
| Add Recipe     | 🔒 Private     | Form to add a new recipe                     |
| My Recipes     | 🔒 Private     | User's personal recipe list with edit/delete |
| Recipe Details | 🔒 Private     | Detailed view with like functionality        |
| Login/Register | ✅ Public       | Email/password & Google authentication       |
| 404 Page       | ✅ Public       | Custom  404 page with Lottie React                 |

---

## 🧠 Learning Goals Achieved

- ✅ Implemented **Firebase Authentication** with Email/Password and Google Sign-In
- ✅ Managed user **profile updates** using `updateProfile` for display name and photo
- ✅ Secured the app using **Private & Protected Routes** in React Router
- ✅ Used **MongoDB database** for dynamic data storage and retrieval
- ✅ Handled **notifications and feedback** with React Toastify (no default alerts used)
- ✅ Built a **fully responsive UI** using Tailwind CSS and DaisyUI
- ✅ Integrated **Lottie animations, React Awesome Reveal**, and **React Simple Typewriter**
- ✅ Filtered and sorted recipes using **MongoDB operators (`sort`, `limit`, `filter`)**
- ✅ Enhanced user interaction with **Like buttons**, **category filters**, and **update modals**

## 📬 Contact

Made with ❤️ by **Abdullah Al Noman**
📧 Email: [noman22622@gmail.com](mailto:noman22622@gmail.com)  
🐱 GitHub: [abdullahalnoman003](https://github.com/abdullahalnoman003)
