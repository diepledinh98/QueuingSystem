import Login from "../pages/login/Login";
import ForgotPassword from '../pages/ForgotPassword/ForgotPassword'
import Newpassword from "../pages/Newpassword/Newpassword";
import Layoutmain from "../layouts/Layoutmain";
import Device from "../pages/Device/Device";

type routeType = {
    path: string;
    component: React.ReactElement;
};
export const publicRoutes: routeType[] = [
    { path: '/info', component: <Layoutmain /> },
    { path: '/login', component: <Login /> },
    { path: '/forgotpassword', component: <ForgotPassword /> },
    { path: '/setnewpassword', component: <Newpassword /> },
    { path: '/thiet-bi', component: <Device /> }
];



