import { useLocation } from "react-router-dom";

const RedirectPage = () => {
    const loc = useLocation();
    window.location.replace(`http://localhost:5000${loc.pathname}`);
};

export default RedirectPage;
