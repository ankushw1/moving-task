import React, { useState } from 'react';
import styled from 'styled-components';

const AppContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: #f0f0f0;
  cursor: pointer;
`;

const WizardImage = styled.img`
  position: absolute;
  width: 100px;
  height: auto;
  transition: transform 6s ease, scaleX 0.3s ease; 
  pointer-events: none; 
`;

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [facingRight, setFacingRight] = useState(true); 

  const handleClick = (event) => {
    const newX = event.clientX - 50; 
    const newY = event.clientY - 50; 

    if (newX > position.x && !facingRight) {
      setFacingRight(true); 
    } else if (newX < position.x && facingRight) {
      setFacingRight(false);
    }

    setPosition({ x: newX, y: newY });
  };

  return (
    <AppContainer onClick={handleClick}>
      <WizardImage
        src={`${process.env.PUBLIC_URL}/wiz.gif`} 
        alt="Wizard"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) scaleX(${facingRight ? 1 : -1})`, 
        }}
      />
    </AppContainer>
  );
}

export default App;
