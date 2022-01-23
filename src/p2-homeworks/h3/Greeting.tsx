import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void// need to fix any
    error: boolean // need to fix any
    totalUsers: number // need to fix any
    addEnter: (e: KeyboardEvent<HTMLInputElement>) => void
}



// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, addEnter} // деструктуризация пропсов
) => {
    const inputClass = s.error ? s.errorInput : s.input // need to fix with (?:)

    return (
        <div className={s.greeting}>
            <input
                value={name}
                onChange={setNameCallback}
                className={inputClass}
                onKeyPress={addEnter}
                onBlur={setNameCallback}
            />
            <span className={s.error}>{error}</span>
            <button onClick={addUser} className={s.button} disabled={!name}>add</button>
            <span className={s.count}>{totalUsers}</span>
        </div>
    )
}

export default Greeting
