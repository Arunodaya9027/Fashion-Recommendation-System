import {useEffect, useState} from "react";
import PropTypes from "prop-types";
import { Outline } from "./Outline";
import { TwoTone } from "./TwoTone";
import "./Navbar.css";

const Navbar = ({ initialPosition: propInitialPosition }) => {
    const [initialPosition, setInitialPosition] = useState(propInitialPosition);

    // Use local storage to persist and retrieve the initial position
    useEffect(() => {
        const storedInitialPosition = localStorage.getItem("initialPosition");
        if (storedInitialPosition) {
            setInitialPosition(parseInt(storedInitialPosition, 10));
        }
    }, []); // Empty dependency array ensures this effect runs only once when the component mounts

    useEffect(() => {
        // Update local storage whenever initialPosition changes
        localStorage.setItem("initialPosition", initialPosition);
    }, [initialPosition]);

    return (
        <div className="navbar-component" style={{ top: `${initialPosition}px` }}>
            <div className="navbar">
                <div className="div">
                    <div className="menu-wrapper">
                        <div className="menu">
                            <TwoTone className="essentials-home-two" color="#E9E9E9" fill="#E9E9E9" />
                            <div className="text-wrapper">Home</div>
                        </div>
                        <div className="menu">
                            <TwoTone className="essentials-home-two" color="#E9E9E9" fill="#E9E9E9" />
                            <div className="text-wrapper">Discover</div>
                        </div>
                        <div className="special-menu">
                            <Outline className="finance-scan-outline" color="white" />
                        </div>
                        <div className="menu">
                            <TwoTone className="essentials-home-two" color="#E9E9E9" fill="#E9E9E9" />
                            <div className="text-wrapper">Account</div>
                        </div>
                        <div className="menu">
                            <TwoTone className="essentials-home-two" color="#E9E9E9" fill="#E9E9E9" />
                            <div className="text-wrapper">About Us</div>
                        </div>
                    </div>
                    <div className="rectangle" />
                </div>
            </div>
            <div className="home-indicator">
                <div className="home-indicator-2" />
            </div>
        </div>
    );
};

Navbar.propTypes = {
    initialPosition: PropTypes.number.isRequired,
};

export default Navbar;