import { Header } from "./components/Header/Header";
import { Auth } from "./pages/Auth/Auth";
import { Home } from "./pages/Home/Home";
import {Routes, Route} from 'react-router-dom'

function App() {
  const user = true
  return (
    <div className="App">
      <div className="wrapper">
        {!user && <Header />}
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/auth" element={<Auth />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
