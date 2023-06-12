import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./screens/LandingPage/LandingPage";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <main>
        <LandingPage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
