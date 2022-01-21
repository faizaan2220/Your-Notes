import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar'
import AddIcon from '@mui/icons-material/Add';
import styled from 'styled-components'

const CreateNote = (props) => {
    const [rows,setRows] = useState()
    const [expand,setExpand] = useState(false)
    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    const update = (e) => {
        const { name, value } = e.target;
        setNote((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const addNote = () => {
        props.passNote(note);
        setNote({
            title: "",
            content: ""
        })
    }

    const expandIt = () => {
        setRows(5);
        setExpand(true)
    }

    const backToNormal = () => {
        setRows(0)
        setExpand(false)
    }
    return (
        <>
            <Note onDoubleClick={backToNormal}>
                <form className='form' action="">
                    {expand?<input className='title' type="text" placeholder='Title' onChange={update} value={note.title} name='title' />:null}
                    <textarea className="textarea" id="" cols="30" rows={rows} placeholder='Write a note' onClick={expandIt} onChange={update} value={note.content} name='content'></textarea>
                    {expand?<Avatar className='avatar' sx={{ float: 'right' }} onClick={addNote}>
                        <AddIcon className='add' />
                    </Avatar>:null}
                </form>
            </Note>
        </>
    )
};

const Note = styled.div`
    margin-top: 20px;
    width : 100%;
    background: transparent;
    display: flex;
    justify-content: center;

    .form{
        width : 35%;
        min-width : 400px;
        box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
        border-radius: 15px;
    }

    .form:hover{
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }

    .title{
        border-style: none;
        width : 100%;
        font-size: 20px;
        padding : 10px 15px 5px 15px;
        outline : none;
        border-radius: 15px;
    }
    .textarea{
        padding-left :  15px;
        margin-top:20px;
        border-style: none;
        width : 100%;
        outline : none;
        font-size : 16px;
    }
    .avatar{
        background-color: white;
        color:rgb(252, 218, 47);
    }
    .avatar:hover{
        background-color:rgb(252, 218, 47);
        color: white;
    }

`

export default CreateNote;
