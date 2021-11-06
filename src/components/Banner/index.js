import React, { useEffect,useState } from "react";
import axios from "../../axios"
import { API_KEY,imageUrl } from "../../constants/Constants"
import {
  BannerContainer,
  Contents,
  BannerTitle,
  BannerButtonsWrapper,
  BannerDescription,
  BannerButton,
} from "./BannerElementStyles";
import { CgPlayListAdd, CgPlayButtonO } from 'react-icons/cg';
const Banner = () => {
  const [topMovie, settopMovie] = useState();
  useEffect(() => {

    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
      console.log(response.data.results[0])
      settopMovie(response.data.results[0])
    })
  }, [])
  return (
    <BannerContainer style={{  backgroundImage:`url(${topMovie ? imageUrl+topMovie.backdrop_path : " "})`}}>
      <Contents>
        <BannerTitle>{topMovie? topMovie.title : "No Movie Found"}</BannerTitle>
        <BannerButtonsWrapper>
          <BannerButton>Play <CgPlayButtonO /> </BannerButton>
          <BannerButton>My Watchlist  <CgPlayListAdd /></BannerButton>
        </BannerButtonsWrapper>
        <BannerDescription>
        {topMovie? topMovie.overview : "No Movie Found"}
        </BannerDescription>
      </Contents>

    </BannerContainer>
  );
};

export default Banner;
