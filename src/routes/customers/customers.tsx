import "./customers.scss"
import React from 'react';
import Button from "../../components/button/button";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import {Space} from "antd";

const Customers: React.FC = () => {
    const customersData = Array.from({ length: 30 }, (_, index) => ({
        key: index.toString(),
        name: `مشتری ${index + 1}`,
        phone: `09${Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000}`,
        address: `آدرس ${index + 1}`,
        actions: (
            <Space size="small">
                <Button type="primary" icon={<EditOutlined/>}/>
                <Button type="outlined" icon={<DeleteOutlined/>}/>
            </Space>
        ),
    }));

    return (
        <div className={"sc-customers"}>
            <h1>مشتریان</h1>
            <table>
                <thead>
                <tr>
                    <th>نام</th>
                    <th>تلفن</th>
                    <th>آدرس</th>
                    <th>عملیات</th>
                </tr>
                </thead>
                <tbody>
                {customersData.map((customer) => (
                    <tr key={customer.key}>
                        <td>{customer.name}</td>
                        <td>{customer.phone}</td>
                        <td>{customer.address}</td>
                        <td>{customer.actions}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Customers;
