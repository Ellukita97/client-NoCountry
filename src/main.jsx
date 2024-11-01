import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import NavBarComponents from "./components/nav/NavBar.components.jsx";
import Footer from "./components/footer/Footer.jsx";
import App from "./pages/App.jsx";
import Admin from "./pages/Admin.jsx";
import LoginRgistrerPage from "./pages/LoginRgistrer.page.jsx";
import "./index.css";
import CardPage from "./pages/Card.page.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavBarComponents />
        <App />
      </>
    ),
  },
  {
    path: "/admin",
    element: (
      <>
        <NavBarComponents />
        <Admin />
      </>
    ),
  },
  {
    path: "/login",
    element: <LoginRgistrerPage isLogin={true} />,
  },
  {
    path: "/registrer",
    element: <LoginRgistrerPage isLogin={false} />,
  },
  {
    path: "/cart",
    element: (
      <>
        <NavBarComponents />
        <CardPage />,
      </>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <Footer />
    </Provider>
  </StrictMode>
);
