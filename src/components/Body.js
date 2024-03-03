import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const Body = () => {

    // Local State variable - using Hooks
    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    // this hook takes two arguments
    // 1. callback function
    // 2. list of dependencies
    // this hook is called after the body component is rendered
    
    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5/?lat=12.9351929&lng=77.6244809999&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
        console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="filter">
                <button
                    className="filter-btn"
                    onClick={()=>{
                        //Filter logic for top rated restaurant
                        const filterListOfRestaurants = listOfRestaurants.filter((res) => res.info.avgRating > 4.2);
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
                        fetchData();
                    }}
                >
                    Clear Filter
                </button>
            </div>
            <div className="res-container">
                {
                    listOfRestaurants.length === 0 
                    ? <Shimmer />
                    : listOfRestaurants.map((restaurant => 
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />))
                }
            </div>
    </div>)
}
export default Body;