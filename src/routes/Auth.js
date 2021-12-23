import { Footer, Header } from "../components";
import { Routes, Route } from "react-router-dom";
import { Login, Register } from "../views/auth";
import { Scroll } from "../components/utilities";

const Auth = () => {
  return (
    <>
      <Header />
      <main>
        <section className="relative w-full h-full py-10">
          <div className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"></div>
          <Routes>
            <Route index element={<Login />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Routes>
        </section>
      </main>
      <Scroll />
      <Footer />
    </>
  );
};

export default Auth;
