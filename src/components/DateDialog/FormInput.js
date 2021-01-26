import React, { useEffect } from "react";
import { TextField } from "@material-ui/core";

/**
 * The Input Component of the modal dialog
 * @component
 * @param props 
 * @param {string} props.type Input type (it will be "text" or "time")
 * @param {string} props.value The current value of the input
 * @param {string} props.label Input label. It is also used to indicate the id of the component
 * @param {function} props.setValue The function that updates the value of the input
 * @returns {React.ReactElement}  
 */
export default function FormInput({ type, value, label, setValue }) {

    /**
     * Clean up function. Set the value of the input "" after component is unmounted
     * @returns {function}
     */
    useEffect(() => {
        return () => setValue("");
    }, [setValue]);

    return (
        <TextField
            data-testid="input"
            id={label}
            style={{ margin: "2%" }}
            placeholder={"title"}
            label={label}
            type={type}
            value={value}
            InputLabelProps={{
                shrink: true,
            }}
            inputProps={{
                step: 300, // 5 min
            }}
            onChange={(e) => setValue(e.target.value)}
        />
    )
}