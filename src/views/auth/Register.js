import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button, Checkbox, Typography } from "../../components/utilities";
import { LOGIN_ROUTE } from "../../routes";

const Register = () => {
  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-50 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <Typography variant="h6">Sign up with</Typography>
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
                <div className="text-blueGray-400 text-center mb-3 font-bold">
                  <Typography
                    variant="small"
                    className="text-center mb-3 font-bold"
                  >
                    Or sign up with credentials
                  </Typography>
                </div>
                <form>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Name
                    </label>
                    <input
                      type="email"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Name"
                    />
                  </div>

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

                  <Checkbox>
                    I agree with the
                    <Link to="/" className="text-blue-500">
                      Privacy Policy
                    </Link>
                  </Checkbox>

                  <div className="text-center mt-6">
                    <Button sizes="lg" className="w-full">
                      Sign up
                    </Button>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex flex-wrap mt-6 relative justify-end">
              <div className="w-1/2 text-right">
                <Link to={LOGIN_ROUTE}>
                  <Typography variant="body2">Login</Typography>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
