import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import page components
import Login from "./Login";
import Browse from "./Browse";

const Body = () => {
  // Set up routes for the application
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />, // Route for login page
    },
    {
      path: "/browse",
      element: <Browse />, // Route for browse page
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
      {/* Provides the appRouter to the application */}
    </div>
  );
};

export default Body;
