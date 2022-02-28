import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  flex:1;
  text-align: right;
  text-decoration:none;
  background-color:red;
padding: 0px 70px;
text-align: center;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 16px;
  color: #fff;
  margin:3px;

  &:active {
    background: #41addd;
    color: #fff;
  }
`;
