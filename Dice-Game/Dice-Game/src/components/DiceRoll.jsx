import React, { useState } from 'react';
import styled from 'styled-components';
import DiceButtonComp from './DiceButtonComp';
import RulesComp from './RulesComp';

export default function DiceRoll({diceNumber,diceRollHandler,setTotalScore}) {
  const [showRules, setShowRules] = useState(false);
  
  return (
    <>
        <DiceRollPanel>
          <img src={`./images/Dice/dice_${diceNumber}.png`} onClick={diceRollHandler}/>
          <p>Click on Dice to roll</p>
          <DiceButtonComp buttonName='Reset Score' setTotalScore={setTotalScore}/>
          <DiceButtonComp buttonName='Show Rules' showRules={showRules} setShowRules={setShowRules}/>
          {showRules ? <RulesComp/> : ''}
        </DiceRollPanel>
        
    </>
  )
}

const DiceRollPanel = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 48px;
    gap: 24px;
    p{
        font-size: 24px;
        font-weight: 500;
        
    }
    img{
      cursor: pointer;
    }

`;
