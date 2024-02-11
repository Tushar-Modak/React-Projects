import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    margin: 0 auto;
    max-width: 1182px;
    height: 100vh;
    align-items: center;

    .content p{
        font-size: 96px;
        font-weight: 700;
        white-space: nowrap;
    }
    .content Button{
        float: right;
    }
`;

const Button = styled.button`
    border-radius: 5px;
    background-color: black;
    padding: 10px 18px;
    color: white;
    border: none;
    min-width: 220px;
    cursor: pointer;
    border: 1px solid black;
    font-size: 16px;
    transition: 0.5s background ease-in;

    &:hover{
        background-color: white;
        color: black;
        border: 1px solid;
        transition: 0.3s background ease-in;
    }
    
`;


export default function StartGamePage({toggle}) {
  return (
    <Container>
        <div className='imageDiv'>
            <img src='./images/dices.png'/>
        </div>
        <div className='content'>
            <p>DICE GAME</p>
            <Button onClick={toggle}>Play Now</Button>
        </div>

    </Container>
  )
}
