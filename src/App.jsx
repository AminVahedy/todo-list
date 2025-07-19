import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import MainBox from "./MainBox";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="text-[16px] h-100">
      <Header />
      <MainBox />
      <Footer />
      <Toaster
        containerStyle={{
          bottom: 70,
        }}
        position="bottom-center"
        gutter={12}
        toastOptions={{
          success: {
            style: {
              background: "black",
              color: "#F1C40F",
            },
            duration: 3000,
          },
          style: {
            fontSize: "16px",
            padding: "16px 24px",
          },
        }}
      />
    </div>
  );
}

export default App;
