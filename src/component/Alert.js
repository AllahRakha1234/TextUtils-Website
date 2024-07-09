import React from 'react'

export default function Alert(props) {

    const capatalizeFun = (alertType) => {
        let lowerCaseAlertType = alertType.toLowerCase();
        return lowerCaseAlertType.charAt(0).toUpperCase() + lowerCaseAlertType.slice(1);
    }

    return (
        // USE TO CHECK IF ALERT IS NOT NULL THEN SHOW THE CODE OTHERSISE DO NOTHING
        <div style={{ height: "55px" }}>
            {props.alert && <div>
                <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                    <strong>{capatalizeFun(props.alert.type)}:</strong> {props.alert.msg}
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </div>}
        </div>
    )
}
