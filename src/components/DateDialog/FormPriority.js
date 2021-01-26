import React, { useEffect } from 'react';
import { FormControlLabel, FormLabel, Radio, RadioGroup } from '@material-ui/core';

/**
 * The RadioButton Component that indicates the event level at the modal dialog
 * @component
 * @param props
 * @param {strign} props.value The current checked radio ("low", "medium", "high")
 * @param {function} props.handleChange Function that updates the value of the component
 * @returns {React.ReactElement}
 */
export default function RadioButtonsGroup({ value, handleChange }) {

    /**
     * Clean up function. Set the value of the radiogroup "low" after component is unmounted
     * @returns {function}
     */
    useEffect(() => {
        return () => handleChange("low");
    }, [handleChange]);

    return (
        <div style={{ margin: "2%" }}>
            <FormLabel>{"Check priority"}</FormLabel>
            <RadioGroup value={value} onChange={(e) => handleChange(e.target.value)}>
                <FormControlLabel value="low" control={<Radio size="small" />} label="Low" />
                <FormControlLabel value="medium" control={<Radio size="small" />} label="Medium" />
                <FormControlLabel value="high" control={<Radio size="small" />} label="High" />
            </RadioGroup>
        </div>
    );
}
