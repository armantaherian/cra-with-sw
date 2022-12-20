import { useLocation, useNavigate } from "react-router-dom";

export function usePathname() {
  const location = useLocation();
  return location.pathname;
}

// base on our needs... base on the idea on this
// https://stackoverflow.com/questions/68782781/react-router-v6-history-listen
// let's make the following wrapper around react router.
export default function useHistory() {
  const navigate = useNavigate();
  // const location = useLocation();
  const pathName = usePathname();

  console.log(pathName);

  const listen = () => {};

  return {
    push: navigate,
    go: navigate,
    goBack: () => navigate(-1),
    goForward: () => navigate(1),
    listen,
    // location,
  };
}
