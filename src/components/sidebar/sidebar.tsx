import React, {useEffect, useState} from 'react';
import './sidebar.scss';
import Button from '../button/button';
import {
    HomeOutlined,
    OrderedListOutlined,
    UserOutlined,
    SettingOutlined,
    QuestionCircleOutlined,
    LogoutOutlined
} from '@ant-design/icons';
import LoginModal from '../modals/login/login';
import {KEY_PROFILE, Profile} from '../../core/constants/constants';
import {notification} from "antd";
import {useNavigate} from "react-router-dom";
import SupportModal from "../modals/support/support";

interface SidebarProps {
    profile: Profile;
}

const Sidebar: React.FC<SidebarProps> = (props: SidebarProps) => {
    const [isSupportModalVisible, setIsSupportModalVisible] = useState<boolean>(false);
    const isLoggedIn = localStorage.getItem(KEY_PROFILE) !== null;

    const navigate = useNavigate();


    return (
        <div className="sc-sidebar">
            <div className="sidebar-head">
                داشبورد اسنپ
            </div>
            <div className="sidebar-body">
                <ul>
                    <li onClick={() => navigate("/")}>
                        <Button type="primary" icon={<HomeOutlined/>} text="صفحه اصلی" />
                    </li>
                    {isLoggedIn && (
                        <>
                            <li onClick={() => navigate("/drivers")}>
                                <Button type="primary" icon={<UserOutlined/>} text="رانندگان"/>
                            </li>
                            <li onClick={() => navigate("/customers")}>
                                <Button type="primary" icon={<UserOutlined/>} text="مشتریان"/>
                            </li>
                            <li onClick={() => setIsSupportModalVisible(true)}>
                                <Button type="primary" icon={<QuestionCircleOutlined/>} text="پشتیبانی"/>
                            </li>
                        </>
                    )}
                </ul>
            </div>
            <SupportModal visible={isSupportModalVisible} onCancel={() => setIsSupportModalVisible(false)}/>
        </div>
    );
};

export default Sidebar;
