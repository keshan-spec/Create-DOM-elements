import React, { useState } from 'react'
import { Blog } from './Blog'


export interface IElement {
    data: string
    image: File
}

export const Form: React.FC = () => {
    const [elements, setElements] = useState<IElement[]>([])
    const [details, setDetails] = useState<{ title: string, description?: string }>({ title: "" })
    const [comp, setComp] = useState<number[]>([])

    const addElem = () => {
        setComp([...comp, 1])
    }

    const addToDb = () => {
        return <div>
            <h1>{details.title}</h1>
            <p>{details.description}</p>
            <ul>
                {elements.map((elem, i) => {
                    return (
                        <li key={i}>{elem.data}</li>
                    )
                })}
            </ul>
        </div>
    }

    return (
        <div>
            <input type="text" name="" id="" placeholder="Title" onChange={e => setDetails({ title: e.target.value })} />
            <br />
            <textarea name="" id="" cols={30} rows={10} onChange={e => setDetails({ ...details, description: e.target.value })}></textarea>

            <button onClick={addElem}>Add section</button>
            {comp.map((c, i) => {
                return <Blog stateFunc={setElements} state={elements} index={i} key={i} />
            })}
            <br />

            {addToDb()}
            {/* <button onClick={addToDb}>save blog</button> */}
        </div>
    );
}


