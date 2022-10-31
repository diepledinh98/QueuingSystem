import logo from '../../assets/img/LogoAlta.png';
import group341 from '../../assets/img/Group341.png';
import Frame from '../../assets/img/Frame.png'
import { ExclamationCircleOutlined } from "@ant-design/icons/lib/icons";
import './Forgot.scss'
import {
    Layout,
    Menu,
    Button,
    Row,
    Col,
    Typography,
    Form,
    Input,
    Switch,
} from "antd";
const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;
const ForgotPassword = () => {
    return (
        <>
            <div className='forgotpassword'>

                <Layout className="layout-signin">
                    <Content className="col-signin">
                        <img src={logo} alt="" className="logo-img" />
                        <Form

                            layout="vertical"
                            className="row-col"
                        >
                            <Form.Item
                                className="frame-input"

                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: "Vui lòng nhập tên đăng nhập!",
                                    },


                                ]}
                            >
                                <div className='title-reset'>Đặt lại mật khẩu</div>
                                <div className='des-reset'>Vui lòng nhập email để đặt lại mật khẩu của bạn *</div>
                                <Input className="input-singin" />
                                <div className='btn-reset'>
                                    <Button className='reset-cancel'>Hủy</Button>
                                    <Button className='reset-continue'>Tiếp Tục</Button>
                                </div>
                            </Form.Item>



                        </Form>
                    </Content>
                    <Content className="sign-img">
                        <img src={Frame} alt="" className="signin-img" />



                    </Content>
                </Layout>
            </div>
        </>
    )
}

export default ForgotPassword;