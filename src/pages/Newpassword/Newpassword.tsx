import logo from '../../assets/img/LogoAlta.png';
import group341 from '../../assets/img/Group341.png';
import Frame from '../../assets/img/Frame.png'
import './Newpassword.scss';
import { ExclamationCircleOutlined } from "@ant-design/icons/lib/icons";
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

function Newpassword() {
    return (
        <>
            <div className='newpassword'>

                <Layout className="layout-signin">
                    <Content className="col-signin">
                        <img src={logo} alt="" className="logo-img" />
                        <Form

                            layout="vertical"
                            className="row-col"
                        >

                            <div className='lst'>
                                <p className='title__setnew'>Đặt lại mật khẩu mới</p>
                                <Form.Item
                                    className="frame-input-password"

                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message: `Vui lòng nhập mật khẩu!`
                                        },
                                    ]}
                                >
                                    <div className="label-password">Mật khẩu *</div>
                                    <Input.Password className="input-password" style={{ marginTop: -13 + 'px' }} />
                                </Form.Item>

                                <Form.Item
                                    className="frame-input-password"

                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message: `Vui lòng nhập mật khẩu!`
                                        },
                                    ]}
                                >
                                    <div className="label-password">Nhập lại mật khẩu mới *</div>
                                    <Input.Password className="input-password" style={{ marginTop: -13 + 'px' }} />
                                </Form.Item>

                                <Button className='btn__setnew'>Xác nhận</Button>
                            </div>




                        </Form>
                    </Content>
                    <Content className="sign-img">
                        <img src={Frame} alt="" className="signin-img" />



                    </Content>
                </Layout>
            </div>
        </>
    );
}

export default Newpassword;