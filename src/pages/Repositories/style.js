import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  color: #053742;
`;

export const List = styled.li`
  color: #053742;
  padding: 5px 0 0 0;
  list-style: none;
  text-align: center;
`;

export const LinkHome = styled(Link)`
  background-color: #053742;
  color: #E8F0F2;
  font-weight: bold;
  border-radius: 8px;
  margin: 1%;
  padding: 8px 20px;
  display: block;
  width: 4rem;
  text-align: center;
  text-decoration: none;
  &:hover {
    background-color: #39A2DB;
    color: #053742;
  }
`