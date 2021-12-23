import { Routes, Route } from "react-router-dom";
import { AUTH, Auth } from "./routes";
import { Home } from "./views";

const App = () => {
  return (
    <Routes>
      <Route path={AUTH} element={<Auth />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default App;
