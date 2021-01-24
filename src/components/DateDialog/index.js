import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@material-ui/core";
import React, { useState } from "react";
import dateFormat from "../../utils/dateFormat";
import getColorDate from "../../utils/getColorDate";
import FormInput from "./FormInput";
import FormPriority from "./FormPriority";


export default function DateDialog({ open, handleClose, dateInfo }) {
    const [title, setTitle] = useState("");
    const [from, setFrom] = useState("")
    const [to, setTo] = useState("")
    const [priority, setPriority] = useState("low")

    const sendDate = (doAction) => {
        let newDate = {
            color: getColorDate(priority),
            title,
            from: dateFormat(dateInfo, from),
            to: dateFormat(dateInfo, to),
        }
        if (doAction) {
            handleClose(newDate)
        } else {
            handleClose(doAction)
        }
    }

    return (
        <Dialog fullWidth={true}
            maxWidth={'sm'} onClose={sendDate} open={open}>
            <DialogTitle style={{ margin: "2%" }}>{"Get a date!"}</DialogTitle>
            <DialogContent>
                <FormInput type="text" value={title} label="Title" setValue={setTitle} />
                <FormInput type="time" value={from} label="From" setValue={setFrom} />
                <FormInput type="time" value={to} label="To" setValue={setTo} />
                <FormPriority value={priority} handleChange={setPriority} />
            </DialogContent>
            <DialogActions>
                <Button onClick={() => sendDate(false)} color="primary">{"Cancel"}</Button>
                <Button autoFocus onClick={() => sendDate(true)} color="primary" disabled={!from || !to || !title}>{"Send"}</Button>
            </DialogActions>
        </Dialog >
    )
}