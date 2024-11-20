import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import page components
import Login from "./Login";
import Browse from "./Browse";

const Body = () => {
  // Set up routes for the application
  const appRouter = createBrowserRouter(
    [
      {
        path: "/",
        element: <Login />, // Route for login page
      },
      {
        path: "/browse",
        element: <Browse />, // Route for browse page
      },
    ],
    {
      future: {
        v7_startTransition: true,
        v7_relativeSplatPath: true,
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_skipActionErrorRevalidation: true,
      },
    }
  );

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
