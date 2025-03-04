import { useEffect, useState } from "react";
import { RESTAURANT_URL } from "./constants";

const useRestaurant = () => {
  const [restaurantList, setRestaurantList] = useState();

  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3574608&lng=78.08117519999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = response.json();
    setRestaurantList(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // console.log(
    //   json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
  };
  return restaurantList;
};

export default useRestaurant;
