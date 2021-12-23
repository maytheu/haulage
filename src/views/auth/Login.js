import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { Button, Checkbox, Typography } from "../../components/utilities";
import { REGISTER_ROUTE, RESET_PASSWORD } from "../../routes";
const Login = () => {
  const navigate = useNavigate();
  const login = () => {
    navigate("/");
  };
  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-50 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <Typography variant="h6">Sign in with</Typography>
                </div>
                <div className="flex justify-evenly">
                  <Button className="flex items-center">
                    <FaGoogle className="mr-2" /> Google
                  </Button>
                  <Button className="flex items-center">
                    <FaFacebookF className="mr-2" /> Facebook
                  </Button>
                </div>
                <hr className="mt-6 border-b-1 border-gray-400" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <Typography
                  variant="small"
                  className="text-center mb-3 font-bold"
                >
                  Or sign in with credentials
                </Typography>
                <form>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                    />
                  </div>
                  <Checkbox>Remember me</Checkbox>

                  <div className="text-center mt-6">
                    <Button sizes="lg" className="w-full" onClick={login}>
                      Sign in
                    </Button>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex flex-wrap mt-6 relative">
              <div className="w-1/2">
                <Link to={RESET_PASSWORD}>
                  <Typography variant="small">Forgot password?</Typography>
                </Link>
              </div>
              <div className="w-1/2 text-right">
                <Link to={REGISTER_ROUTE}>
                  <Typography variant="small">Create new account</Typography>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
