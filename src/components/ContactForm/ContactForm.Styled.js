import styled from 'styled-components';
import { Form, Field } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;

  gap: 16px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledField = styled(Field)`
  width: 200px;
  height: 40px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  margin: 0;
  padding-left: 10px;
`;

export const Button = styled.button`
  width: 120px;
  align-self: center;
  padding: 10px;
  color: white;
  background-color: #4d83c2;
  border-radius: 4px;
`;
