import styled from "styled-components";

export const TrendingContainer = styled.section`
  margin-left:20px;
  margin-top:20px;
  color: #fff;
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
  .poster{
      max-height: 250px;
      margin-right:10px;
  }
`