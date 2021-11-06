import styled from "styled-components";

export const BannerContainer = styled.div`
  display: flex;
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
    bottom: 30vh;
    width: 100%;
    height: 100%;
    display: inline-block;
    height: 7.4rem;
    background-image: linear-gradient(180deg,transparent,#000000a2,#000000df,#000000);
    z-index: 1;
  }
  
  @media screen and (max-width:768px){
   :before{
   bottom: 25vh;
   }
  }
`;

export const Contents = styled.div`
  padding-top: 110px;
  height: 190px;
z-index: 4;
`;
export const BannerTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  padding-bottom: 0.3rem;
`;
export const BannerDescription = styled.p`
     width: 45rem;
    line-height: 1.25;
    padding-top: 1rem;
    max-width: 350px;
  text-overflow:ellipsis;
  overflow:hidden;
  // Addition lines for 2 line or multiline ellipsis
  display: -webkit-box !important;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  white-space: normal;
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

  svg{
    font-size: 1.44rem;
    margin-left: 5px;
    vertical-align: middle;
  }
`;
