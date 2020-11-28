import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}
export const Title = styled.h1`
  font-size: 3rem;
  color: #3a3a3a;
  margin-top: 2rem;
  max-width: 38vw;
  line-height: 3.5rem;
`;

export const Form = styled.form<FormProps>`
  margin-top: 4vh;
  max-width: 100%;

  display: flex;

  input {
    flex: 1;
    height: 8vh;
    border: 0;
    padding: 0 1rem;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;

    &::placeholder {
      color: #a8a8b3;
    }

    ${props =>
      props.hasError &&
      css`
        border: 2px solid #c53030;
        border-right: none;
      `}
  }

  button {
    width: 14vw;
    height: 8vh;
    background: #04d361;
    border-radius: 0 5px 5px 0;
    border: none;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.15s;

    &:hover {
      background: ${shade(0.2, '#04D361')};
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;

export const Repositories = styled.div`
  margin-top: 9vh;
  max-width: 100%;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%fit-content;
    padding: 1rem;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;

    &:hover {
      transform: translateX(8px);
      transition: transform 0.15s;
    }

    & + a {
      /* a + b -> b é precedido por a */
      margin-top: 10px;
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin-left: 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin: 4px 16px 0 0;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
