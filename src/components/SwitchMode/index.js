import React from "react";
import { Switch, FormControlLabel } from "@material-ui/core";

export default function SwitchMode({ checked, setChecked }) {
    return (
        <FormControlLabel data-testid="switch"
            control={<Switch checked={checked.list} onChange={setChecked} name="list" />}
            label={checked.list ? "Mode SEE DATES actived, now you can click on day to see all your dates" : "Mode ADD DATE actived"}
        />
    )
}