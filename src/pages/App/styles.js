import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  margin: 8vh 0;
  background: #fff;

  p {
    margin-bottom: 15px;
    padding: 10px;
    width: 100%;
  }
  hr {
    margin: 20px 0;
    border: none;
    border-bottom: 1px solid #cdcdcd;
    width: 100%;
  }

  span {
    color: #fc6963;
    font-size: 20px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  span {
    color: #939393;
    font-size: 14px;
    margin-left: 5px
  }
  i {
    color: #939393;
    font-size: 14px;
  }
`;


export const BubbleLeftContainer = styled.div`
  color: #484848;
  align-self: flex-start;
  margin: 5px;
`;

export const BubbleRightContainer = styled.div`
  color: #484848;
  align-self: flex-end;
  margin: 5px;
`;

export const BubbleRight = styled.div`
  border-radius: 3px;
  background: #4fa2f9;
  color: #fff;
  min-width: 200px;
  max-width: 400px
  border: 1px solid #09f;
  align-self: flex-end;
  margin: 5px;
  text-align: right;
  padding: 10px;
  /*display: flex;*/
`;

export const BubbleLeft = styled.div`
  display: flex;
  border-radius: 3px;
  background: #bbbbbb;
  color: #fff;
  min-width: 200px;
  max-width: 400px;
  border: 1px solid #9e9e9e;
  align-self: flex-start;
  margin: 5px;
  text-align: left;
  padding: 10px;
`