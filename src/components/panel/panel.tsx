import React, {ReactElement, ReactNode, useState} from 'react';
import './panel.scss';
import Navbar from '../navbar/navbar';
import Sidebar from "../sidebar/sidebar";
import {KEY_PROFILE} from "../../core/constants/constants";

interface PanelProps {
    children?: ReactElement;
}

const Panel: React.FC<PanelProps> = (props: PanelProps) => {

    const profile = JSON.parse(localStorage.getItem(KEY_PROFILE)!);

    return (
        <div className={'sc-panel'}>
            <Sidebar profile={profile} />
            <div className={"sc-main"}>
            <Navbar profile={profile} />
            {props.children ? props.children : <></>}
            </div>
        </div>
    );
};

export default Panel;
