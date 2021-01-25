import React, { useEffect } from "react";
import { TextField } from "@material-ui/core";

export default function FormInput({ type, value, label, setValue }) {

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