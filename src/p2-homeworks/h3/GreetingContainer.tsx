import React, {ChangeEvent, useState, KeyboardEvent} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

export type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string) => void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов

    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<boolean>(false) // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
    const trimed = e.currentTarget.value.trim()
        if(trimed) {
            setName(trimed)
            error && setError(false) // need to fix
        } else {
            setName('')
            setError(true)
        }

    }

    const addUser = () => {
        addUserCallback(name)
        alert(`Hello, ${name}!`)
        setName('')
    }

    const addEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter' && name) {
            addUser()
            setName('')
        }
    }

    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            addEnter={addEnter}
        />
    )
}

export default GreetingContainer
