import "../index.css";
import Header from "./Header";
import logoImg from "../../public/assets/fswd_logo.jpg";

const Login = () => {
  return (
    <div className="pb-20 parent-container">
      <Header />
      <div className="h-full max-w-[1920px] mx-auto grid xxs:grid-cols-4 xxs:gap-x-4 md:grid-cols-12 md:gap-x-6">
        <div className="h-[636px] bg-transparent border rounded-[12px] p-8 border-white  md:col-start-4 md:col-span-6">
          <div className="text-center">
            <div className="flex justify-center">
              <img
                src={logoImg}
                alt="logo"
                className="w-[59px] h-[84px] object-cover"
              />
            </div>
            <div className="font-medium text-[28px] text-white">
              Login to your account
            </div>
          </div>
          <div className="mt-4">
            <form className="flex flex-col gap-8">
              <div>
                <label htmlFor="email" className="text-[18px] text-white">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full h-[44px] bg-[rgba(96,87,104,0.41)] opacity-85 mt-4"
                />
              </div>
              <div>
                <label htmlFor="password" className="text-[18px] text-white">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  className="w-full h-[44px] bg-[rgba(96,87,104,0.41)] opacity-85 mt-4"
                />
              </div>
              <div className="flex justify-between">
                <span>
                  <input
                    type="checkbox"
                    name="remember-me"
                    id="remember"
                    className="w-4 h-4 border rounded-[2px] border-white bg-[rgba(217,217,217,0)]"
                  />
                  <label
                    htmlFor="remember"
                    className="ml-2 text-[18px] text-white"
                  >
                    Remeber me
                  </label>
                </span>
                <span>
                  <a className="text-[rgba(136,0,255,1)] text-[18px]">
                    Forgot password&nbsp;?
                  </a>
                </span>
              </div>
              <button className="mt-4 w-full h-[44px] bg-[rgba(136,0,255,1)] text-white cursor-pointer">
                Log in
              </button>
            </form>
            <div className="mt-4 text-center">
              <span className="text-white text-[18px]">
                Don't have an account&nbsp;?
              </span>
              <a className="text-[rgba(136,0,255,1)] text-[18px]">
                &nbsp;Sign up now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
