import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  // const {resData} = props;
  // const { name, cuisines,avgRating,cloudinaryImageId} = resData.info;
  return (
    <div className="res-card">
      <img alt="" src={CDN_URL + resData.cloudinaryImageId} />
      <b>{resData.name}</b>
      <p>{resData.cuisines.join(", ")}</p>
      <span>{resData.avgRating} stars</span>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white px-2">Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
