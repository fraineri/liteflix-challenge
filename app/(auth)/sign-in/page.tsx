import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import AuthLoginButton from "@/components/client/AuthLoginButton";
import Logo from "@/components/server/Logo";

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
        <Logo fontSizePx={30}/>
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
