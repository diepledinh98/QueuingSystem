import './Device.scss'
import { Layout, Image } from 'antd';
import MenuBar from '../../layouts/MenuBar/MenuBar';
import TopBar from '../../layouts/TopBar/TopBar';
import { Select, Table, Tag } from 'antd';
import { Input, Space } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { PlusSquareOutlined } from '@ant-design/icons'
import { AreaHTMLAttributes, useEffect, useState } from 'react';
import { collection, DocumentData, onSnapshot, QuerySnapshot } from "firebase/firestore";
import { db } from '../../config/index'

const { Option, OptGroup } = Select;
const { Search } = Input;

interface DataType {
    id: string
    name: string
    addressIP: string
    Status: string
    connect: string
    service: string
    detail: string
    update: string



}
interface TypeDevices {
    deviceID?: string
    deviceName?: string
    deviceIP?: string
    deviceStatus?: boolean
    deviceConnect?: boolean
    services?: string
    detail?: string
    update?: string
}
const columns: ColumnsType<TypeDevices> = [
    {
        title: 'Mã thiết bị',
        dataIndex: 'deviceID',
        align: 'left'
    },
    {
        title: 'Tên thiết bị',
        className: 'column-money',
        dataIndex: 'deviceName',
        align: 'left',

    },
    {
        title: 'Địa chỉ IP',
        dataIndex: 'deviceIP',
    },
    {
        title: 'Trạng thái hoạt động',
        dataIndex: 'deviceStatus',
        render: (tag: boolean) => (

            <span>
                <Tag style={{ border: 'none', background: 'transparent', paddingRight: 0 }}>
                    <div style={{ background: tag === true ? '#34CD26' : '#E73F3F', width: 8, height: 8, borderRadius: 20, marginRight: 4 }}></div>
                </Tag>
                {tag ? 'Hoạt động' : 'Ngưng hoạt động'}

            </span>
        )

    },
    {
        title: 'Trạng thái kết nối',
        dataIndex: 'deviceConnect',
        render: (tag: any) => (
            <span>
                <Tag style={{ border: 'none', background: 'transparent', paddingRight: 0 }}>
                    <div style={{ background: tag ? '#34CD26' : '#E73F3F', width: 8, height: 8, borderRadius: 20, marginRight: 4 }}></div>
                </Tag>
                {tag === true ? 'Kết nối' : 'Ngắt kết nối'}

            </span>
        )
    },
    {
        title: 'Dịch vụ sử dụng',
        dataIndex: 'services'
    },
    {
        title: '',
        dataIndex: 'detail',
        render: text => <a>{text}</a>,

    },
    {
        title: '',
        dataIndex: 'update',
        render: text => <a>{text}</a>,
    },
];

const Device = () => {

    const [listDevice, setListDevice] = useState<TypeDevices[]>([])
    const [status, setStatus] = useState('all')

    useEffect(
        () => {
            onSnapshot(collection(db, 'device'), (snapshot:
                QuerySnapshot<DocumentData>) => {
                setListDevice(
                    snapshot.docs.map((doc) => {
                        return {
                            ...doc.data(),
                        }
                    })
                )
            }
            )
        },
        []
    )

    const handleSelectStatus = () => {

    }


    return (
        <div className='device'>
            <Layout>
                <MenuBar />
                <Layout>
                    <TopBar />
                    <div className='content__device'>
                        <div className='title__device'>
                            Danh sách thiết bị
                            <div className='add_device'>
                                <PlusSquareOutlined className="add_device-icon" />
                                Thêm thiết bị
                            </div>
                        </div>
                        <div className='actions__device'>
                            <div className='action__device'>
                                <p className='text_action'>Trạng thái hoạt động</p>
                                <Select style={{ marginRight: 24 }} className='select__deveice' onChange={event => setStatus(event.target.value)} >
                                    <Option value="all">Tất cả</Option>
                                    <Option value="active">Hoạt động</Option>
                                    <Option value="stop">Ngưng hoạt động</Option>
                                </Select>
                            </div>

                            <div className='status__device'>
                                <p className='text_action'>Trạng thái kết nối</p>
                                <Select defaultValue="all" style={{ marginRight: 188 }} className='select__deveice' >
                                    <Option value="lucky">Tất cả</Option>
                                    <Option value="lucy">Kết nối</Option>
                                    <Option value="lucy">Mất kết nối</Option>
                                </Select>
                            </div>

                            <div className='search__device'>
                                <p className='text_action'>Từ khóa</p>
                                <Search placeholder="Nhập từ khóa " className='input__device' enterButton />
                            </div>
                        </div>


                        <Table
                            columns={columns}
                            dataSource={listDevice}
                            bordered
                            className='table__device'
                            rowClassName={(record, index) => index % 2 === 0 ? 'table-row-light' : 'table-row-dark'}
                        />
                    </div>

                </Layout>
            </Layout>
        </div>
    )
}
export default Device