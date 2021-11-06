import React from "react";
import {
  BannerContainer,
  Contents,
  BannerTitle,
  BannerButtonsWrapper,
  BannerDescription,
  BannerButton,
} from "./BannerElementStyles";

const Banner = () => {
  return (
    <BannerContainer>
      <Contents>
        <BannerTitle>The Movie Name</BannerTitle>
        <BannerButtonsWrapper>
          <BannerButton>Play</BannerButton>
          <BannerButton>My Watchlist</BannerButton>
        </BannerButtonsWrapper>
        <BannerDescription>          
          Velit consectetur excepteur ut elit sit excepteur commodo amet esse
          enim mollit ad nulla aliquip. In excepteur nulla anim duis deserunt
          quis proident incididunt esse ad fugiat cillum sunt. Reprehenderit
          mollit sint esse consequat anim.
        </BannerDescription>
      </Contents>
    
    </BannerContainer>
  );
};

export default Banner;
