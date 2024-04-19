import './support.scss'
import React, {useState} from 'react';
import {Modal, Input, notification} from 'antd';
import {SupportTicket} from '../../../core/constants/constants';
import Button from "../../button/button";

interface LoginModalProps {
    visible: boolean;
    onCancel: () => void;
}

const SupportModal: React.FC<LoginModalProps> = ({visible, onCancel}) => {
    const [ticket, setTicket] = useState<SupportTicket>({
        title: '',
        description: ''
    });

    const handleSubmit = () => {
        notification.success({message: "تیکت شما به پشتیبانی ارسال شد."})
        setTicket({title: '', description: ''})
    };

    return (
        <Modal
            className={"sc-support-modal"}
            title="پشتیبانی"
            visible={visible}
            onCancel={onCancel}
            footer={[
                <>
                    <Button key="cancel" text={"لغو"} type={"outlined"} onClick={onCancel}/>
                    <Button key="login" text={"ارسال"} type="primary" onClick={handleSubmit}/>
                </>
            ]}
        >
            <Input addonBefore={"موضوع"} placeholder="موضوع" value={ticket?.title}
                   onChange={(e) => setTicket({...ticket, title: e.target.value})}/>
            <Input.TextArea placeholder="توضیحات" value={ticket?.description}
                            onChange={(e) => setTicket({...ticket, description: e.target.value})}/>
        </Modal>
    );
};

export default SupportModal;
