import { useState } from "react";
import backgdImage from "../../assets/images/nightClub.webp";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const UserLoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "admin2@gmail.com" && password === "123") {
      navigate("/dashboard");
    }
  };

  return (
    <div className="flex min-h-screen bg-primary-darkBg">
      <div
        className="w-1/2 bg-cover bg-center flex flex-col justify-center items-center text-center text-white xopacity-30 relative"
        style={{
          backgroundImage: `url(${backgdImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-75"></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-bold text-white">GӨӨD VIƁZ</h1>
          <p className="mt-4 text-xl text-white font-semibold drop-shadow-lg">
            The easiest way to seamlessly manage <br /> all your events.
          </p>
        </div>
      </div>

      <div className="w-1/2 flex flex-col justify-center items-center px-8">
        <div className="max-w-md w-full">
          <div className="flex justify-center mb-6">
            <div className="w-[80px] h-[80px] rounded-full bg-primary flex items-center justify-center">
              <span className="text-xl text-white font-bold">Login</span>
            </div>
          </div>

          <p className="text-sm text-gray-400 mb-8">
            Enter your credentials below!
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-400 pb-1"
              >
                Email or username
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-500 bg-[#272b30] rounded-lg px-3 py-1 focus:outline-none h-12 text-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="pb-1">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-400 pb-1"
              >
                Password
              </label>
              <div className="relative">
                <input
                  className="border w-full border-gray-500 bg-[#272b30] rounded-lg px-3 py-1 focus:outline-none h-12 text-white"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type={showPassword ? "text" : "password"}
                  required
                />
                <button
                  className="absolute top-1 right-0 p-2 rounded-lg text-sm text-white"
                  onClick={handlePasswordToggle}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <div className="pt-6">
              <Button
                type="primary"
                htmlType="submit"
                className="w-full h-12 !rounded-xl !text-white"
              >
                Login
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserLoginPage;
