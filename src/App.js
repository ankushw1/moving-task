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
  transition: transform 6s ease; /* Smooth movement */
  pointer-events: none; /* Prevent wizard from blocking clicks */
`;

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const newX = event.clientX - 50; // Center wizard horizontally
    const newY = event.clientY - 50; // Center wizard vertically
    setPosition({ x: newX, y: newY });
  };

  return (
    <AppContainer onClick={handleClick}>
      <WizardImage
        src={`${process.env.PUBLIC_URL}/wiz.gif`} 
        alt="Wizard"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`, // Move wizard to the clicked position
        }}
      />
    </AppContainer>
  );
}

export default App;
