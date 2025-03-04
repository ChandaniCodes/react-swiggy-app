import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
// import { resList } from "../utils/mockData";
import Shimmer from "./Shimmer";

const BodyComp = () => {
  // const [listOfRestaurant, setListOfRestaurant] = useState(resList);
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // console.log("useeffect");
    fetchData();
  }, []);

  const fetchData = async () => {
    // setIsLoading(true)
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3574608&lng=78.08117519999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json.data.cards[0].card.card.imageGridCards.info);
    setListOfRestaurant(json.data.cards[0].card.card.imageGridCards.info);
    setIsLoading(false);
  };

  return (
    <>
      {isLoading ? (
        <Shimmer />
      ) : (
        <div className="container">
          <div className="search-bar">
            <input type="text" placeholder="Search" />
            <button
              onClick={() => {
                const filterlis = listOfRestaurant.filter(
                  (res) => res.info.avgRating > 4
                );
                setListOfRestaurant(filterlis);
              }}
            >
              Top Rated Restaurant{" "}
            </button>
          </div>
          <div className="res-container">
            {listOfRestaurant && listOfRestaurant.length !== 0 ? (
              listOfRestaurant.map((restaurant, ind) => (
                // <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                <div key={ind} className="res-card">
                  {/* <div>{restaurant.entityId}</div> */}
                  <div>{restaurant.id}</div>
                </div>
              ))
            ) : (
              <div> no data found</div>
            )}
          </div>
        </div>
      )}
      ;
    </>
  );
};
export default BodyComp;
