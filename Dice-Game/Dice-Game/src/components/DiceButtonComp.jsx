import React from 'react';
import styled from 'styled-components';

export default function DiceButtonComp({buttonName, setTotalScore , setShowRules, showRules}) {

  // const resetScoreHandler = ()=>{
    
    
  // }

  const handlerButton = () =>{
    if(buttonName === 'Reset Score'){
      setTotalScore(0);
    }
    else{
      if(showRules){
        setShowRules(false)
      }else{
        setShowRules(true);
      }
      
    }
  }
  return (
    <>
    <div>
      {/* <DiceButton btn = {buttonName} onClick={resetScoreHandler}>
        {buttonName}
      </DiceButton> */}
      <DiceButton btn = {buttonName} onClick = {handlerButton}>
        {buttonName}
      </DiceButton>
    </div>
    </>
  )
}

const DiceButton = styled.button`
      height: 44px;
      width: 220px;
      border: 1px solid black;
      border-radius: 5px;
      background-color: ${(props) => props.btn === 'Reset Score' ? 'white': 'black'};
      color: ${(props) => props.btn === 'Reset Score' ? 'black': 'white'};
      cursor: pointer;
`; 

