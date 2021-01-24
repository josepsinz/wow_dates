import React, { useEffect } from 'react';
import { FormControlLabel, FormLabel, Radio, RadioGroup } from '@material-ui/core';

export default function RadioButtonsGroup({ value, handleChange }) {

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
