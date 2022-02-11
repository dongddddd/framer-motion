import React from 'react';
import {motion} from "framer-motion"
import styled from "styled-components"
import {useRef} from "react";

const Nav = styled(motion.div)`
  min-width: 150px; 
  height: 60px;
  display:grid;
  grid-template-colums: repeat(2, 1fr);
`;

const Circle = styled(motion.div)`
  width:70px;
  height:70px;
  border-radius: 50%;
  background-color:blue;
`;

const Box = styled(motion.div)`
  margin:10px;
  width:30rem;
  background-color:blue;
  height:30rem;
  &:hover {
    background-color: #e1e1e1;
  }
`;

// const 컴포먼트명 = styled.html태그``;

// const container = {
//     hidden: {},
//     visible: {},
// };
// const item = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//         y: 0,
//         opacity: 1
//     }
// }

function App() {
    const constraintsRef = useRef<HTMLDivElement>(null);
  return (
     <>
         <Box ref={constraintsRef}>
     {/*<Box initial={{ scale: 0}} animate={{rotateZ:180, scale: 1 }} >*/}
         <Circle drag dragConstraints={constraintsRef}/>
         {/*</Box>*/}
         {/*<Box variants={container} initial="hidden" animate="visible" exit={{scale: 0}}/>*/}
         </Box>
         </>
  );
}

export default App;
