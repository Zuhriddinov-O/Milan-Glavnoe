import React from "react";
import "./glavnoe.scss"
import { NavLink } from "react-router-dom";

import Lchart from "../Glavnoe/Lchart/Lchart.jsx"
import Pchart from "../Glavnoe/Pchart/Pchart.jsx"
import Bchart from "../Glavnoe/Bchart/Bchart.jsx"

import Girlicon from "../images/Girlicon.png"
import Homeicon from "../images/Homeicon.png"
import Locationimg from "../images/Locationimg.png"
import Logouticon from "../images/Logouticon.png"
import Roboicon from "../images/Roboicon.png"
import Studenticon from "../images/Studenticon.png"
import Universityicon from "../images/Universityicon.png"

const Glavnoe = () => {
    return (
        <React.Fragment>
            <div className="Glavnoe">
                <div className="MainGlavnoe">
                    
                    <div className="Glavnoe__sidebar">
                        <div className="Glavnoe__sidebarTop">
                            <img className="sidebar__img" src={Roboicon} alt="" />
                            <p className="sidebar__p">Education</p>
 </div>
                            <div className="categories">
                                <NavLink to={"/glavnoe"} className="category">
                                    <img className="sidebar__icon1" src={Homeicon} alt="" />
                                    <p className="sidebar__glavnoe">главное</p>
                                </NavLink>
                                <NavLink to={"/universitet"} className="category2">
                                    <img className="sidebar__icon2" src={Universityicon} alt="" />
                                    <p className="sidebar__universiteti">Университеты</p>
                                </NavLink>
                                <NavLink to={"/studenti"} className="category3">
                                    <img className="sidebar__icon3" src={Studenticon} alt="" />
                                    <p className="sidebar__studenti">Студенты</p>
                                </NavLink>
                                <NavLink to={"https://google.com"} className="category4">
                                    <img className="sidebar__icon4" src={Logouticon} alt="" />
                                    <p className="sidebar__logout">Выйти</p>
                                </NavLink>
                            </div>
                       
                    </div>
                </div>

                <div className="Glavnoe-init">
                    <div className="navbar">
                        <div id="glavnoe" className="nabvarinit1">
                            <p className="glavnoe__p">Главное</p>
                        </div>
                        <div className="nabvarinit1">
                            <div className="girlimg">
                                <img className="navbarinit1__img" src={Girlicon} alt="" />
                            </div>
                            <p className="navbarinit1__p">Nargiza<p className="Akxmedova">Akxmedova</p></p>
                        </div>
                    </div>
                    <div className="indications">
                        <div className="indication1">
                            <p className="studenti">Студенты</p>
                            <p className="studenti__amount">1424</p>
                        </div>

                        <div className="indication2">
                            <p className="universiteti">Университеты</p>
                            <p className="universiteti__amount">80</p>
                        </div>
                        <div className="indication3">
                            <p className="strani">Страны</p>
                            <p className="strani__amount">52</p>
                        </div>
                        <div className="indication4">
                            <p className="fakulteti">Факультеты</p>
                            <p className="fakulteti__amount">18</p>
                        </div>
                    </div>
                    <Lchart />
                    <Pchart />
                    <Bchart />
                    <div className="locations">
                        <img className="locations" src={Locationimg} alt="" />
                    </div>
                </div>

            </div>


        </React.Fragment>
    );
}

export default Glavnoe; 