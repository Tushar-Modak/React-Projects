import React from 'react';
import TotalScore from './TotalScore';
import ScoreSelectorButton from './ScoreSelectorButton';
import styled from 'styled-components';
import DiceRoll from './DiceRoll';
import { useState } from 'react';



const ScorePanel = styled.div`
    display: flex;
    justify-content: space-around;
    padding-top: 24px;
    align-items: end;
`;

const DiceRollPanel = styled.div`
    align-items : center;
    margin: 0 auto;
    
`;

export default function PlayGame() {
    const [score, setScore] = useState();
    const [diceNumber,setDiceNumber] = useState(1);
    const [totalScore, setTotalScore] = useState(0);
    const [error, setError] = useState('');

    const diceRollHandler = ()=>{
        if(!score) {
            setError('You have not selected any number');
            return error;
        }else{
            setError('');
        }

        let randomNumber = Math.floor(Math.random() * 6 + 1);
        setDiceNumber(randomNumber);

        if(score === randomNumber){
            setTotalScore((prev)=>(
                    prev + randomNumber
            ));
        }
        else{
            setTotalScore((prev)=> (
                prev- 2
            ));
        }

        setScore(undefined);

      }
  return (
    <div>
        <ScorePanel>
            <TotalScore totalScore={totalScore}/>
            <ScoreSelectorButton error={error} setError={setError} score={score} setScore={setScore}/>
            
        </ScorePanel>
        <DiceRollPanel>
            <DiceRoll diceNumber={diceNumber} diceRollHandler={diceRollHandler} setTotalScore= {setTotalScore}/>
            
        </DiceRollPanel>
        
    </div>
  )
}
