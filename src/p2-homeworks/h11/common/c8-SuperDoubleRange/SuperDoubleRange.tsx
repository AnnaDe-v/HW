import React from "react";

import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: number[] ) => void
    value?: number[]

    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {

    const handleChange = (event: Event, value: number[] | [number, number] | number) => {
        // @ts-ignore
        onChangeRange && onChangeRange([value[0], value[1]]);
    };

    function valuetext(value: number) {
        return value.toString();
    }


    return (
        <>
            <Box sx={{ width: 500}}>
                <Slider
                    getAriaLabel={() => 'Temperature range'}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                />
            </Box>
        </>
    )
}

export default SuperDoubleRange
