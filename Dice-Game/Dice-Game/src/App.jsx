import styled from "styled-components";
import StartGamePage from "./components/StartGamePage";
import { useState } from "react";
import PlayGame from './components/PlayGame'



const Div = styled.div`
`;

function App() {
  const [toggle, setToggle] = useState(true);
  const handlePlayButton = () => {
    setToggle((prev) => !prev);
  }

  return (
    <>
    <Div>
      {toggle ? <PlayGame/> : <StartGamePage toggle={handlePlayButton} />}
      
    </Div>
     
    </>
  )
}

export default App
