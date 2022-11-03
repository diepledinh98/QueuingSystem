import { Layout, Image } from 'antd';
import logo from '../../assets/img/LogoAlta.png'
import './MenuBar.scss'
import { Menu } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../config/index'
import {
    AppstoreOutlined,
    DesktopOutlined,
    CommentOutlined,
    SettingOutlined,
    FileOutlined,
    NumberOutlined,
    LogoutOutlined
} from '@ant-design/icons';
import { signOut } from 'firebase/auth';


const { Sider } = Layout;

const MenuBar = () => {
    const Navigate = useNavigate();




    const handleLogout = async () => {
        await signOut(auth)
        Navigate('/login')
    }
    return (
        <div className="menubar">
            <Sider className='sibar__menu' >
                <Image
                    className='menubar__logo'
                    width={80}
                    height={64}
                    src={logo}
                    preview={false}
                />

                <Menu
                    defaultSelectedKeys={['Dashboard']}
                    mode="inline"
                    style={{ marginTop: 54 }}
                >
                    <Menu.Item key='Dashboard' className='menu__item'>
                        <AppstoreOutlined className='icon' />
                        Dashboard
                    </Menu.Item>


                    <Menu.Item key='Dashboard' className='menu__item'>
                        <Link to='/thiet-bi'>
                            <DesktopOutlined className='icon' />
                            Thiết bị
                        </Link>
                    </Menu.Item>

                    <Menu.Item key='Dashboard' className='menu__item'>
                        <CommentOutlined className='icon' />
                        Dịch vụ
                    </Menu.Item>
                    <Menu.Item key='Dashboard' className='menu__item'>
                        <NumberOutlined className='icon' />
                        Cấp số
                    </Menu.Item>
                    <Menu.Item key='Dashboard' className='menu__item'>
                        <FileOutlined className='icon' />
                        Báo cáo
                    </Menu.Item>
                    <Menu.Item key='Dashboard' className='menu__item'>
                        <SettingOutlined className='icon' />
                        Cài đặt hệ thống
                    </Menu.Item>
                    {/* <SubMenu
                        title={
                            <span>
                                <SettingOutlined className='icon' />
                                <span >Cài đặt hệ thống</span>
                            </span>
                        }

                    >
                        <Menu.ItemGroup key='AboutUS' title='Country 1'>
                            <Menu.Item key='location1'> Location 1</Menu.Item>
                            <Menu.Item key='location2'> Location 2</Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu> */}


                </Menu>

                <div key='Dashboard' className='menu__item-logout' onClick={handleLogout}>
                    <LogoutOutlined className='icon-logout' />
                    Đăng xuất
                </div>
            </Sider>
        </div>
    )
}

export default MenuBar

