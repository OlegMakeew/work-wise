import { Header } from "./components/Header/Header";
import { Home } from "./pages/Home/Home";
import { Auth } from "./pages/Auth/Auth";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config";
import {
  setUserAction,
  setUserLoadingAction,
} from "./components/Auth/store/actions";
import { useDispatch } from "react-redux";
import { getDocument } from "./hooks/useDocument";
import { MyProfileFeed } from "./pages/MyProfileFeed/MyProfileFeed";

function App() {
  const [user, setUser] = useState();
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (_user) => {
      if (_user) {
        dispatch(setUserLoadingAction(true));
        const res = await getDocument("users", _user.uid);
        setUser({ ..._user, ...res.data() });
        dispatch(setUserAction({ ..._user, ...res.data() }));
        dispatch(setUserLoadingAction(false));
      }
    });

    return () => {
      unsub();
    };
  }, []);
  return (
    <div className="App">
      <div className="wrapper">
        {location.pathname !== "/auth" && <Header />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth user={user} />} />
          <Route path="/my-profile-feed" element={<MyProfileFeed />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
