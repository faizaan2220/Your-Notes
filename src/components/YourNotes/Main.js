import React, { useState } from "react";
import Header from './Header'
import CreateNote from './CreateNote'
import Note from './Note'

const Main = () => {
    const[data,setData] = useState([]);

    const addNote = (note) => {
        setData((prev) => {
            return [...prev,note];
        })
    }

    const deleteNote = (id) => {
        setData((oldData) => 
            oldData.filter((value,index) => {
                return index !== id
            })
        )
    }

    return(
        <>
            <Header/>
            <CreateNote passNote = {addNote}/>
            {
                data.map((val,index) => {
                    return <Note 
                        key = {index}
                        id = {index}
                        title = {val.title}
                        content = {val.content}
                        deleteData = {deleteNote}
                    />
                })
            }
        </>
    )
}

export default Main;