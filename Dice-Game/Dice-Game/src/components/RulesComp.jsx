import React from 'react';
import styled from 'styled-components';

export default function RulesComp() {
  return (
    <RulesContainer>
        <h1>How to play dice game</h1>
        <p className='text'>Select any number</p>
        <p className='text'>Click on dice image</p>
        <p className='text'>After click on  dice  if selected number is equal to dice number you will get same point as dice </p>
        <p className='text'>If you get wrong guess then  2 point will be dedcuted </p>
    </RulesContainer>
  )
}

const RulesContainer = styled.div`
    margin: 20px;
    width: 794px;
    height: 150px;
    padding: 30px;
    background-color: #FBF1F1;

    .text{
        font-size: 16px;
    }
`;


