import React from "react";
import MuiAlert from '@material-ui/lab/Alert';
import { Snackbar } from "@material-ui/core";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function AlertToast({ openToast, closeToast }) {
    return (
        <Snackbar open={openToast} autoHideDuration={3000} onClose={closeToast} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}>
            <Alert onClose={closeToast} severity="success">
                {"New date added!!!"}
            </Alert>
        </Snackbar>
    )

}