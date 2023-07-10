import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import AuthLoginButton from "@/components/auth/AuthLoginButton";

const providers = [
  {
    id: "google",
    name: "Google",
    icon: <FcGoogle size={30} />,
  },
  {
    id: "github",
    name: "Github",
    icon: <FaGithub size={30} />,
  },
];

const Auth = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-black">
      <div>
        <h1 className="font-bebas-neue text-center font-[400] text-aqua text-3xl tracking-widest">
          <span className="font-[700]">LITE</span>
          <span>FLIX</span>
        </h1>
        <div className="flex items-center justify-center flex-col mt-5">
          {providers.map((provider) => (
            <AuthLoginButton
              key={provider.id}
              providerId={provider.id}
              providerName={provider.name}
              providerIcon={provider.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Auth;
