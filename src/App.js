import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home";
import About from "./Component/About";
import Navbar from "./Component/Navbar";
import Service from "./Component/Service";
import PageNotFound from "./Component/PageNotFound";
import UserList from "./Component/UserList";
import UserProfile from "./Component/UserProfile";
function App() {
  return (
    <div className="App">
      <h1>Hello! React Router V6</h1>

      {/* Navigations */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/user" element={<UserList />} />
          <Route path="/user/:userId" element={<UserProfile />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
