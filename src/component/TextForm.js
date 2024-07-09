import React, { useState } from 'react';

export default function TextForm(props) {

    // ********* STATES **********


    const [text, setText] = useState('');
    const [isBold, setTextBold] = useState(false);
    const [isItalic, setTextItalic] = useState(false);
    const [isUnderline, setTextUnderline] = useState(false);

    const timeRequired = (0.008 * text.length).toFixed(2);
    //  /PATTERN/  &  \S - SPECIAL CHARACTER REPRESENTS ANY WHITESPACE CHARACTER
    // + - THE + IS A QUANTIFIER MATCHES ONE OR MORE OCCURRENCES OF WHITESPACES
    const wordsCount = text.split(/\s+/).filter((word) => word !== '').length;


    // ********* FUNCTIONS **********

    const handleUpperClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success")
    };

    const handleLowerClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success")
    };

    const handleChange = (event) => {
        setText(event.target.value);
        console.log('clicked');
    };

    const handleClearClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared", "success")
    };

    const handleVoiceClick = (text) => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        console.log("Msg: ", msg);
        window.speechSynthesis.speak(msg);
        props.showAlert("Text Converted to Voice", "success")
    };

    const handleBoldClick = () => {
        if (text !== "") {
            setTextBold(!isBold);

        }
    }

    const handleItalicClick = () => {
        setTextItalic(!isItalic);
    }

    const handleUnderlineClick = () => {
        setTextUnderline(!isUnderline);
    }

    const handleCopyClick = () => {
        // navigator.clipboard.writeText(text);
        // OR
        let textArea = document.getElementById('my-textArea');
        navigator.clipboard.writeText(textArea.value);
        props.showAlert("Text Copied", "success")
    }



    return (
        <>
            <div className='container' style={{
                color: props.mode === "light" ? "black" : "white",
            }}>
                <div className='my-2'>
                    <div className="container d-flex fd-row justify-content-between">
                        <h3>Enter the text below here to analyze</h3>
                        <div>
                            <div className="btn-group" role="group" aria-label="For TextArea">
                                <button type="button" onClick={handleBoldClick} className="btn btn-success">Bold</button>
                                <button type="button" onClick={handleItalicClick} className="btn btn-success">Italic</button>
                                <button type="button" onClick={handleUnderlineClick} className="btn btn-success">Underline</button>
                            </div>
                            <button disabled={text.length === 0} className="btn btn-danger mx-2" onClick={handleClearClick}>Clear Text</button>
                        </div>
                    </div>
                    <textarea
                        className='form-control my-2'
                        value={text}
                        onChange={handleChange}
                        id='my-textArea'
                        rows='8'
                        style={{
                            fontWeight: isBold ? 'bold' : 'normal',
                            fontStyle: isItalic ? 'italic' : 'normal',
                            textDecoration: isUnderline ? 'underline' : 'none',
                            color: props.mode === "light" ? "black" : "white",
                            backgroundColor: props.mode === "light" ? "white" : "#352F85"
                        }}
                    ></textarea>
                    <div className="container d-flex justify-content-center">
                        <button disabled={text.length === 0} className='btn btn-primary mx-1' onClick={handleUpperClick}>
                            Convert To UpperCase
                        </button>
                        <button disabled={text.length === 0} className='btn btn-primary mx-1' onClick={handleLowerClick}>
                            Convert To LowerCase
                        </button>
                        <button disabled={text.length === 0} className="btn btn-primary mx-1" onClick={() => { handleVoiceClick(text) }}>Convert To Voice</button>
                        <button disabled={text.length === 0} className="btn btn-primary mx-1" onClick={() => { handleCopyClick(text) }}>Copy Text</button>
                    </div>
                </div>
                <div className='container my-3'>
                    <h4>Your text summary</h4>
                    <h6>
                        Paragraph has {wordsCount} words and {text.length} characters
                    </h6>
                    <h6> You need {timeRequired} Minutes to read it.</h6>
                    <h5>Preview</h5>
                    <p>{text.length > 0 ? text : "Nothing to preview."}</p>
                </div>
            </div>
        </>
    );
}
