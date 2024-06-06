//import logo from './logo.svg';
import "./App.css";
import { BrowserRouter, Route, Routes, useNavigate, useLocation } from "react-router-dom";
import {useEffect} from "react";
import Login from "../src/pages/login/Login";
import Firstmain from "./pages/Firstmain";
import List from "./pages/list/List";
import Today from "./pages/Today/Today";
import Gong from "./pages/Gong";
import Mainp from "./pages/mainprofilpage/Mainp";
import Memo from "./pages/memo/Memo";
import Read from "./pages/memo/Read";
import Signup from "./pages/signup/L-signup";
import PwSearch from "./pages/login/L-pwSearch";
import Repw from "./pages/login/Repw";
import Fsignup from "./pages/signup/Fsignup";
import Mypage from "./pages/mainprofilpage/Mypage";
import Tier from "./pages/tier/Tier";
import Menubar from "./pages/menubar/Menubar";
import Main from "./pages/main/Main";
import Board from "./pages/group/Board";
import Question from "./pages/question/Question.jsx";
import MockList from "./pages/main/MockList";


function App() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const publicPaths = ["/", "/login", "/signup","/pwSearch","/repw","/fsignup"];
    if (!publicPaths.includes(location.pathname) && !token) {
      alert('세션이 만료되었습니다.');
      navigate("/");
    }
  }, [navigate, location.pathname, token]);
  return (
      <>

    <div className="App">
      <Routes>
        <Route path="/" element={<Firstmain />} />
        <Route path="login" element={<Login />} />
        <Route path="gong" element={<Gong />} />
        <Route path="list" element={<List />} />
        <Route path="today" element={<Today />} />
        <Route path="mainp" element={<Mainp />} />
        <Route path="memo" element={<Memo />} />
        <Route path="Read" element={<Read />} />
        <Route path="signup" element={<Signup />} />
        <Route path="pwSearch" element={<PwSearch />} />
        <Route path="repw" element={<Repw />} />
        <Route path="fsignup" element={<Fsignup />} />
        <Route path="mypage" element={<Mypage />} />
        <Route path="tier" element={<Tier />} />
        <Route path="menubar" element={<Menubar />} />
        <Route path="main" element={<Main />} />
        <Route path="group" element={<Board />} />
        <Route path="mockList" element={<MockList />} />
        <Route path="question" element={<Question/>}/>
      </Routes>
    </div>
      </>
  );
}

export default App;
