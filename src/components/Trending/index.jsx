import React, { useEffect, useState } from "react";
import axios from "../../axios";
import {  imageUrl } from "../../constants/Constants";
import {
  TrendingContainer,
  TrendingTitle,
  TrendingPosters,
} from "./TrendingElements";
const Trending = (props) => {
  const [originals, setOriginals] = useState([]);
  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        console.log(response.data);
        setOriginals(response.data.results);
      })
      .catch((error) => {
        alert("Network Error");
      });
  }, []);
  return (
    <TrendingContainer>
      <TrendingTitle>{props.title}</TrendingTitle>
      <TrendingPosters className="posters">
        {originals.map((obj) => (
          <img
            className={props.isSmall ? 'smallPoster' : "Poster"}
            src={`${imageUrl+obj.backdrop_path}`}
            alt="Poster"
          />
        ))}
      </TrendingPosters>
    </TrendingContainer>
  );
};

export default Trending;
