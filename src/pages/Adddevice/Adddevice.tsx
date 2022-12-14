import { Layout } from "antd"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MenuBar from '../../layouts/MenuBar/MenuBar';
import TopBar from '../../layouts/TopBar/TopBar';
import './Adddevice.scss'
import { Avatar, Col, Row } from 'antd';
import { Button, Form, Input } from 'antd';
import { Select } from 'antd';
import { db } from '../../config/index'
import { async } from "@firebase/util";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const { Option, OptGroup } = Select;
const Adddevice = () => {
    const navigate = useNavigate()
    const OPTIONS = ['Khám tim mạch', 'Khám sản - Phụ khoa', 'Khám răng hàm mặt', 'Khám tai mũi họng', 'Khám hô hấp', 'Khám tổng quát'];
    const [deviceId, setDeviceId] = useState('')
    const [deviceName, setDeviceName] = useState('')
    const [catedevice, setCatedevice] = useState('')
    const [deviceIP, setDeviceIP] = useState('')
    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    const filteredOptions = OPTIONS.filter(o => !selectedItems.includes(o));
    const addDevice = async () => {
        try {
            const docRef = await addDoc(collection(db, 'device'), {
                deviceIP: deviceIP,
                deviceName: deviceName,
                deviceID: deviceId,
                deviceStatus: true,
                deviceConnect: true,
                detail: 'chi tiết',
                update: 'cập nhật',
                services: selectedItems
            })
            navigate('/thiet-bi')

        }
        catch (e) {
            console.log(e);

        }
    }
    useEffect(
        () => {

        }
    )
    return (
        <div>
            <Layout>
                <MenuBar />
                <Layout>
                    <TopBar />
                    <div className="add_device">
                        <div className="title__add">
                            Thêm thiết bị
                        </div>
                        <div className="content__add">
                            <div className="sub__title__add">
                                Thông tin thiết bị
                            </div>
                            <div className="body__add">
                                <Row>
                                    <Col span={12}>
                                        <p className="name__add">Mã thiết bị <span style={{ color: 'red' }}>*</span></p>
                                        <Input className='add__input' placeholder="Nhâp mã thiết bị" onChange={(event) => setDeviceId(event.target.value)} />
                                    </Col>
                                    <Col span={12}>
                                        <p className="name__add">Loại thiết bị <span style={{ color: 'red' }}>*</span></p>
                                        <select className="add__input" placeholder="Chọn thiết bị">
                                            <option>KIO_01</option>
                                            <option>KIO_02</option>
                                            <option>KIO_03</option>
                                        </select>
                                    </Col>
                                </Row>
                                <Row style={{ marginTop: 16 }}>
                                    <Col span={12}>
                                        <p className="name__add">Tên thiết bị <span style={{ color: 'red' }}>*</span></p>
                                        <Input className='add__input' placeholder="Nhập tên thiết bị" onChange={(event) => setDeviceName(event.target.value)} />
                                    </Col>
                                    <Col span={12}>
                                        <p className="name__add">Tên đăng nhập <span style={{ color: 'red' }}>*</span></p>
                                        <Input className='add__input' placeholder="Nhập tài khoản" />
                                    </Col>
                                </Row>
                                <Row style={{ marginTop: 16 }}>
                                    <Col span={12}>
                                        <p className="name__add">Địa chỉ IP <span style={{ color: 'red' }}>*</span></p>
                                        <Input className='add__input' placeholder="Nhập địa chỉ IP" onChange={(event) => setDeviceIP(event.target.value)} />
                                    </Col>
                                    <Col span={12}>
                                        <p className="name__add">Mật khẩu <span style={{ color: 'red' }}>*</span></p>
                                        <Input className='add__input' placeholder="Nhập mật khẩu" />
                                    </Col>
                                </Row>

                                <Row style={{ marginTop: 16 }}>
                                    <p className="name__add">Dịch vụ sử dụng <span style={{ color: 'red' }}>*</span></p>
                                    <Select
                                        className="add__service"
                                        mode="multiple"
                                        placeholder="Nhập dịch vụ sử dụng"
                                        value={selectedItems}
                                        onChange={setSelectedItems}
                                        style={{ width: '100%' }}
                                        options={filteredOptions.map(item => ({
                                            value: item,
                                            label: item,
                                        }))}
                                    />
                                </Row>
                            </div>
                        </div>
                        <div className="action__add">
                            <div className="btn__add btn_cancel">
                                Hủy bỏ
                            </div>
                            <div className="btn__add btn__add_device" onClick={addDevice}>
                                Thêm thiết bị
                            </div>
                        </div>
                    </div>
                </Layout>
            </Layout>
        </div >
    )
}

export default Adddevice