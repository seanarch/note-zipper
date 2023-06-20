import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./screens/LandingPage/LandingPage";
import "./App.css";
import MyNotes from "./screens/MyNotes/MyNotes";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
import CreateNote from "./screens/CreateNote/CreateNote";
import SingleNote from "./screens/SingleNote";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Route path="/" exact component={LandingPage} />
        <Route path="/login" exact component={LoginScreen} />
        <Route path="/register" exact component={RegisterScreen} />
        <Route path="/createnote" component={CreateNote} />
        <Route path="/note/:id" component={SingleNote} />
        <Route path="/mynotes" component={MyNotes} />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
