import React from "react";
import MuiAlert from '@material-ui/lab/Alert';
import { Snackbar } from "@material-ui/core";

/**
 * Display the alert
 * @component
 * @param props
 * @returns {React.ReactElement} 
 */
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

/**
 * Renders the Toast
 * @component
 * @param props 
 * @param {boolean} props.openToast Indicate if the toast will be shown (true) or not (false)
 * @param {function} props.closeToast The function displayed when toast is closed. Changes openToast to false
 * @returns {React.ReactElement} 
 */
export default function AlertToast({ openToast, closeToast }) {
    return (
        <Snackbar open={openToast} autoHideDuration={3000} onClose={closeToast} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}>
            <Alert onClose={closeToast} severity="success">
                {"New date added!!!"}
            </Alert>
        </Snackbar>
    )
}