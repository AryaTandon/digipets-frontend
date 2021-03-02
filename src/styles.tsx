import styled from "styled-components";

// Styling for buttons in DigipetActons
export const StyledButton = styled.button`
  background: palevioletred;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: white;
  margin: 0 0.25em;
  padding: 0.25em 1em;
  &:hover {
    background: transparent;
    color: palevioletred;
  }
`;

// Styling for displaying text in DigipetData
export const StyledData = styled.div`
  background: transparent;
  color: palevioletred; 
  margin: 0 0.25em;
  padding: 0.25em 1em;
`;

// Styling for header / top text in return of App function in App.tsx
export const StyledText = styled.div`
  background: transparent;
  color: palevioletred; 
  margin: 0 0.25em;
  padding: 0.25em 1em;
`;
