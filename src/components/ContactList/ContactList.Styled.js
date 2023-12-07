import styled from 'styled-components';

export const List = styled.ul`

 
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
`;

export const ListItem = styled.li`
  margin: 0;
  padding: 0px;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  max-width: 100%;
`;

export const ButtonItem = styled.button`
width: 100px;
align-self: center;
padding: 10px;
color: white;
background-color: #4d83c2;


  border-radius: 4px;
`;

export const Text = styled.p`
padding: 15px;
margin: 0;
`
