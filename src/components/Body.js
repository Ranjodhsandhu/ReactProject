import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
const Body = () => {

    // Local State variable - using Hooks
    // const [listOfRestaurants, setListOfRestaurants] = useState(resList);

    // above one line of code is same as below three lines of code
    const arr = useState(resList);
    const listOfRestaurants = arr[0];
    const setListOfRestaurants = arr[1];

    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="filter">
                <button
                    className="filter-btn"
                    onClick={()=>{
                        //Filter logic for top rated restaurant
                        const filterListOfRestaurants = listOfRestaurants.filter((res) => res.rating.text > 4);
                        setListOfRestaurants(filterListOfRestaurants);
                        console.log(filterListOfRestaurants);
                    }}
                >
                    Top Rated Restaurant
                </button>
                <button
                    className="clear-btn"
                    onClick={()=>{
                        //Filter logic for top rated restaurant
                        setListOfRestaurants(resList);
                    }}
                >
                    Clear Filter
                </button>
            </div>
            <div className="res-container">
                {
                    listOfRestaurants.map((restaurant => 
                    <RestaurantCard key={restaurant.storeUuid} resData={restaurant} />))
                }
            </div>
    </div>)
}
export default Body;