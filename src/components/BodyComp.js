import React, { useEffect, useState } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { RESTAURANT_URL } from "../utils/constants";
import useUserStatus from "../utils/useUserStatus";
import { Link } from "react-router-dom";

const BodyComp = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  const [searchRestaurant, setSearchRestaurant] = useState("");

  const onlineStatus = useUserStatus();
  const PromtedRestaurant = withPromotedLabel(RestaurantCard);

  // console.log(listOfRestaurant);

  /*wheneverstate variables update,react triggers a reconcilation cycle(re-render the component)

   react is re-rendering the whole body component, but it is updating the actual DOM by only updated things like button, searchtext here*/

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(RESTAURANT_URL);
    const json = await response.json();
    // console.log(json);
    setListOfRestaurant(
      // optional chaining
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurant(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (onlineStatus === false) {
    return <h1>u r offline, Check ur internet connection !!!</h1>;
  }
  // conditional rendering
  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search"
          value={searchRestaurant}
          onChange={(e) => {
            // here also on typing every character, the component is re-rendering
            setSearchRestaurant(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const filterSearchRes = listOfRestaurant.filter((res) =>
              res.info.name
                .toLowerCase()
                .includes(searchRestaurant.toLowerCase())
            );

            setfilteredRestaurant(filterSearchRes);
          }}
        >
          Search
        </button>
        <button
          onClick={() => {
            const filterlis = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4.4
            );
            setListOfRestaurant(filterlis);
            console.log("clicked");
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant?.info.id}
            to={"/restaurants/" + restaurant?.info.id}
          >
            {restaurant?.info.isOpen ? (
              <PromtedRestaurant resData={restaurant?.info} />
            ) : (
              <RestaurantCard resData={restaurant?.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default BodyComp;
