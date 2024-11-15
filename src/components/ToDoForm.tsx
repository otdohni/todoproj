import React, { useState } from "react";

interface ToDoFormProps {
    onAdd(title: string): void
}

export const ToDoFrom: React.FC<ToDoFormProps> = (props) => {

    const [title, setTitle] = useState<string>('')

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }

    const keyPressHandler = (event: React.KeyboardEvent ) => {
        if (event.key === 'Enter') {
            props.onAdd(title)
            setTitle("")
        }
    }

    return (
        <>
            <h1>Список текущих задач</h1>
            <div className="input-field mt2">
                <input
                onChange={changeHandler} 
                value={title} 
                type="text" 
                id="title" 
                placeholder="Введите название дела"
                onKeyPress={keyPressHandler}
                />
                
                <label htmlFor="title" className="active">Добавление задач</label>
            </div>
        </>
    )
}