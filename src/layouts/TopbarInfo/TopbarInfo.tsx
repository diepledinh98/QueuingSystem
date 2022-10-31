import './TopbarInfo.scss'
import { BellOutlined } from '@ant-design/icons';
import { Avatar, Image } from 'antd';
import user from '../../assets/img/user.png'
import { auth } from '../../config/index'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react';


interface AuthUser {
    email: string,
}
const TopbarInfo = () => {

    const [usercurrent, setUsercurrent] = useState<AuthUser | null>(null)
    useEffect(() => {
        onAuthStateChanged(auth, (curr: any) => {
            setUsercurrent(curr)
        })
    }, [])

    return (
        <div className='Topbar_info'>
            <BellOutlined className='icon__info' />
            <div className='info__user' >
                <Avatar className='img__user' src={user} />
                <div className='info__detail'>
                    <p className='hello'>Xin chào</p>
                    <p className='info'>{usercurrent?.email}</p>
                </div>
            </div>
        </div>
    )
}

export default TopbarInfo