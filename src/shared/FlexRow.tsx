import styled from 'styled-components';

interface FlexRowProps { maxWidth: string; }
export const FlexRow = styled.div<FlexRowProps> `
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  max-width: ${({ maxWidth }: FlexRowProps) => maxWidth};
`;
