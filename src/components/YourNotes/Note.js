import React from 'react';
import styled from 'styled-components'
import Avatar from '@mui/material/Avatar'
import DeleteIcon from '@mui/icons-material/Delete';

const Note = (props) => {
    const { title, content } = props;
    const del = () => {
        props.deleteData(props.id)
    }
    return (
        <>
            <Box>
                <h2 className='heading'>{title}</h2><br />
                <textarea rows="4" cols="25" className='content'>{content}</textarea><br />
                <span>
                    <Avatar className='avatar'  onClick={del}>
                        <DeleteIcon />
                    </Avatar>
                </span>
            </Box>
        </>
    )
};

const Box = styled.div`
    width: 250px;
    height: 180px;
    background-color: white;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    margin-top: 10px;
    margin-left: 20px;
    border-radius: 10px;
    float: left;

    .avatar{
        float: right;
        background: transparent;
        color: rgb(237, 45, 7);
    }
    .avatar:hover{
        background-color: rgb(237, 45, 7);
        color: white;
    }
    .heading,.content{
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 5px;
        font-family: 'Fuzzy Bubbles', cursive;
    }

    .content{
        outline : none;
        border-style: none;
    }

    @media(max-width : 568px){
        margin-left: 25%;
        margin-right: auto;
    }
`

export default Note;
