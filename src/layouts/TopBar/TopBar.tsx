import './TopBar.scss'
import { Breadcrumb, Layout } from 'antd';
import BreadTopbar from '../Breadcumbs/BreadTopbar';
import TopbarInfo from '../TopbarInfo/TopbarInfo';
const { Header } = Layout;

const TopBar = () => {
    return (
        <div className='Topbar'>
            <Header className='topbar__header'>
                <BreadTopbar />
                <TopbarInfo />
            </Header>
        </div>
    )
}

export default TopBar

