import React, { useState } from 'react';
import {
  motion,
  TargetAndTransition,
  Orchestration,
  Tween
} from 'framer-motion';
import styled from 'styled-components';

import statementList from './StatementList';

const Box = styled.section`
  font-size: 3rem;
  font-weight: 800;
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Item = styled.div`
  height: 500px;
`;

const yValue = 30;

const animateOptions: TargetAndTransition = {
  y: [-yValue, 0, 0, 0, yValue],
  opacity: [0, 1, 1, 1, 0]
};

const transitionOptions: (animationNumber: number) => Orchestration & Tween = (
  animationDuration: number
) => ({
  duration: animationDuration,
  loop: Infinity,
  repeatDelay: animationDuration / 5
});

const Statement = ({ animationDuration = 3 }) => {
  const [index, setIndex] = useState(0);

  const handleUpdate = (latest: { [key: string]: React.ReactText }) => {
    if (latest.y !== yValue) {
      return;
    }
    if (index < statementList.length - 1) {
      setIndex(index => index + 1);
    } else {
      setIndex(0);
    }
  };

  return (
    <Box>
      <Item>
        <div>I am a&nbsp;</div>
        <motion.div
          animate={animateOptions}
          transition={transitionOptions(animationDuration)}
          onUpdate={handleUpdate}
        >
          {statementList[index]}
        </motion.div>
      </Item>
    </Box>
  );
};

export default Statement;
