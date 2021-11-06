import styled from "styled-components";

export const BannerContainer = styled.div`
  display: flex;
  background-image: url(https://wallpaperaccess.com/full/2703652.png);
  background-size: cover;
  background-position: center top;
  
  height: 70vh;
  color: #fff;
  transition: all 500ms ease-in-out;
  padding-left:15px;

  :before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 20vh;
    width: 100%;
    height: 100%;
    display: inline-block;
    height: 7.4rem;
    background-image: linear-gradient(180deg, transparent, #0000009b, #000000);
  }
`;

export const Contents = styled.div`
  padding-top: 140px;
  height: 190px;

`;
export const BannerTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  padding-bottom: 0.3rem;
`;
export const BannerDescription = styled.p`
  width: 45rem;
  line-height: 1.5;
  padding-top: 1rem;
  height: 80px;
  max-width: 360px;
`;

export const BannerButtonsWrapper = styled.div``;

export const BannerButton = styled.button`
  color: white;
  border: none;
  outline: none;
  font-weight: 700;
  border-radius: 5px;
  padding: 0.5rem 2rem;
  background-color: rgba(51, 51, 51, 0.5);
  cursor: pointer;
  margin-right: 2rem;

  :hover {
    color: black;
    background-color: #e6e6e6;
  }
`;
