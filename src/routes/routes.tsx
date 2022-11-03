import Login from "../pages/login/Login";
import ForgotPassword from '../pages/ForgotPassword/ForgotPassword'
import Newpassword from "../pages/Newpassword/Newpassword";
import Layoutmain from "../layouts/Layoutmain";
import Device from "../pages/Device/Device";
import Detaildevice from "../pages/Detaildevice/Detaildevice";
import Adddevice from "../pages/Adddevice/Adddevice";
import UpdateDevice from "../pages/UpdateDevice/UpdateDevice";

type routeType = {
    path: string;
    component: React.ReactElement;
};
export const publicRoutes: routeType[] = [
    { path: '/info', component: <Layoutmain /> },
    { path: '/login', component: <Login /> },
    { path: '/forgotpassword', component: <ForgotPassword /> },
    { path: '/setnewpassword', component: <Newpassword /> },
    { path: '/thiet-bi', component: <Device /> },
    { path: '/thiet-bi/:id', component: <Detaildevice /> },
    { path: '/them-thiet-bi', component: <Adddevice /> },
    { path: '/cap-nhat-thiet-bi/:id', component: <UpdateDevice /> }
];



