import React from "react";

const Header = () => {
    return (
        <div>
            <div className="header absolute top-0 flex justify-between items-center">
                <div className="logo">Logo</div>
            </div>
            <div className="menu flex">
                <div className="menu-item">About</div>
                <div className="menu-item">Journal</div>
                <div className="menu-item">Contact</div>
            </div>
        </div>
    );
};

export default Header;
