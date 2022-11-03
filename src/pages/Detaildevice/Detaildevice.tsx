import { Layout } from "antd"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MenuBar from '../../layouts/MenuBar/MenuBar';
import TopBar from '../../layouts/TopBar/TopBar';
import { db } from '../../config/index'
import { Col, Row } from 'antd';
import { collection, doc, DocumentData, getDoc, onSnapshot, QuerySnapshot } from "firebase/firestore";
import './Detaildevice.scss'
import { servicesVersion } from "typescript";
interface DetailDevice {
    id?: string
    deviceID?: string
    deviceName?: string
    deviceIP?: string
    deviceStatus?: boolean
    deviceConnect?: boolean
    services?: string[]

}
const Detaildevice = () => {

    const [detaildevice, setDetaildevice] = useState<DetailDevice>()
    let userId = useParams();

    let idd: any = userId.id

    useEffect(
        () => {
            const docRef = doc(db, 'device', idd)
            onSnapshot(docRef, (doc) => {
                setDetaildevice(doc.data())
            })
        }, [])

    console.log(detaildevice);



    return (
        <div className='device'>
            <Layout>
                <MenuBar />
                <Layout>
                    <TopBar />
                    <div className="detail__device">
                        <div className="title__detail__device">
                            Quản lý thiết bị

                            <div className="update__device">
                                Cập nhật thiết bị
                            </div>
                        </div>

                        <div className="content__detail__device">
                            <div className="title_info__device">
                                Thông tin thiết bị


                            </div>

                            <Row justify="start" style={{ marginLeft: 24, marginTop: 20 }}>
                                <Col span={12}>
                                    <Row>
                                        <Col flex="130px" className="text__info_name">Mã thiết bị:</Col>
                                        <Col flex="auto" className="text__info">{detaildevice?.deviceID}</Col>
                                    </Row>
                                </Col>

                                <Col span={12}>
                                    <Row>
                                        <Col flex="130px" className="text__info_name">Loại thiết bị:</Col>
                                        <Col flex="auto" className="text__info">{detaildevice?.deviceName}</Col>
                                    </Row>
                                </Col>

                            </Row>
                            <Row justify="start" style={{ marginLeft: 24, marginTop: 20 }}>
                                <Col span={12}>
                                    <Row>
                                        <Col flex="130px" className="text__info_name">Tên thiết bị:</Col>
                                        <Col flex="auto" className="text__info">{detaildevice?.deviceName}</Col>
                                    </Row>
                                </Col>

                                <Col span={12}>
                                    <Row>
                                        <Col flex="130px" className="text__info_name">Tên đăng nhập:</Col>
                                        <Col flex="auto" className="text__info">Diep LE</Col>
                                    </Row>
                                </Col>

                            </Row>
                            <Row justify="start" style={{ marginLeft: 24, marginTop: 20 }}>
                                <Col span={12}>
                                    <Row>
                                        <Col flex="130px" className="text__info_name">Địa chỉ IP:</Col>
                                        <Col flex="auto" className="text__info">{detaildevice?.deviceIP}</Col>
                                    </Row>
                                </Col>

                                <Col span={12}>
                                    <Row>
                                        <Col flex="130px" className="text__info_name">Mật khẩu:</Col>
                                        <Col flex="auto" className="text__info">CMS</Col>
                                    </Row>
                                </Col>

                            </Row>

                            <Row>
                                <div className="list_service text__info_name" style={{ marginLeft: 24, marginTop: 20 }}>Dịch vụ sử dụng:</div>
                                <Col span={24} style={{
                                    display: 'flex', fontSize: 16,
                                    fontWeight: 400,
                                    color: '#535261',
                                    marginLeft: 24
                                }}>
                                    {detaildevice?.services?.map((service, index) => {


                                        return (
                                            <div
                                                style={{
                                                    fontSize: 16,
                                                    fontWeight: 400,
                                                    color: '#535261',
                                                    display: 'flex'
                                                }}

                                            >{`${service}, `}</div>
                                        )
                                    })}
                                </Col>
                            </Row>


                        </div>
                    </div>

                </Layout>
            </Layout>


        </div>
    )
}

export default Detaildevice