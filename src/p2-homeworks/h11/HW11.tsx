import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from './HW11.module.css'

function HW11() {
    const [value1, setValue1] = useState(0)

    const [value, setValue] = useState<number[]>([5, 95]);


    const minValue = value[0]
    const maxValue = value[1]


    return (
        <div>
            <hr/>
            homeworks 11
            <div>
                <span>{minValue}</span>
                <SuperRange
                    value={minValue}
                    onChangeRange={setValue}
                />
            </div>
            <hr/>

            <div>
                <span className={s.minValue}>{minValue}</span>
                <span className={s.maxValue}>{maxValue}</span>
                <SuperDoubleRange
                    value={value}
                    onChangeRange={setValue}
                />

            </div>

            <hr/>
            <hr/>
        </div>
    )
}

export default HW11
