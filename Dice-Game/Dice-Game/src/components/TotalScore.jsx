import React from 'react';
import styled from 'styled-components';

const ScoreContainer = styled.div`
    max-width : 200px;
    text-align: center;

    h1{
        font-size: 100px;
    }
    p{
        font-size: 24px;
        font-weight: 500;
    }

`;
export default function TotalScore({totalScore}) {
  return (
    <ScoreContainer>
        <h1>{totalScore}</h1>
        <p>TotalScore</p>
    </ScoreContainer>
  )
}
