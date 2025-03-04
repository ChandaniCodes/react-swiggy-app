import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { restInfo, isLoading } = useRestaurantMenu(resId);

  if (isLoading) return <Shimmer />;

  if (!restInfo) {
    return <div>No data available. ☹</div>;
  }
  console.log(restInfo);

  const items =
    restInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;

  const categories =
    restInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // [1].card.card?.["@type"];
  console.log(categories);
  return (
    <div>
      <h1>{items.title}</h1>

      {items.itemCards.map((i) => {
        return (
          <div key={i.card.info.id} className="flex flex-wrap">
            <div className="m-2 p-2 bg-pink-200 ">
              <div>{i.card.info.name}</div>
              <div>Prize: Rs. {i.card.info.price}</div>
              <div>{i.card.info.category}</div>
              <div>{i.card.info.ratings.aggregatedRating.rating}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
