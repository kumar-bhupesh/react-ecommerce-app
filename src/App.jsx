import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <AppRoutes />
      </Router>
    </>
  );
}

export default App;
