import React, { useState } from "react";
import './Login.scss';
import logo from '../../assets/img/LogoAlta.png';
import group341 from '../../assets/img/Group341.png';
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
import { auth } from '../../config/index'
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;
const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleClickLogin = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCurrent) => {
                const user = userCurrent.user;
                console.log(user);

                navigate('/info')
            })
            .catch((err) => {
                alert('loi roi')
            })
    }


    return (
        <>
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
                        // rules={[
                        //     {
                        //         required: true,
                        //         message: "Vui lòng nhập tên đăng nhập!",
                        //     },


                        // ]}
                        >
                            <div className="label-singin">Tên đăng nhập *</div>
                            <Input className="input-singin" onChange={event => setEmail(event.target.value)} />
                        </Form.Item>

                        <Form.Item
                            className="frame-input-password"

                            name="password"
                        // rules={[
                        //     {
                        //         required: true,
                        //         message: `Vui lòng nhập mật khẩu!`
                        //     },
                        // ]}
                        >
                            <div className="label-password">Mật khẩu *</div>
                            <Input.Password className="input-password" style={{ marginTop: -13 + 'px' }}
                                onChange={event => setPassword(event.target.value)}
                            />
                        </Form.Item>


                        {/* <p className="login__error">
                            <ExclamationCircleOutlined />
                            Sai mật khẩu hoặc tên đăng nhập
                        </p> */}
                        <p className="forgot-password">
                            Quên mật khẩu
                        </p>

                        <Button htmlType="submit" className="btn-signin" onClick={handleClickLogin}>
                            Đăng nhập
                        </Button>
                        {/* <p className="forgot-password-show">
                            Quên mật khẩu
                        </p> */}


                    </Form>
                </Content>
                <Content className="sign-img">
                    <img src={group341} alt="" className="signin-img" />

                    <p>Hệ thống</p>
                    <h3>QUẢN LÝ XẾP HÀNG</h3>

                </Content>
            </Layout>
        </>
    )
}

export default Login;