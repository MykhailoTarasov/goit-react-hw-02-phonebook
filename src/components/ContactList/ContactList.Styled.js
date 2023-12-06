import styled from 'styled-components';

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
`;

export const ListItem = styled.li`
  margin: 0;
  padding: 15px;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

export const ButtonItem = styled.button`
  color: white;
  background-color: #4d83c2;
  cursor: pointer;
  border: none;
  font-size: 16px;
  line-height: 1.5;
  font-weight: 500;
  font-family: Roboto, sans-serif;
  letter-spacing: 0.02em;

  padding: 12px 24px;

  border-radius: 4px;
`;
