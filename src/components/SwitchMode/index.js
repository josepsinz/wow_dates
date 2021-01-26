import React from "react";
import { Switch, FormControlLabel } from "@material-ui/core";

/**
 * Renders a Switch. Change the mode (add mode or list mode)
 * @component
 * @param props
 * @param {boolean} props.checked Object than indicates which mode is on or off
 * @param {function} props.setChecked Function that changes which elemnt is checked 
 * @returns {React.ReactElement}
 */
export default function SwitchMode({ checked, setChecked }) {
    return (
        <FormControlLabel data-testid="switch"
            control={<Switch checked={checked.list} onChange={setChecked} name="list" />}
            label={checked.list ? "Mode SEE DATES actived, now you can click on day to see all your dates" : "Mode ADD DATE actived"}
        />
    )
}
