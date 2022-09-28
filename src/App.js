import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { getUser, loadUser } from "./actions/user";
import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Projects from "./components/Projects/Projects";
import AdminPanel from "./components/Admin/AdminPanel";
import Timeline from "./components/Admin/Timeline";
import Youtube from "./components/Admin/Youtube";
import Project from "./components/Admin/Project";
import Loader from "./components/Loader/Loader";

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.login);
  const { loading, user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUser());
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <div className="App">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Home youtubes={user?.youtube} timelines={user?.timeline} skills={user?.skills} />} />
            <Route path="/about" element={<About about={user?.about} />} />
            <Route path="/projects" element={<Projects projects={ user?.projects } />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/account"
              element={isAuthenticated ? <AdminPanel /> : <Login />}
            />
            <Route
              path="/admin/timeline"
              element={isAuthenticated ? <Timeline /> : <Login />}
            />
            <Route
              path="/admin/youtube"
              element={isAuthenticated ? <Youtube /> : <Login />}
            />
            <Route
              path="/admin/project"
              element={isAuthenticated ? <Project /> : <Login />}
            />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
