const RestaurantCard = (props) => {
    const { resData } = props;
    const title = resData.title.text;
    const rating = resData.rating.text;
    const delivery = resData.tracking.storePayload.etdInfo.dropoffETARange.raw;
    const imgUrl = resData.image.items[0].url;
    return (
        <div className="res-card" style={{ backgroundColor: "lightgrey" }}>
            <img className="res-logo" src={imgUrl} alt="restaurant image" />
            <h3>{title}</h3>
            <h4>{rating} stars</h4>
            <h4>{delivery} mins</h4>
        </div>
    )
}
export default RestaurantCard;