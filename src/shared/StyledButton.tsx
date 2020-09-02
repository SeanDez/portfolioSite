import { motion } from 'framer-motion';
import styled from 'styled-components';

const StyledButton = styled(motion.button)`
  background: none;
  border: 1px solid rgba(255, 255, 255, .4);
  color: white;
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    background: rgba(200, 200, 200, .04);

  }
`;

export default StyledButton;
