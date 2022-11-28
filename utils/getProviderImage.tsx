import { FcGoogle } from "react-icons/fc";
import { FaUserCheck } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";

const getProviderImage = (providerName: string) => {
  switch (providerName) {
    case "Google":
      return <FcGoogle />
    case "Facebook":
      return <GrFacebookOption color="#4267B2" />
    case "GitHub":
      return <BsGithub />
    default:
      return <FaUserCheck />
  }
};

export default getProviderImage;
