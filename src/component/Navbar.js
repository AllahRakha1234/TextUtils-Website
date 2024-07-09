
import React from 'react'
import PropTypes from 'prop-types'
import ColorPicker from './ColorPicker';
import { Link } from 'react-router-dom';


export default function Navbar(props) {

    // FOR COLOR PALLETE LOGIC
    const handleColorChange = (color) => {
        props.getColorFromNbFun(color);
    };

    // ********* RENDER **********

    return (

        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand fw-bold" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link fw-bold" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-bold" to="/about">About</Link>
                        </li>
                    </ul>
                </div>
                {/* // PASS THE SELECTED COLOR VALUE TO THE COMPONENT */}
                <ColorPicker onColorChange={handleColorChange} />
                <div className='d-flex fd-row'>
                    <div className="form-check form-switch">
                        <input className="form-check-input danger" onClick={props.toggleMode} type="checkbox" id="setModeCheckBox" />
                        <label className={`form-check-label text-${props.mode === "light" ? "dark" : "light"}`} htmlFor="flexSwitchCheckDefault"><b>Enable Dark Mode</b></label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: "Set title here"
}