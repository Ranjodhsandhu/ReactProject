import { IMAGE_BASE_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    const title = resData.info.name;
    const rating = resData.info.avgRating;
    const delivery = resData.info.sla.slaString;
    const cuisines = resData.info.cuisines.join(", ");
    const imageId = resData.info.cloudinaryImageId;
    // const imgUrl = resData.image.items[0].url;
    return (
        <div className="res-card" style={{ backgroundColor: "lightgrey" }}>
            <img className="res-logo" src={IMAGE_BASE_URL+"/"+imageId} alt="restaurant image" />

            <h3>{title}</h3>
            <h4>{cuisines}</h4>
            <h4>{rating} stars</h4>
            <h4>{delivery}</h4>
        </div>
    )
}
export default RestaurantCard;