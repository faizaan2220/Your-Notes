import React from 'react';
import styled from 'styled-components'

const Header = () => {

    return (
        <>
            <Head>
                <h1 className='heading'>Your Notes</h1>
            </Head>
        </>
    )
};

const Head = styled.div`
    width: 100vw;
    height : 10vh;
    background-color: rgb(252, 218, 47);
    display: flex;
    align-items: center;
    padding-left: 20px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

    .heading{
        color: black;
    }

    @media(max-width : 568px){
        justify-content: center;
    }
`

export default Header;
