import styled from "styled-components";

export const TrendingContainer = styled.section`
  margin-left:20px;
  margin-top:20px;
  color: #fff;
  transition: all 500ms ease-in-out;
  scroll-behavior: smooth;
`

export const TrendingTitle = styled.h2`
  font-size:1.5rem
`

export const TrendingPosters = styled.div`
  width:100%;
  display:flex;
  padding: 20px;
  overflow-x: scroll;
  overflow-y: hidden;

::-webkit-scrollbar{
      display: none;
  }

  .Poster{
      max-height: 250px;
      margin-right:10px;
      border-radius: 8px;
  }

  .smallPoster{
    max-height: 110px;
    margin-right:15px;
    border-radius: 8px;
  }
`