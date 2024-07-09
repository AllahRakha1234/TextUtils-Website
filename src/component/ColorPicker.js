import React, { useState } from 'react';
import { SketchPicker } from 'react-color';

export default function ColorPicker({ onColorChange }) {

    // ********* STATES **********
    const [showPicker, setShowPicker] = useState(false);
    const [currentColor, setCurrentColor] = useState("#ffffff");

    // ********* FUNCTIONS **********

    // FOR COLOR PALLETE LOGIC
    const handleColorChange = (color) => {
        setCurrentColor(color.hex);
    };

    // FOR COLOR PALLETE LOGIC
    const togglePicker = () => {
        // setShowPicker((prevShowPicker) => !prevShowPicker);
        // OR
        setShowPicker(!showPicker);
    };

    // FOR COLOR PALLETE LOGIC
    const handleClosePicker = () => {
        setShowPicker(false);
        onColorChange(currentColor); //  PASS THE SELECTED COLOR VALUE TO THE PARENT COMPONENT
    };

    // ********* RENDER **********

    return (
        <div>
            <button className="btn btn-warning mx-3" onClick={togglePicker}>
                Set Custome Theme
            </button>
            {showPicker && (
                <div className="modal" style={{ display: 'block', background: 'rgba(0,0,0,0.8)' }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Color Picker</h5>
                                {/* <button type="button" className="close bg-danger" onClick={handleClosePicker}>
                                    <span><b>&times;</b></span>
                                </button> */}
                                <button type="button" className="btn-close" onClick={handleClosePicker} aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <SketchPicker color={currentColor} onChange={handleColorChange} />
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-danger" onClick={handleClosePicker}>
                                    Done
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
