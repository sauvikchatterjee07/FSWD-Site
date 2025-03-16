import fullLogo from "../../public/assets/fswd_logo_full.jpg";
import logo from "../../public/assets/fswd_logo.jpg";

const Header = () => {
  return (
    <header className="bg-transparent w-full max-w-[1920px] mx-auto flex justify-between items-center h-[72px] px-6 mb-[64px]">
      <div>
        <img src={fullLogo} className="h-[100px] w-[146px]" />
      </div>
      <div>
        <span>
          <img src={logo} className="h-[35px] w-[35px] inline" />
          <span className="text-[16px] text-white after:content-[''] after:inline after:border-r after:border-white after:ml-6 after:h-[44px]">
            Sign Up
          </span>
        </span>
        <button className="text-white border border-white rounded-[10px] bg-transparent w-[106px] h-[36px] ml-6">
          Log in
        </button>
      </div>
    </header>
  );
};

export default Header;
