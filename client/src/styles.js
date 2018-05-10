import styled from 'styled-components';

export const Background = styled.div`
  box-sizing: content-box;
  margin-left: 20px;
  width: 100%;
  @media (max-width: 900px) {
    width: 90%;
  },
  background-color: #87CEEB;
`;

export const Header = styled.h2`
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  text-align: center;
`;

export const SmallHeader = Header.extend`
  font-size: 20px;
  padding-top: 20px;
  text-align: left;
`;

export const Text = Header.extend`
  font-size: 16px;
  font-weight: 200;
`;

export const Form = styled.form`
  text-align: center;
  padding-top: 20px;
`;

export const FormInput = styled.input`
  background-color: white;
  background-position: 10px 10px;
`;

export const LeftBox = styled.div`
  display: inline-table;
  box-sizing: content-box;
`;

export const RightBox = LeftBox.extend`
`;


