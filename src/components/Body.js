import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
const Body = () => {

    // Local State variable - using Hooks
    // const [listOfRestaurants] = useState([]);

    // Normal JS Variable
    let listOfRestaurants = [
        {
            "storeUuid": "a339e555-3714-4d19-8bc0-95d4cfc03d5b123",
            "title": {
                "text": "McDonald's® (Telegraph & 10 Mile)"
            },
            "rating": {
                "text": "3.6",
            },
            "image": {
                "items": [{
                        "url": "https://tb-static.uber.com/prod/image-proc/processed_images/2c4581a38702555f962f1cd103ca59ff/c9252e6c6cd289c588c3381bc77b1dfc.jpeg",
                        "width": 2880,
                        "height": 2304
                    }
                ]
            },
            "tracking": {
                "storePayload": {
                    "etdInfo": {
                        "dropoffETARange": {
                            "raw": 30
                        },
                    },
                }
            }
        },
        {
            "storeUuid": "a339e555-3714-4d19-8bc0-95d4cfc03d5b",
            "title": {
                "text": "Domnio's® (Telegraph & 10 Mile)"
            },
            "rating": {
                "text": "4.5",
            },
            "image": {
                "items": [{
                        "url": "https://tb-static.uber.com/prod/image-proc/processed_images/2c4581a38702555f962f1cd103ca59ff/c9252e6c6cd289c588c3381bc77b1dfc.jpeg",
                        "width": 2880,
                        "height": 2304
                    }
                ]
            },
            "tracking": {
                "storePayload": {
                    "etdInfo": {
                        "dropoffETARange": {
                            "raw": 30
                        },
                    },
                }
            }
        },
        {
            "storeUuid": "123a339e555-3714-4d19-8bc0-95d4cfc03d5b",
            "title": {
                "text": "Wendy's® (Telegraph & 10 Mile)"
            },
            "rating": {
                "text": "4.3",
            },
            "image": {
                "items": [{
                        "url": "https://tb-static.uber.com/prod/image-proc/processed_images/2c4581a38702555f962f1cd103ca59ff/c9252e6c6cd289c588c3381bc77b1dfc.jpeg",
                        "width": 2880,
                        "height": 2304
                    }
                ]
            },
            "tracking": {
                "storePayload": {
                    "etdInfo": {
                        "dropoffETARange": {
                            "raw": 30
                        },
                    },
                }
            }
        }
    ];
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="filter">
                <button
                    className="filter-btn"
                    onClick={()=>{
                        //Filter logic for top rated restaurant
                        listOfRestaurants = listOfRestaurants.filter(
                            (res) => res.rating.text > 4)
                        console.log(listOfRestaurants);
                    }}
                >
                    Top Rated Restaurant
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