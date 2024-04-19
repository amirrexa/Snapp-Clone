import './login.scss'
import React, {useState} from 'react';
import {Modal, Input, notification} from 'antd';
import {KEY_PROFILE, Profile} from '../../../core/constants/constants';
import Button from "../../button/button";

interface LoginModalProps {
    visible: boolean;
    onCancel: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({visible, onCancel}) => {
    const [profile, setProfile] = useState<Profile>({
        username: '',
        password: '',
        phoneNumber: '',
    });

    const handleLogin = () => {
        localStorage.setItem(KEY_PROFILE, JSON.stringify(profile))
        notification.success({message: "با موفقیت وارد شدید."})
        setTimeout(() => window.location.href = "/", 1000)
        onCancel();
    };

    return (
        <Modal
            className={"sc-login-modal"}
            title="ورود"
            visible={visible}
            onCancel={onCancel}
            footer={[
                <>
                    <Button key="cancel" text={"لغو"} type={"outlined"} onClick={onCancel}/>
                    <Button key="login" text={"ورود"} type="primary" onClick={handleLogin}/>
                </>
            ]}
        >
            <Input addonBefore={"نام کاربری"} placeholder="نام کاربری" value={profile?.username}
                   onChange={(e) => setProfile({...profile, username: e.target.value})}/>
            <Input.Password addonBefore={"رمز عبور"} placeholder="رمز عبور" value={profile?.password}
                            onChange={(e) => setProfile({...profile, password: e.target.value})}/>
            <Input addonBefore={"شماره تلفن"} placeholder="شماره تلفن" value={profile?.phoneNumber}
                   onChange={(e) => setProfile({...profile, phoneNumber: e.target.value})}/>
        </Modal>
    );
};

export default LoginModal;
