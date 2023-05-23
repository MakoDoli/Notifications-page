import styled from "styled-components";

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  @media screen and (min-width: 768px) {
    margin-bottom: 31px;
  }
  h1 {
    font-family: "Plus Jakarta Sans";
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
    line-height: 25px;
    color: #1c202b;
    @media screen and (min-width: 768px) {
      font-size: 24px;
      line-height: 30px;
    }
  }
  .number {
    width: 32px;
    height: 25px;
    background: #0a327b;
    border-radius: 6px;
    font-weight: 800;
    font-size: 16px;
    line-height: 20px;
    font-family: "Plus Jakarta Sans";
    color: #ffffff;
    padding: 2px 10px;
    margin-left: 9px;
  }
  .mark {
    font-family: "Plus Jakarta Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    text-align: right;
    color: #5e6778;
    cursor: pointer;
    margin-left: 74px;
    &:hover {
      color: #0a327b;
    }
    @media screen and (min-width: 768px) {
      font-size: 16px;
      line-height: 20px;
      margin-left: 356px;
    }
  }
`;
