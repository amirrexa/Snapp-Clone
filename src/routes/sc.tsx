import React, {ReactElement, ReactNode, useState} from 'react';
import './sc.css';
import Panel from '../components/panel/panel';
import Sidebar from '../components/sidebar/sidebar';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Drivers from "./drivers/drivers";
import Customers from "./customers/customers";
import {Home} from "./home/home";

const SC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Panel children={<Home/>}/>}/>
                <Route path="/drivers" element={<Panel children={<Drivers/>}/>}/>
                <Route path="/customers" element={<Panel children={<Customers/>}/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default SC;
