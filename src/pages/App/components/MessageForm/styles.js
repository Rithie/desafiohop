import styled from "styled-components";

export const Form = styled.form`
  color: #484848;
  position: fixed;
  padding: 0 0 0 10;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 8vh;
  border: 5px solid #f4f3f4;
  border-radius: 3px;
  background: #fff;
  -webkit-box-shadow: 1px 0px 5px 0px rgba(0,0,0,0.35);
  -moz-box-shadow: 1px 0px 5px 0px rgba(0,0,0,0.35);
  box-shadow: 1px 0px 5px 0px rgba(0,0,0,0.35);
`;

export const InputField = styled.input`
  display: flex;
  color: inherit;
  background: none;
  outline: none;
  flex: 9,
  font-size: 16,
  border: "none",
  paddingLeft: 10
`;

export const Button = styled.button`
  border-radius: 3px;
  padding: 0.35em 1em;
  background: #8bc78b;
  color: #fff;
  width: 8vh
  border: 2px solid #8bc78b;
`;
