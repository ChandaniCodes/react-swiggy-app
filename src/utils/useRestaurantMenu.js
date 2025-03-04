// import { useEffect, useState } from "react";
// import { RESTAURANT_MENU } from "./constants";

// const useRestaurantMenu = (resId) => {
//   const [restInfo, setRestInfo] = useState(null);

//   // console.log("resifo", restInfo);
//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch(RESTAURANT_MENU + resId);
//       const json = await response.json();
//       if (response.ok && json && json.data) {
//         setRestInfo(json.data);
//         console.log("Cards array:", json.data.cards);
//       } else {
//         console.error("Error fetching data:", json);
//       }
//     } catch (error) {
//       console.error("Error fetching restaurant menu:", error);
//     }
//   };
//   return restInfo;
// };

// export default useRestaurantMenu;

import { useEffect, useState } from "react";
import { RESTAURANT_MENU } from "./constants";

const useRestaurantMenu = (resId) => {
  const [restInfo, setRestInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    if (resId) {
      fetchData();
    }
  }, [resId]); // Re-run when resId changes

  const fetchData = async () => {
    setIsLoading(true); // Set loading state to true when fetch starts
    try {
      const response = await fetch(RESTAURANT_MENU + resId);
      const json = await response.json();

      if (response.ok && json && json.data) {
        setRestInfo(json.data); // Set restInfo once data is fetched
      } else {
        console.log("Error fetching data:", json);
      }
    } catch (e) {
      console.log("Error fetching restaurant menu:", e);
    } finally {
      setIsLoading(false); // Set loading state to false after the fetch is complete
    }
  };

  return { restInfo, isLoading };
};

export default useRestaurantMenu;
