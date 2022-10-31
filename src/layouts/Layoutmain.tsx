import './Layout.scss'
import { Layout, Image } from 'antd';
import logo from '../assets/img/LogoAlta.png'
import MenuBar from './MenuBar/MenuBar';
import TopBar from './TopBar/TopBar';
import UserInformation from '../pages/UserInformation/UserInformation';





const Layoutmain = () => {
    return (
        <div className="wrapper">
            <Layout>
                <MenuBar />
                <Layout>
                    <TopBar />
                    <UserInformation />
                </Layout>
            </Layout>
        </div>
    )
}

export default Layoutmain