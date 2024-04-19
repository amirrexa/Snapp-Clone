import "./drivers.scss"
import React from 'react';
import {Table, Space} from 'antd';
import {DeleteOutlined, EditOutlined} from '@ant-design/icons';
import Button from "../../components/button/button";

const Drivers: React.FC = () => {
    const driversData = Array.from({length: 30}, (_, index) => ({
        key: index.toString(),
        name: `راننده ${index + 1}`,
        phone: `09${Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000}`,
        vehicle: `خودرو ${Math.floor(Math.random() * 10)}`,
        actions: <Space size="small">
            <Button type="primary" icon={<EditOutlined/>}/>
            <Button type="outlined" icon={<DeleteOutlined/>}/>
        </Space>,
    }));

    return (
        <div className={"sc-drivers"}>
            <h1>رانندگان</h1>
            <table>
                <thead>
                <tr>
                    <th>نام</th>
                    <th>تلفن</th>
                    <th>خودرو</th>
                    <th>عملیات</th>
                </tr>
                </thead>
                <tbody>
                {driversData.map((driver, index) => (
                    <tr key={driver.key}>
                        <td>{driver.name}</td>
                        <td>{driver.phone}</td>
                        <td>{driver.vehicle}</td>
                        <td>{driver.actions}</td>
                    </tr>
                ))
                }
                </tbody>
            </table>
        </div>
    );
};

export default Drivers;
