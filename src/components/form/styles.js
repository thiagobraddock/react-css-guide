import styled, { keyframes } from "styled-components";
import { shade } from 'polished';
import backTrybe from '../../assets/back_trybe.png';

const appearFromRight = keyframes`
  from {
    opacity:0;
    transform: translateX(50px);
  }
  to {
    opacity:1;
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  min-height: 100%;
  max-height: 100%;
  background-color: #8ecae6;
`;

export const Title = styled.h1`
   font-size: 2.0em;
   text-align: center;
   font-weight: bolder;
   color: #fff;
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backTrybe}) no-repeat center;
  background-size: cover;
  background-color: black;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 600px;
  min-height: 100vh;
  max-height: 100%;
`;

export const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	animation: ${appearFromRight} 1s;
`;

export const Form = styled.form`
	margin: 14px 0;
	width: 340px;
	text-align: center;
`;

export const Input = styled.input`
	flex: 1;
    background: #494D4B;
    border: 0;
    color: #fff;
	border-radius: 10px;
  border: 2px solid #494D4B;
  padding: 16px;
  width: 100%; 

  display: flex;
  align-items: center;

  & + input {
    margin-top: 8px;
  }

  &:focus {
	color: #ebecf0;
      border-color: #ebecf0;
  }

    &::placeholder {
      color: #fff;
    }
`;

export const Button = styled.button`
	background: #494D4B;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #e2dfe8;
  width: 100%;
  font-weight: 500;
  font-size: 18px;
  margin-top: 16px;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#f19f4d')};
    border: none;
  }
`;

export const FormGroup = styled.div`
	color: palevioletred;
    display: block;
	width: 300px;
	margin: 50px auto;
`;


