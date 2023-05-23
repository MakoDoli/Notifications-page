import styled from "styled-components";

export const StyledComment = styled.div<{ background: boolean }>`
  width: 343px;
  height: 89px;
  cursor: pointer;
  border-radius: 8px;
  margin-bottom: 16px;
  padding: 24px 16px 0 0;
  display: flex;
  align-items: center;
  background-color: ${(props) => (props.background ? "white" : "#F7FAFD;")};
  @media screen and (min-width: 768px) {
    width: 670px;
    height: 80px;
  }

  p {
    font-family: "Plus Jakarta Sans";
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: #5e6778;

    @media screen and (min-width: 768px) {
      font-size: 16px;
      line-height: 20px;
    }
  }
  .text-time {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    position: relative;
  }
  .text {
    display: flex;
    font-family: "Plus Jakarta Sans";
    font-style: normal;
    font-weight: 800;
    font-size: 14px;
    line-height: 18px;
    color: #1c202b;
    align-items: center;
  }
  .avatar {
    width: 39px;
    height: 39px;
    margin-right: 13px;

    @media screen and (min-width: 768px) {
      width: 45px;
      height: 45px;
    }
  }
  .clickable {
    font-family: "Plus Jakarta Sans";
    font-style: normal;
    font-weight: 800;
    font-size: 14px;
    line-height: 18px;
    color: #1c202b;

    @media screen and (min-width: 768px) {
      font-size: 16px;
      line-height: 20px;
    }
  }
  .chess {
    color: #0a327b;
  }
  .post {
    color: #5e6778;
    margin-left: 6px;
  }
  .name {
    margin-right: 6px;
  }
  .dot {
    margin-left: 6px;
  }
  .chess-img {
    width: 37px;
    height: 38px;
    margin-left: 160px;
    position: absolute;
    top: 0;
    left: 92px;
    @media screen and (min-width: 768px) {
      top: 0;
      left: 368px;
      width: 45px;
      height: 45px;
    }
  }
  .time {
    font-family: "Plus Jakarta Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: #939cad;
    margin-top: 5px;
    @media screen and (min-width: 768px) {
      font-size: 16px;
      line-height: 20px;
    }
  }
`;

export const Container = styled.main`
  width: 375px;
  height: 901px;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 24px 16px;
  @media screen and (min-width: 768px) {
    padding: 33px 30px;
    width: 730px;
    height: 839px;
  }
`;
export const StyledMessage = styled.div`
  width: 263px;
  height: 122px;
  border: 1px solid #dde7ee;
  border-radius: 5px;
  margin-left: 68px;
  padding: 16px;
  margin-bottom: 20px;
  p {
    font-family: "Plus Jakarta Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: #5e6778;
  }
  @media screen and (min-width: 768px) {
    width: 566px;
    height: 97px;
    p {
      font-size: 16px;
      line-height: 20px;
    }
  }
`;
