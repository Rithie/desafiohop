import styled from "styled-components";

export const AppHeader = styled.div`
  color: #484848;
  position: fixed;
  padding: 0 0 0 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 8vh;
  background: #0099ff;
  z-index: 100;
  -webkit-box-shadow: 1px 0px 5px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 1px 0px 5px 0px rgba(0,0,0,0.75);
  box-shadow: 1px 0px 5px 0px rgba(0,0,0,0.75);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 0 30px;
  cursor: pointer;

  span {
    color: #f9f9f9;
    font-size: 20px;
  }

`;

export const Icon = styled.i`
  i {
    color: #fff;
    font-size: 18px;
    margin-right: 10px;
  }
`;