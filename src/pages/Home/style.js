import styled from "styled-components";

export const Container = styled.div`
  width: auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  color: #053742;
`;

export const Input = styled.input`
  padding: 12px 20px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  &:focus {
    outline: none;
  }
  &:hover{
    background-color: lightgrey;
  }
  ::-webkit-input-placeholder  { 
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
  }
`;

export const Button = styled.button`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #053742;
  color: #E8F0F2;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  margin-left: 5px;
  padding: 12px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  &:hover {
    background-color: #39A2DB;
    color: #053742;
  }
  &:focus {
    outline: none;
  }
`;

export const ErrorMessage = styled.span`
  color: red;
  display: block;
  text-align: center;
  margin-top: 2%;
  transition: 1s;
`
