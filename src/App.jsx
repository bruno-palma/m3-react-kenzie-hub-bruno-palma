import { ToastContainer } from "react-toastify";
import { RouterMain } from "./routes/RouterMain";
import "react-toastify/dist/ReactToastify.css";
import "./styles/index.scss";

const App = () => {
  return (
    <>
      <RouterMain />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default App;
