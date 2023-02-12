import React from 'react';
import {NavLink} from "react-router-dom";

const Modal = () => {
    return (
        <div style={{ background: "white" }}>
            <div
                style={{
                    padding: "10px",
                    background: "white",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        padding: "20px",
                        gap: "10px",
                    }}
                >
                    <NavLink
                        to={"/all-contacts"}
                        className="btn btn-outline-warning"
                        style={{ background: "#46139f", border: "none", color: "white" }}
                    >
                        All Contacts
                    </NavLink>
                    <NavLink
                        to={"/US-contacts"}
                        className="btn btn-outline-warning"
                        style={{ background: "#ff7f50", border: "none", color: "white" }}
                    >
                        US Contacts
                    </NavLink>
                    <NavLink
                        to={"/problem-2"}
                        className="btn btn-outline-warning"
                        style={{
                            background: "white",
                            border: "2px solid #46139f",
                            color: "#46139f",
                        }}
                    >
                        Close
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Modal;