import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/HomePage/Home/Home";
import Blog from "./Pages/Blog/Blog";
import About from "./Pages/About/About";
import Header from "./Pages/Shared/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Pages/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";
import Register from "./Pages/Register/Register";
import CheckOut from "./Pages/CheckOut/CheckOut";
import RequireAuth from "./Pages/RequireAuth/RequireAuth";

function App() {
  return (
    <div className="">
      <div className="container">
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/blog" element={<Blog></Blog>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route
            path="/checkout"
            element={
              <RequireAuth>
                <CheckOut></CheckOut>
              </RequireAuth>
            }
          ></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
