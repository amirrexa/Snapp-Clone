import React, {useState} from 'react';
import './navbar.scss';
import {UserOutlined, PhoneOutlined, LogoutOutlined} from '@ant-design/icons';
import {KEY_PROFILE, Profile} from "../../core/constants/constants";
import Button from "../button/button";
import {notification} from "antd";
import LoginModal from "../modals/login/login";

interface NavbarProps {
    profile: Profile;
}

const Navbar: React.FC<NavbarProps> = (props: NavbarProps) => {
    const [isLoginModalVisible, setIsLoginModalVisible] = useState<boolean>(false);
    const isLoggedIn = localStorage.getItem(KEY_PROFILE) !== null;

    const handleLogout = () => {
        localStorage.removeItem(KEY_PROFILE);
        notification.success({message: "با موفقیت از حساب کاربری خود خارج شدید."})
        setTimeout(() => {
            window.location.href = "/";
        }, 1000)
    };

    return (
        <div className="sc-navbar">
            <div className="navbar-profile">
                {props.profile ?
                    <>
                        <div className="profile-name">
                            <UserOutlined/>
                            {props.profile.username}،
                            خوش آمدید.
                        </div>
                        <div className="phone-number">
                            <PhoneOutlined/> {props.profile.phoneNumber}
                        </div>
                        <Button type="logout" text="خروج" icon={<LogoutOutlined />} onClick={handleLogout}/>
                    </>
                    :
                    <>
                        <div className="profile-name">
                            <UserOutlined/> برای مشاهده ی امکانات و دسترسی های بیشتر، وارد شوید.
                        </div>
                        <Button type="primary" text="ورود" onClick={() => setIsLoginModalVisible(true)}/>
                    </>
                }
            </div>
            <LoginModal visible={isLoginModalVisible} onCancel={() => setIsLoginModalVisible(false)}/>
        </div>
    );
};

export default Navbar;
