import React from 'react';
import styled from 'styled-components';



export default function ScoreSelectorButton({error,setError, score, setScore}) {
    const scoreBar = [1,2,3,4,5,6];

    const setErrorHandler=(value)=>{
        setScore(value);
        setError('');
    }
    return (
        <>
            <NumberContainer>
                <span>{error}</span>
                <div className='BoxContainer'>
                    {
                    scoreBar.map((value,i) => (
                        <Box isSelected={value === score} key={i} onClick={() =>setErrorHandler(value) }>
                            {value}
                        </Box>
                    ))}
                </div>
                <p>Select Number</p>
            </NumberContainer>
            
        </>
    )
}

const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    cursor: pointer;
    background-color: ${(props) => props.isSelected ? "black" : 'white'};
    color: ${(props) => props.isSelected ? "white" : "black"};
`;

const NumberContainer = styled.div`
    text-align: right;
    .BoxContainer{
        display: flex;
        gap:24px;
    }
    p{
        font-size: 24px;
        font-weight: 700;
    }
    span{
        color: red;
    }
`;
