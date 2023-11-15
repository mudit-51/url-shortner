import { useLocation } from "react-router-dom";

const RedirectPage = () => {
    const loc = useLocation();
    window.location.replace(`https://balmy-apogee-405108.el.r.appspot.com${loc.pathname}`);
};

export default RedirectPage;
