import React from "react";
import logo from "../../assets/Logo-PNG-600.png";

/**
 * Header Component of the calendar. Loads a logo from assets
 * @component
 * @returns {React.ReactElement}
 */
export default function Header() {
    return (
        <div style={{ textAlign: "center" }}>
            <img src={logo} alt="noPhoto" width="20%" height="20%" />
        </div>
    )
}