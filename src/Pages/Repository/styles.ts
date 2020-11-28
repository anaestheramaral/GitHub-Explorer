import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.15s;

    &:hover {
      color: #666;
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 9vh;

  header {
    display: flex;
    align-items: center;

    img {
      border-radius: 50%;
      height: 13vh;
      width: 13vh;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 32px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #737380;
        margin-top: 4px;
      }
    }
  }
  ul {
    display: flex;
    list-style: none;
    margin-top: 4vh;

    li {
      & + li {
        margin-left: 6vw;
      }

      strong {
        display: block;
        font-size: 32px;
        color: #3d3d4d;
      }

      span {
        display: block;
        margin-top: 4px;
        color: #6c6c80;
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 9vh;
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
