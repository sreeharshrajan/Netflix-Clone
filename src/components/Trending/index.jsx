import React, { useEffect, useState } from "react";
import axios from "../../axios";
import { API_KEY, imageUrl } from "../../constants/Constants";
import {
  TrendingContainer,
  TrendingTitle,
  TrendingPosters,
} from "./TrendingElements";
const Trending = () => {
  const [originals, setOriginals] = useState([]);
  useEffect(() => {
    axios
      .get(`discover/tv?api_key=${API_KEY}&with_networks=213`)
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
      <TrendingTitle>Netflix Originals</TrendingTitle>
      <TrendingPosters className="posters">
        {originals.map((obj) => (
          <img
            className="poster"
            src={`${imageUrl+obj.backdrop_path}`}
            alt="Poster"
          />
        ))}
      </TrendingPosters>
    </TrendingContainer>
  );
};

export default Trending;
