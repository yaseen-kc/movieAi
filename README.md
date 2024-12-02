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

1.  **Clone the Repository**:

```bash

git clone https://github.com/your-username/movieAi.git

cd movieAi

```

2.  **Install Dependencies**:

```bash

npm install

```

3.  **Run the Development Server**:

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

## Features Breakdown 📜

### Authentication and User Management

- **Login/Sign Up**

- Sign in and sign up forms powered by Firebase Authentication.

- User profiles and data management.

- Use of `useRef` hook for efficient form handling.

- Form validation for secure user input.

- **Firebase Setup**

- Firebase initialized with proper configuration for user authentication.

- Ability to create and update user profiles.

- Bugfixes for updating display names and profile pictures.

- **Routing and Navigation**

- Protected routes with login redirection if the user is not authenticated.

- Conditional redirects for authenticated users.

### Movie Discovery and Suggestions

- **Movie Data Integration**

- Register TMDB API for fetching movie data, including now playing and top-rated movies.

- Use custom hooks to manage movie data (`useNowPlayingMovies`, `usePopularMovies`).

- Created Redux slices (`moviesSlice`, `gptSlice`) to manage movie-related data in the state.

- **AI-Powered Movie Suggestions**

- Integrate OpenAI's GPT-3 for movie suggestions.

- Create a responsive movie suggestion interface using a reusable **Movie List** and **Movie Card** components.

### UI and Styling

- **Responsive UI**: TailwindCSS-based styles ensure the app is mobile-friendly and visually appealing.

- **Video Backgrounds**: Tailor the movie-watching experience with YouTube trailer videos in the background.

- **Main and Secondary Containers**: Use dynamic and engaging containers for movie display and suggestions.

### Performance Optimizations

- **Memoization**: Ensure performance optimization by memoizing components that render movie data.

- **Efficient State Management**: Use Redux for centralized state management and to avoid prop drilling.

---

## Project Setup

Before starting the project, please add the `.env` file and add your TMDB and OpenAI API keys into it.

### Steps for Vite-based `.env` Setup

1. Create a `.env` file in the root of your project (same level as `vite.config.js`).

2. Add the following keys to the `.env` file:

```env

VITE_TMDB_API_KEY=your_tmdb_api_key

VITE_OPENAI_API_KEY=your_openai_api_key

```

3. Vite automatically injects variables starting with `VITE_` into the application, so you can access these values in your code using `import.meta.env`.

For example:

```javascript
const tmdbApiKey = import.meta.env.VITE_TMDB_API_KEY;

const openAiApiKey = import.meta.env.VITE_OPENAI_API_KEY;
```

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

---
