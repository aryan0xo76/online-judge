import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
    const isAdmin = localStorage.getItem("admin");
//   const isLoggedIn = false;
  return isAdmin ? <Outlet /> : <Navigate to={"/problems"} />;
};

export default PrivateRoute;
