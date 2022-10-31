import './UserInformation.scss'

import { Layout, Image } from 'antd';
import { Avatar, Col, Row } from 'antd';
import userInfo from '../../assets/img/userinfo.png'
import { Button, Form, Input } from 'antd';
import { db } from '../../config/index'
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { collection, DocumentData, onSnapshot, QuerySnapshot } from 'firebase/firestore';
const { Content } = Layout;
interface UserType {
    id?: string
    email?: string
    name?: string
    phone?: string
    role?: string
    username?: string
}
const UserInformation = () => {
    const [user, setUser] = useState<UserType[]>([])
    const navigate = useNavigate();
    useEffect(
        () =>
            onSnapshot(collection(db, 'users'), (snapshot:
                QuerySnapshot<DocumentData>) => {
                setUser(
                    snapshot.docs.map((doc) => {
                        return {
                            id: doc.id,
                            ...doc.data(),
                        }
                    })
                )
            }),
        []
    )

    const handleinfo = () => {
        navigate('/info')
    }

    return (
        <div className='user_information'>
            <Content>
                <div className='content__info'>
                    <div className='content__info-img' onClick={handleinfo}>
                        <Avatar className='info-img' src={userInfo} />
                        <p>{user[0]?.username}</p>
                    </div>

                    <div className='content__info-information'>


                        <Row>
                            <Col span={12}>
                                <p>Tên người dùng</p>
                                <Input className='info__input' value={user[0]?.username} />
                            </Col>
                            <Col span={12}>
                                <p>Tên đăng nhập</p>
                                <Input className='info__input' value={user[0]?.email} />
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12}>
                                <p>Số điện thoại</p>
                                <Input className='info__input' value={user[0]?.phone} />
                            </Col>
                            <Col span={12}>
                                <p>Mật khẩu</p>
                                <Input className='info__input' value='123456' type='password' />
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12}>
                                <p>Email</p>
                                <Input className='info__input' value={user[0]?.email} />
                            </Col>
                            <Col span={12}>
                                <p>Vai trò:</p>
                                <Input className='info__input' value={user[0]?.role} />
                            </Col>
                        </Row>

                    </div>
                </div>
            </Content>
        </div>
    )
}

export default UserInformation