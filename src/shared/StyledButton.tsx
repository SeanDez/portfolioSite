import { motion } from 'framer-motion';
import styled from 'styled-components';

interface ButtonProps { isActive: boolean }

const StyledButton = styled(motion.button)<ButtonProps>`
  background: ${({ isActive }: ButtonProps) => isActive ? 'rgba(204, 255, 0, 0.15)' : 'none'};
  border: 1px solid rgba(255, 255, 255, .4);
  color: white;
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    background: rgba(200, 200, 200, .04);

  }
`;

export default StyledButton;
