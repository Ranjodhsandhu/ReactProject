import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { SWIGGY_API } from "../utils/constants";

const Body = () => {

    // Local State variable - using Hooks
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    // this hook takes two arguments
    // 1. callback function
    // 2. list of dependencies
    // this hook is called after the body component is rendered
    
    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch(SWIGGY_API);

        const json = await data.json();
        console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return(
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input 
                        type="text"
                        value={searchText}
                        onChange = { (e) => {
                            setSearchText(e.target.value);
                        }}
                        className="search-box"
                        placeholder="Search Restaurant"  
                    />
                    <button onClick={()=>{
                        // Filter the search data
                        let filteredList = listOfRestaurants.filter((res)=> 
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredRestaurants(filteredList);
                    }}>Search</button>
                </div>
                <button
                    className="filter-btn"
                    onClick={()=>{
                        //Filter logic for top rated restaurant
                        const filterListOfRestaurants = listOfRestaurants.filter((res) => res.info.avgRating > 4.2);
                        setFilteredRestaurants(filterListOfRestaurants);
                        console.log(filterListOfRestaurants);
                    }}
                >
                    Top Rated Restaurant
                </button>
                <button
                    className="clear-btn"
                    onClick={()=>{
                        //Filter logic for top rated restaurant
                        setFilteredRestaurants(listOfRestaurants);
                    }}
                >
                    Clear Filter
                </button>
            </div>
            <div className="res-container">
                {
                    listOfRestaurants.length === 0 
                    ? <Shimmer />
                    : filteredRestaurants.map((restaurant => 
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />))
                }
            </div>
    </div>)
}
export default Body;