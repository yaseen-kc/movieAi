# MovieAI 🎬🤖

MovieAI is an AI-powered movie discovery application designed to enhance your cinematic experience. With a sleek interface, curated recommendations, and real-time data, MovieAI connects you to trending movies and personal favorites with ease.

---

## Features ✨

- **Discover Movies**: Browse trending and top-rated movies using AI recommendations.
- **User Profiles**: Manage individual user profiles with Firebase authentication.
- **Interactive UI**: Dynamic interface built with React and styled using Tailwind CSS.
- **Real-Time Updates**: Fetch now-playing movies using custom hooks (`useNowPlayingMovies.jsx`).
- **Video Backgrounds**: Enhance the experience with video previews for selected movies.

---

## Installation 💻

Follow these steps to set up the project locally:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-username/movieAi.git
   cd movieAi
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Run the Development Server**:

   ```bash
   npm run dev
   ```

4. Open your browser at [http://localhost:5173](http://localhost:5173).

---

## Usage Examples 🚀

- **Browse Movies**: Use the **Browse** component to explore trending movies or filter genres.
- **Login**: Navigate to the **Login** page to authenticate using Firebase.
- **Dynamic Components**: Experience dynamic loading with components like **MainContainer** and **SecondaryContainer**.

---

## Configuration Options ⚙️

- **Firebase Configuration**: Update the Firebase project settings in `Firebase.jsx` located in the `src/utils` directory.
- **Tailwind CSS**: Customize the styles in `tailwind.config.js`.
- **Redux Slices**: Modify application state behavior in `moviesSlice.jsx` and `userSlice.jsx` under `src/utils`.

---

## Contributing 🛠️

We welcome contributions! Follow these steps:

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your feature"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/your-feature
   ```
5. Open a pull request.

---

## Testing Instructions 🧪

1. Ensure all dependencies are installed:
   ```bash
   npm install
   ```
2. Run linting to maintain code quality:
   ```bash
   npm run lint
   ```
3. Test the application in the browser by running:
   ```bash
   npm run dev
   ```

---

## License 📄

This project is licensed under the **MIT License**. Feel free to use, modify, and distribute this project as per the terms of the license.

---

## Acknowledgements ❤️

- **React**: For providing the foundation of the app's UI.
- **Redux Toolkit**: For managing global state seamlessly.
- **Firebase**: For authentication and real-time backend services.
- **Tailwind CSS**: For modern and responsive styling.
- Special thanks to the contributors who made this project possible! 🙌

---
