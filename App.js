import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  - LOGO
 *  - NAV (Home, About, Cart)
 * Body
 *  - Search
 *  - Restaurant Container
 *    - Restaurant Cards
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

// const styleCard = ;
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

const resList = [{
    "storeUuid": "a339e555-3714-4d19-8bc0-95d4cfc03d5b",
    "title": {
        "text": "McDonald's® (Telegraph & 10 Mile)"
    },
    "meta": [
        {
            "text": "20–35 min",
            "accessibilityText": "Delivered in 20 to 35 min",
            "badgeType": "ETD"
        }
    ],
    "rating": {
        "text": "3.6",
        "accessibilityText": "Rated 3.6 out of 5 stars based on 80 reviews.",
        "badgeType": "RATINGS"
    },
    "actionUrl": "/store/mcdonalds-telegraph-%26-10-mile/oznlVTcUTRmLwJXUz8A9Ww?delivery_type=deliverytype%280%29",
    "favorite": false,
    "image": {
        "items": [
            {
                "url": "https://tb-static.uber.com/prod/image-proc/processed_images/2c4581a38702555f962f1cd103ca59ff/c9252e6c6cd289c588c3381bc77b1dfc.jpeg",
                "width": 2880,
                "height": 2304
            },
            {
                "url": "https://tb-static.uber.com/prod/image-proc/processed_images/2c4581a38702555f962f1cd103ca59ff/50446f64f31cbefe66558fc47f50a9d6.jpeg",
                "width": 1080,
                "height": 864
            },
            {
                "url": "https://tb-static.uber.com/prod/image-proc/processed_images/2c4581a38702555f962f1cd103ca59ff/f3376a06b92224efbe50167fb7cb61e4.jpeg",
                "width": 750,
                "height": 600
            },
            {
                "url": "https://tb-static.uber.com/prod/image-proc/processed_images/2c4581a38702555f962f1cd103ca59ff/67b1ce06a25a64dc4a71581bb39c36c6.jpeg",
                "width": 640,
                "height": 512
            },
            {
                "url": "https://tb-static.uber.com/prod/image-proc/processed_images/2c4581a38702555f962f1cd103ca59ff/7915c4a78a9f94ed56316c7c4dc0ec89.jpeg",
                "width": 550,
                "height": 440
            },
            {
                "url": "https://tb-static.uber.com/prod/image-proc/processed_images/2c4581a38702555f962f1cd103ca59ff/e39556ef1e4c4565bc6c7dbd8b90869c.jpeg",
                "width": 240,
                "height": 192
            }
        ]
    },
    "signposts": null,
    "tracking": {
        "metaInfo": {
            "pluginName": "LowDeliveryFeeV2Plugin",
            "analyticsLabel": "LOW_DELIVERY_FEE_V2_CAROUSEL",
            "verticalType": "",
            "category": "",
            "subcategory": "",
            "surfaceAreaV2": ""
        },
        "storePayload": {
            "storeUUID": "a339e555-3714-4d19-8bc0-95d4cfc03d5b",
            "isOrderable": true,
            "score": {
                "breakdown": {
                    "ConversionRate_boosting_factor": 1,
                    "FinalScore": 0.05072146935224533,
                    "PredictionScore": 0.050711469352245325,
                    "conversion_rate_partial_score": 0.04412245750427246,
                    "ctr_partial_score": 0.08804920315742493,
                    "net_inflow_boosting_factor": 0,
                    "net_inflow_partial_score": 22.532038195882038,
                    "service_quality_boosting_factor": 0,
                    "service_quality_partial_score": 0.7250100374221802,
                    "t120d_eyeball_count": 6120,
                    "t120d_request_count": 1009,
                    "ucb_bandit_boosting_factor": 0,
                    "ucb_bandit_partial_score": 0.05671282026276934
                },
                "total": 0.05072146935224533
            },
            "etdInfo": {
                "dropoffETASec": 1759,
                "dropoffETARange": {
                    "min": 20,
                    "max": 35,
                    "raw": 30
                },
                "minRangeDropoffETASec": 1200,
                "maxRangeDropoffETASec": 2100,
                "etdMode": "PREDICTION"
            },
            "ratingInfo": {
                "storeRatingScore": 3.625,
                "ratingCount": "80"
            },
            "scheduleTimeSlots": null,
            "isDBF": true,
            "storeAvailablityState": "UNKNOWN"
        }
    },
    "mapMarker": {
        "latitude": 42.469,
        "longitude": -83.2793,
        "zIndex": 9979,
        "description": {
            "title": "McDonald's®",
            "color": "CONTENT_PRIMARY",
            "backgroundColor": "BACKGROUND_PRIMARY",
            "selectedColor": "CONTENT_PRIMARY",
            "selectedBackgroundColor": "BACKGROUND_PRIMARY"
        },
        "markerContent": {
            "color": "CONTENT_PRIMARY",
            "selectedColor": "CONTENT_INVERSE_PRIMARY",
            "backgroundColor": "BACKGROUND_PRIMARY",
            "selectedBackgroundColor": "BACKGROUND_INVERSE_PRIMARY",
            "text": "3.6",
            "size": "SPACING_UNIT_4X"
        }
    },
    "meta2": null,
    "storyIconPayload": {
        "isIconVisible": false
    },
    "endorsements": null,
    "meta4": null
},
{
    "storeUuid": "bf4caebb-1d09-45b3-a7eb-cd95462dd28b",
    "title": {
        "text": "Taco Bell (11707 Merriman Rd.)"
    },
    "meta": [
        {
            "text": "35–50 min",
            "accessibilityText": "Delivered in 35 to 50 min",
            "badgeType": "ETD"
        }
    ],
    "rating": {
        "text": "4.5",
        "accessibilityText": "Rated 4.5 out of 5 stars based on 42 reviews.",
        "badgeType": "RATINGS"
    },
    "actionUrl": "/store/taco-bell-11707-merriman-rd/v0yuux0JRbOn682VRi3Siw?delivery_type=deliverytype%280%29",
    "favorite": false,
    "image": {
        "items": [
            {
                "url": "https://tb-static.uber.com/prod/image-proc/processed_images/79b91bdc135f716b34725d04b15c6ed4/c9252e6c6cd289c588c3381bc77b1dfc.jpeg",
                "width": 2880,
                "height": 2304
            },
            {
                "url": "https://tb-static.uber.com/prod/image-proc/processed_images/79b91bdc135f716b34725d04b15c6ed4/50446f64f31cbefe66558fc47f50a9d6.jpeg",
                "width": 1080,
                "height": 864
            },
            {
                "url": "https://tb-static.uber.com/prod/image-proc/processed_images/79b91bdc135f716b34725d04b15c6ed4/f3376a06b92224efbe50167fb7cb61e4.jpeg",
                "width": 750,
                "height": 600
            },
            {
                "url": "https://tb-static.uber.com/prod/image-proc/processed_images/79b91bdc135f716b34725d04b15c6ed4/67b1ce06a25a64dc4a71581bb39c36c6.jpeg",
                "width": 640,
                "height": 512
            },
            {
                "url": "https://tb-static.uber.com/prod/image-proc/processed_images/79b91bdc135f716b34725d04b15c6ed4/7915c4a78a9f94ed56316c7c4dc0ec89.jpeg",
                "width": 550,
                "height": 440
            },
            {
                "url": "https://tb-static.uber.com/prod/image-proc/processed_images/79b91bdc135f716b34725d04b15c6ed4/e39556ef1e4c4565bc6c7dbd8b90869c.jpeg",
                "width": 240,
                "height": 192
            }
        ]
    },
    "signposts": null,
    "tracking": {
        "metaInfo": {
            "pluginName": "LowDeliveryFeeV2Plugin",
            "analyticsLabel": "LOW_DELIVERY_FEE_V2_CAROUSEL",
            "verticalType": "",
            "category": "",
            "subcategory": "",
            "surfaceAreaV2": ""
        },
        "storePayload": {
            "storeUUID": "bf4caebb-1d09-45b3-a7eb-cd95462dd28b",
            "isOrderable": true,
            "score": {
                "breakdown": {
                    "ConversionRate_boosting_factor": 1,
                    "FinalScore": 0.0467246173119545,
                    "PredictionScore": 0.0467146173119545,
                    "conversion_rate_partial_score": 0.04186123609542847,
                    "ctr_partial_score": 0.07421711087226868,
                    "net_inflow_boosting_factor": 0,
                    "net_inflow_partial_score": 24.101240335089088,
                    "service_quality_boosting_factor": 0,
                    "service_quality_partial_score": 0.7681123614311218,
                    "t120d_eyeball_count": 2082,
                    "t120d_request_count": 234,
                    "ucb_bandit_boosting_factor": 0,
                    "ucb_bandit_partial_score": 0.10113209131086186
                },
                "total": 0.0467246173119545
            },
            "etdInfo": {
                "dropoffETASec": 2561,
                "dropoffETARange": {
                    "min": 35,
                    "max": 50,
                    "raw": 45
                },
                "minRangeDropoffETASec": 2100,
                "maxRangeDropoffETASec": 3000,
                "etdMode": "PREDICTION"
            },
            "ratingInfo": {
                "storeRatingScore": 4.5,
                "ratingCount": "42"
            },
            "scheduleTimeSlots": null,
            "isDBF": true,
            "storeAvailablityState": "UNKNOWN"
        }
    },
    "mapMarker": {
        "latitude": 42.3695,
        "longitude": -83.353,
        "zIndex": 9978,
        "description": {
            "title": "Taco Bell",
            "color": "CONTENT_PRIMARY",
            "backgroundColor": "BACKGROUND_PRIMARY",
            "selectedColor": "CONTENT_PRIMARY",
            "selectedBackgroundColor": "BACKGROUND_PRIMARY"
        },
        "markerContent": {
            "color": "CONTENT_PRIMARY",
            "selectedColor": "CONTENT_INVERSE_PRIMARY",
            "backgroundColor": "BACKGROUND_PRIMARY",
            "selectedBackgroundColor": "BACKGROUND_INVERSE_PRIMARY",
            "text": "4.5",
            "size": "SPACING_UNIT_4X"
        }
    },
    "meta2": null,
    "storyIconPayload": {
        "isIconVisible": false
    },
    "endorsements": null,
    "meta4": null
},
{
    "storeUuid": "31f203ac-df24-5359-91df-360e0596a15c",
    "title": {
        "text": "Wingstop (25110 EVERGREEN RD)"
    },
    "meta": [
        {
            "text": "35–50 min",
            "accessibilityText": "Delivered in 35 to 50 min",
            "badgeType": "ETD"
        }
    ],
    "rating": {
        "text": "4.0",
        "accessibilityText": "Rated 4.0 out of 5 stars based on more than 100 reviews.",
        "badgeType": "RATINGS"
    },
    "actionUrl": "/store/wingstop-25110-evergreen-rd/MfIDrN8kU1mR3zYOBZahXA?delivery_type=deliverytype%280%29",
    "favorite": false,
    "image": {
        "items": [
            {
                "url": "https://tb-static.uber.com/prod/image-proc/processed_images/ce6073e6d872f49f2ff470909e306ffe/c9252e6c6cd289c588c3381bc77b1dfc.jpeg",
                "width": 2880,
                "height": 2304
            },
            {
                "url": "https://tb-static.uber.com/prod/image-proc/processed_images/ce6073e6d872f49f2ff470909e306ffe/50446f64f31cbefe66558fc47f50a9d6.jpeg",
                "width": 1080,
                "height": 864
            },
            {
                "url": "https://tb-static.uber.com/prod/image-proc/processed_images/ce6073e6d872f49f2ff470909e306ffe/f3376a06b92224efbe50167fb7cb61e4.jpeg",
                "width": 750,
                "height": 600
            },
            {
                "url": "https://tb-static.uber.com/prod/image-proc/processed_images/ce6073e6d872f49f2ff470909e306ffe/67b1ce06a25a64dc4a71581bb39c36c6.jpeg",
                "width": 640,
                "height": 512
            },
            {
                "url": "https://tb-static.uber.com/prod/image-proc/processed_images/ce6073e6d872f49f2ff470909e306ffe/7915c4a78a9f94ed56316c7c4dc0ec89.jpeg",
                "width": 550,
                "height": 440
            },
            {
                "url": "https://tb-static.uber.com/prod/image-proc/processed_images/ce6073e6d872f49f2ff470909e306ffe/e39556ef1e4c4565bc6c7dbd8b90869c.jpeg",
                "width": 240,
                "height": 192
            }
        ]
    },
    "signposts": [
        {
            "backgroundColor": {
                "color": "#0E8345"
            },
            "text": "Free Item (Spend $10)",
            "textColor": {
                "color": "#FFFFFF"
            }
        }
    ],
    "tracking": {
        "metaInfo": {
            "pluginName": "LowDeliveryFeeV2Plugin",
            "analyticsLabel": "LOW_DELIVERY_FEE_V2_CAROUSEL",
            "verticalType": "",
            "category": "",
            "subcategory": "",
            "surfaceAreaV2": ""
        },
        "storePayload": {
            "storeUUID": "31f203ac-df24-5359-91df-360e0596a15c",
            "isOrderable": true,
            "score": {
                "breakdown": {
                    "ConversionRate_boosting_factor": 1,
                    "FinalScore": 0.04642236513853073,
                    "PredictionScore": 0.046412365138530726,
                    "conversion_rate_partial_score": 0.03988540172576904,
                    "ctr_partial_score": 0.0833984911441803,
                    "net_inflow_boosting_factor": 0,
                    "net_inflow_partial_score": 23.671602800267998,
                    "service_quality_boosting_factor": 0,
                    "service_quality_partial_score": 0.7337971329689026,
                    "t120d_eyeball_count": 18394,
                    "t120d_request_count": 2444,
                    "ucb_bandit_boosting_factor": 0,
                    "ucb_bandit_partial_score": 0.0342148971590989
                },
                "total": 0.04642236513853073
            },
            "etdInfo": {
                "dropoffETASec": 2685,
                "dropoffETARange": {
                    "min": 35,
                    "max": 50,
                    "raw": 45
                },
                "minRangeDropoffETASec": 2100,
                "maxRangeDropoffETASec": 3000,
                "etdMode": "PREDICTION"
            },
            "ratingInfo": {
                "storeRatingScore": 3.9731543624161074,
                "ratingCount": "100+"
            },
            "promotionUUID": "b29bcdce-4dc1-4187-9170-5b9eb302123e",
            "scheduleTimeSlots": null,
            "isDBF": true,
            "storeAvailablityState": "NOT_ACCEPTING_ORDERS",
            "offerMetadata": {
                "analyticsUUID": "aa9ecf3a-7bb3-49dd-9292-4e8873c0f05b",
                "promotionUUIDs": [
                    "b29bcdce-4dc1-4187-9170-5b9eb302123e"
                ],
                "offerTypeCount": 1,
                "concatSignpost": "promo.restaurant.free_item_with_min_basket"
            }
        }
    },
    "mapMarker": {
        "latitude": 42.4741,
        "longitude": -83.2402,
        "zIndex": 9977,
        "description": {
            "title": "Wingstop",
            "color": "CONTENT_PRIMARY",
            "backgroundColor": "BACKGROUND_PRIMARY",
            "selectedColor": "CONTENT_PRIMARY",
            "selectedBackgroundColor": "BACKGROUND_PRIMARY"
        },
        "markerContent": {
            "color": "CONTENT_PRIMARY",
            "selectedColor": "CONTENT_INVERSE_PRIMARY",
            "backgroundColor": "BACKGROUND_PRIMARY",
            "selectedBackgroundColor": "BACKGROUND_INVERSE_PRIMARY",
            "text": "4.0",
            "size": "SPACING_UNIT_4X"
        },
        "secondaryMarkerContent": {
            "color": "CONTENT_POSITIVE",
            "selectedColor": "CONTENT_INVERSE_PRIMARY",
            "backgroundColor": "BACKGROUND_PRIMARY",
            "selectedBackgroundColor": "BACKGROUND_POSITIVE",
            "icon": "TAG"
        }
    },
    "meta2": null,
    "storyIconPayload": {
        "isIconVisible": false
    },
    "endorsements": null,
    "meta4": null,
    "promotionConfiguration": {
        "regularPromotionConfiguration": {}
    }
},
{
    "storeUuid": "821d625f-dc3d-4476-bd26-485c48411696",
    "title": {
        "text": "Wendy's  (29480 Wixom Road)"
    },
    "meta": [
        {
            "text": "30–45 min",
            "accessibilityText": "Delivered in 30 to 45 min",
            "badgeType": "ETD"
        }
    ],
    "rating": {
        "text": "4.6",
        "accessibilityText": "A top rated restaurant with 4.6 out of 5 stars based on 27 reviews.",
        "badgeType": "RATINGS"
    },
    "actionUrl": "/store/wendys-29480-wixom-road/gh1iX9w9RHa9JkhcSEEWlg?delivery_type=deliverytype%280%29",
    "favorite": false,
    "image": {
        "items": [
            {
                "url": "https://tb-static.uber.com/prod/image-proc/processed_images/ff47b532d53aca7d4f58f05f29648415/c9252e6c6cd289c588c3381bc77b1dfc.jpeg",
                "width": 2880,
                "height": 2304
            },
            {
                "url": "https://tb-static.uber.com/prod/image-proc/processed_images/ff47b532d53aca7d4f58f05f29648415/50446f64f31cbefe66558fc47f50a9d6.jpeg",
                "width": 1080,
                "height": 864
            },
            {
                "url": "https://tb-static.uber.com/prod/image-proc/processed_images/ff47b532d53aca7d4f58f05f29648415/f3376a06b92224efbe50167fb7cb61e4.jpeg",
                "width": 750,
                "height": 600
            },
            {
                "url": "https://tb-static.uber.com/prod/image-proc/processed_images/ff47b532d53aca7d4f58f05f29648415/67b1ce06a25a64dc4a71581bb39c36c6.jpeg",
                "width": 640,
                "height": 512
            },
            {
                "url": "https://tb-static.uber.com/prod/image-proc/processed_images/ff47b532d53aca7d4f58f05f29648415/7915c4a78a9f94ed56316c7c4dc0ec89.jpeg",
                "width": 550,
                "height": 440
            },
            {
                "url": "https://tb-static.uber.com/prod/image-proc/processed_images/ff47b532d53aca7d4f58f05f29648415/e39556ef1e4c4565bc6c7dbd8b90869c.jpeg",
                "width": 240,
                "height": 192
            }
        ]
    },
    "signposts": null,
    "tracking": {
        "metaInfo": {
            "pluginName": "LowDeliveryFeeV2Plugin",
            "analyticsLabel": "LOW_DELIVERY_FEE_V2_CAROUSEL",
            "verticalType": "",
            "category": "",
            "subcategory": "",
            "surfaceAreaV2": ""
        },
        "storePayload": {
            "storeUUID": "821d625f-dc3d-4476-bd26-485c48411696",
            "isOrderable": true,
            "score": {
                "breakdown": {
                    "ConversionRate_boosting_factor": 1,
                    "FinalScore": 0.039280634949207305,
                    "PredictionScore": 0.0392706349492073,
                    "conversion_rate_partial_score": 0.03524026274681091,
                    "ctr_partial_score": 0.062109410762786865,
                    "net_inflow_boosting_factor": 0,
                    "net_inflow_partial_score": 21.017491818555353,
                    "service_quality_boosting_factor": 0,
                    "service_quality_partial_score": 0.8360072374343872,
                    "t120d_eyeball_count": 3029,
                    "t120d_request_count": 196,
                    "ucb_bandit_boosting_factor": 0,
                    "ucb_bandit_partial_score": 0.09152278911509293
                },
                "total": 0.039280634949207305
            },
            "etdInfo": {
                "dropoffETASec": 2540,
                "dropoffETARange": {
                    "min": 30,
                    "max": 45,
                    "raw": 40
                },
                "minRangeDropoffETASec": 1800,
                "maxRangeDropoffETASec": 2700,
                "etdMode": "PREDICTION"
            },
            "ratingInfo": {
                "storeRatingScore": 4.555555555555555,
                "ratingCount": "27"
            },
            "scheduleTimeSlots": null,
            "isDBF": true,
            "storeAvailablityState": "NOT_ACCEPTING_ORDERS"
        }
    },
    "mapMarker": {
        "latitude": 42.5077,
        "longitude": -83.5362,
        "zIndex": 9976,
        "description": {
            "title": "Wendy's ",
            "color": "CONTENT_PRIMARY",
            "backgroundColor": "BACKGROUND_PRIMARY",
            "selectedColor": "CONTENT_PRIMARY",
            "selectedBackgroundColor": "BACKGROUND_PRIMARY"
        },
        "markerContent": {
            "color": "CONTENT_PRIMARY",
            "selectedColor": "CONTENT_INVERSE_PRIMARY",
            "backgroundColor": "BACKGROUND_PRIMARY",
            "selectedBackgroundColor": "BACKGROUND_INVERSE_PRIMARY",
            "text": "4.6",
            "size": "SPACING_UNIT_4X"
        }
    },
    "meta2": null,
    "storyIconPayload": {
        "isIconVisible": false
    },
    "endorsements": null,
    "meta4": null
},
{
    "storeUuid": "6fc4bdff-f169-4a43-a678-9dc9112583fe",
    "title": {
        "text": "Applebee's (Novi)"
    },
    "meta": [
        {
            "text": "35–50 min",
            "accessibilityText": "Delivered in 35 to 50 min",
            "badgeType": "ETD"
        }
    ],
    "rating": {
        "text": "4.2",
        "accessibilityText": "Rated 4.2 out of 5 stars based on 20 reviews.",
        "badgeType": "RATINGS"
    },
    "actionUrl": "/store/applebees-novi/b8S9__FpSkOmeJ3JESWD_g?delivery_type=deliverytype%280%29",
    "favorite": false,
    "image": {
        "items": [
            {
                "url": "https://tb-static.uber.com/prod/image-proc/processed_images/133650b16862c98bb2455e9463b087de/c9252e6c6cd289c588c3381bc77b1dfc.jpeg",
                "width": 2880,
                "height": 2304
            },
            {
                "url": "https://tb-static.uber.com/prod/image-proc/processed_images/133650b16862c98bb2455e9463b087de/50446f64f31cbefe66558fc47f50a9d6.jpeg",
                "width": 1080,
                "height": 864
            },
            {
                "url": "https://tb-static.uber.com/prod/image-proc/processed_images/133650b16862c98bb2455e9463b087de/f3376a06b92224efbe50167fb7cb61e4.jpeg",
                "width": 750,
                "height": 600
            },
            {
                "url": "https://tb-static.uber.com/prod/image-proc/processed_images/133650b16862c98bb2455e9463b087de/67b1ce06a25a64dc4a71581bb39c36c6.jpeg",
                "width": 640,
                "height": 512
            },
            {
                "url": "https://tb-static.uber.com/prod/image-proc/processed_images/133650b16862c98bb2455e9463b087de/7915c4a78a9f94ed56316c7c4dc0ec89.jpeg",
                "width": 550,
                "height": 440
            },
            {
                "url": "https://tb-static.uber.com/prod/image-proc/processed_images/133650b16862c98bb2455e9463b087de/e39556ef1e4c4565bc6c7dbd8b90869c.jpeg",
                "width": 240,
                "height": 192
            }
        ]
    },
    "signposts": null,
    "tracking": {
        "metaInfo": {
            "pluginName": "LowDeliveryFeeV2Plugin",
            "analyticsLabel": "LOW_DELIVERY_FEE_V2_CAROUSEL",
            "verticalType": "",
            "category": "",
            "subcategory": "",
            "surfaceAreaV2": ""
        },
        "storePayload": {
            "storeUUID": "6fc4bdff-f169-4a43-a678-9dc9112583fe",
            "isOrderable": true,
            "score": {
                "breakdown": {
                    "ConversionRate_boosting_factor": 1,
                    "FinalScore": 0.025128477642536163,
                    "PredictionScore": 0.025118477642536163,
                    "conversion_rate_partial_score": 0.023882269859313965,
                    "ctr_partial_score": 0.03212365508079529,
                    "net_inflow_boosting_factor": 0,
                    "net_inflow_partial_score": 30.296820844727144,
                    "service_quality_boosting_factor": 0,
                    "service_quality_partial_score": 0.8147541284561157,
                    "t120d_eyeball_count": 3612,
                    "t120d_request_count": 196,
                    "ucb_bandit_boosting_factor": 0,
                    "ucb_bandit_partial_score": 0.10482603900834551
                },
                "total": 0.025128477642536163
            },
            "etdInfo": {
                "dropoffETASec": 2775,
                "dropoffETARange": {
                    "min": 35,
                    "max": 50,
                    "raw": 45
                },
                "minRangeDropoffETASec": 2100,
                "maxRangeDropoffETASec": 3000,
                "etdMode": "PREDICTION"
            },
            "ratingInfo": {
                "storeRatingScore": 4.15,
                "ratingCount": "20"
            },
            "scheduleTimeSlots": null,
            "isDBF": true,
            "storeAvailablityState": "NOT_ACCEPTING_ORDERS"
        }
    },
    "mapMarker": {
        "latitude": 42.4914,
        "longitude": -83.5204,
        "zIndex": 9975,
        "description": {
            "title": "Applebee's",
            "color": "CONTENT_PRIMARY",
            "backgroundColor": "BACKGROUND_PRIMARY",
            "selectedColor": "CONTENT_PRIMARY",
            "selectedBackgroundColor": "BACKGROUND_PRIMARY"
        },
        "markerContent": {
            "color": "CONTENT_PRIMARY",
            "selectedColor": "CONTENT_INVERSE_PRIMARY",
            "backgroundColor": "BACKGROUND_PRIMARY",
            "selectedBackgroundColor": "BACKGROUND_INVERSE_PRIMARY",
            "text": "4.2",
            "size": "SPACING_UNIT_4X"
        }
    },
    "meta2": null,
    "storyIconPayload": {
        "isIconVisible": false
    },
    "endorsements": null,
    "meta4": null
},
{
    "storeUuid": "05546b5c-0315-43cb-a705-5892139f5580",
    "title": {
        "text": "Arby's (23081 Greenfield Rd)"
    },
    "meta": [
        {
            "text": "25–40 min",
            "accessibilityText": "Delivered in 25 to 40 min",
            "badgeType": "ETD"
        }
    ],
    "rating": {
        "text": "4.0",
        "accessibilityText": "Rated 4.0 out of 5 stars based on 85 reviews.",
        "badgeType": "RATINGS"
    },
    "actionUrl": "/store/arbys-23081-greenfield-rd/BVRrXAMVQ8unBViSE59VgA?delivery_type=deliverytype%280%29",
    "favorite": false,
    "image": {
        "items": [
            {
                "url": "https://tb-static.uber.com/prod/image-proc/processed_images/d988803b3ab3b1e5fcaa46f6a40771ef/c9252e6c6cd289c588c3381bc77b1dfc.jpeg",
                "width": 2880,
                "height": 2304
            },
            {
                "url": "https://tb-static.uber.com/prod/image-proc/processed_images/d988803b3ab3b1e5fcaa46f6a40771ef/50446f64f31cbefe66558fc47f50a9d6.jpeg",
                "width": 1080,
                "height": 864
            },
            {
                "url": "https://tb-static.uber.com/prod/image-proc/processed_images/d988803b3ab3b1e5fcaa46f6a40771ef/f3376a06b92224efbe50167fb7cb61e4.jpeg",
                "width": 750,
                "height": 600
            },
            {
                "url": "https://tb-static.uber.com/prod/image-proc/processed_images/d988803b3ab3b1e5fcaa46f6a40771ef/67b1ce06a25a64dc4a71581bb39c36c6.jpeg",
                "width": 640,
                "height": 512
            },
            {
                "url": "https://tb-static.uber.com/prod/image-proc/processed_images/d988803b3ab3b1e5fcaa46f6a40771ef/7915c4a78a9f94ed56316c7c4dc0ec89.jpeg",
                "width": 550,
                "height": 440
            },
            {
                "url": "https://tb-static.uber.com/prod/image-proc/processed_images/d988803b3ab3b1e5fcaa46f6a40771ef/e39556ef1e4c4565bc6c7dbd8b90869c.jpeg",
                "width": 240,
                "height": 192
            }
        ]
    },
    "signposts": [
        {
            "backgroundColor": {
                "color": "#0E8345"
            },
            "text": "Spend US$15, Save US$3",
            "textColor": {
                "color": "#FFFFFF"
            }
        }
    ],
    "tracking": {
        "metaInfo": {
            "pluginName": "LowDeliveryFeeV2Plugin",
            "analyticsLabel": "LOW_DELIVERY_FEE_V2_CAROUSEL",
            "verticalType": "",
            "category": "",
            "subcategory": "",
            "surfaceAreaV2": ""
        },
        "storePayload": {
            "storeUUID": "05546b5c-0315-43cb-a705-5892139f5580",
            "isOrderable": true,
            "score": {
                "breakdown": {
                    "ConversionRate_boosting_factor": 1,
                    "FinalScore": 0.01955832673072815,
                    "PredictionScore": 0.01954832673072815,
                    "conversion_rate_partial_score": 0.016923516988754272,
                    "ctr_partial_score": 0.03442224860191345,
                    "net_inflow_boosting_factor": 0,
                    "net_inflow_partial_score": 23.49911782766057,
                    "service_quality_boosting_factor": 0,
                    "service_quality_partial_score": 0.7703388929367065,
                    "t120d_eyeball_count": 16814,
                    "t120d_request_count": 627,
                    "ucb_bandit_boosting_factor": 0,
                    "ucb_bandit_partial_score": 0.05514011517916701
                },
                "total": 0.01955832673072815
            },
            "etdInfo": {
                "dropoffETASec": 2231,
                "dropoffETARange": {
                    "min": 25,
                    "max": 40,
                    "raw": 35
                },
                "minRangeDropoffETASec": 1500,
                "maxRangeDropoffETASec": 2400,
                "etdMode": "PREDICTION"
            },
            "ratingInfo": {
                "storeRatingScore": 3.976470588235294,
                "ratingCount": "85"
            },
            "promotionUUID": "1efd0c7a-3bb7-4d2d-b237-8a65331f509e",
            "scheduleTimeSlots": null,
            "isDBF": true,
            "storeAvailablityState": "UNKNOWN",
            "offerMetadata": {
                "analyticsUUID": "b18b1f44-5c7e-4db6-9a46-be2b880df6c1",
                "promotionUUIDs": [
                    "1efd0c7a-3bb7-4d2d-b237-8a65331f509e"
                ],
                "offerTypeCount": 1,
                "concatSignpost": "store_promotion_badge"
            }
        }
    },
    "mapMarker": {
        "latitude": 42.4606,
        "longitude": -83.2017,
        "zIndex": 9974,
        "description": {
            "title": "Arby's",
            "color": "CONTENT_PRIMARY",
            "backgroundColor": "BACKGROUND_PRIMARY",
            "selectedColor": "CONTENT_PRIMARY",
            "selectedBackgroundColor": "BACKGROUND_PRIMARY"
        },
        "markerContent": {
            "color": "CONTENT_PRIMARY",
            "selectedColor": "CONTENT_INVERSE_PRIMARY",
            "backgroundColor": "BACKGROUND_PRIMARY",
            "selectedBackgroundColor": "BACKGROUND_INVERSE_PRIMARY",
            "text": "4.0",
            "size": "SPACING_UNIT_4X"
        },
        "secondaryMarkerContent": {
            "color": "CONTENT_POSITIVE",
            "selectedColor": "CONTENT_INVERSE_PRIMARY",
            "backgroundColor": "BACKGROUND_PRIMARY",
            "selectedBackgroundColor": "BACKGROUND_POSITIVE",
            "icon": "TAG"
        }
    },
    "meta2": null,
    "storyIconPayload": {
        "isIconVisible": false
    },
    "endorsements": null,
    "meta4": null,
    "promotionConfiguration": {
        "regularPromotionConfiguration": {}
    }
},
{
    "storeUuid": "5ea8b954-44db-5dac-9d57-ac77309a55bc",
    "title": {
        "text": "Wing Snob (Commerce Twp)"
    },
    "meta": [
        {
            "text": "35–50 min",
            "accessibilityText": "Delivered in 35 to 50 min",
            "badgeType": "ETD"
        }
    ],
    "rating": {
        "text": "4.5",
        "accessibilityText": "A top rated restaurant with 4.5 out of 5 stars based on 26 reviews.",
        "badgeType": "RATINGS"
    },
    "actionUrl": "/store/wing-snob-commerce-twp/Xqi5VETbXaydV6x3MJpVvA?delivery_type=deliverytype%280%29",
    "favorite": false,
    "image": {
        "items": [
            {
                "url": "https://tb-static.uber.com/prod/image-proc/processed_images/0bff135d365a644f27870c0871ad9ab5/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg",
                "width": 2880,
                "height": 2304
            },
            {
                "url": "https://tb-static.uber.com/prod/image-proc/processed_images/0bff135d365a644f27870c0871ad9ab5/719c6bd2757b08684c0faae44d43159d.jpeg",
                "width": 1080,
                "height": 864
            },
            {
                "url": "https://tb-static.uber.com/prod/image-proc/processed_images/0bff135d365a644f27870c0871ad9ab5/93b5fd796682c6d5302cd5bec164fe90.jpeg",
                "width": 750,
                "height": 600
            },
            {
                "url": "https://tb-static.uber.com/prod/image-proc/processed_images/0bff135d365a644f27870c0871ad9ab5/97e6648b3593c29cb4a6335f976e6d84.jpeg",
                "width": 640,
                "height": 512
            },
            {
                "url": "https://tb-static.uber.com/prod/image-proc/processed_images/0bff135d365a644f27870c0871ad9ab5/a70f5c9df440d10213e93244e9eb7cad.jpeg",
                "width": 550,
                "height": 440
            },
            {
                "url": "https://tb-static.uber.com/prod/image-proc/processed_images/0bff135d365a644f27870c0871ad9ab5/97ef7458dde62fa918635bc21265d9f5.jpeg",
                "width": 240,
                "height": 192
            }
        ]
    },
    "signposts": [
        {
            "backgroundColor": {
                "color": "#0E8345"
            },
            "text": "Spend US$35, Save US$5",
            "textColor": {
                "color": "#FFFFFF"
            }
        }
    ],
    "tracking": {
        "metaInfo": {
            "pluginName": "LowDeliveryFeeV2Plugin",
            "analyticsLabel": "LOW_DELIVERY_FEE_V2_CAROUSEL",
            "verticalType": "",
            "category": "",
            "subcategory": "",
            "surfaceAreaV2": ""
        },
        "storePayload": {
            "storeUUID": "5ea8b954-44db-5dac-9d57-ac77309a55bc",
            "isOrderable": true,
            "score": {
                "breakdown": {
                    "ConversionRate_boosting_factor": 1,
                    "FinalScore": 0.01788188947200775,
                    "PredictionScore": 0.01787188947200775,
                    "conversion_rate_partial_score": 0.015462309122085571,
                    "ctr_partial_score": 0.03152617812156677,
                    "net_inflow_boosting_factor": 0,
                    "net_inflow_partial_score": 25.158758250567857,
                    "service_quality_boosting_factor": 0,
                    "service_quality_partial_score": 0.8046477437019348,
                    "t120d_eyeball_count": 6820,
                    "t120d_request_count": 319,
                    "ucb_bandit_boosting_factor": 0,
                    "ucb_bandit_partial_score": 0.09050501035069247
                },
                "total": 0.01788188947200775
            },
            "etdInfo": {
                "dropoffETASec": 2571,
                "dropoffETARange": {
                    "min": 35,
                    "max": 50,
                    "raw": 45
                },
                "minRangeDropoffETASec": 2100,
                "maxRangeDropoffETASec": 3000,
                "etdMode": "PREDICTION"
            },
            "ratingInfo": {
                "storeRatingScore": 4.538461538461538,
                "ratingCount": "26"
            },
            "promotionUUID": "0ae2d5e8-b5b3-4311-bbf1-8d2c11b4199c",
            "scheduleTimeSlots": null,
            "isDBF": true,
            "storeAvailablityState": "UNKNOWN",
            "offerMetadata": {
                "analyticsUUID": "452072d3-994e-41b0-b0e6-9aeec54026ae",
                "promotionUUIDs": [
                    "0ae2d5e8-b5b3-4311-bbf1-8d2c11b4199c"
                ],
                "offerTypeCount": 1,
                "concatSignpost": "store_promotion_badge"
            }
        }
    },
    "mapMarker": {
        "latitude": 42.5417,
        "longitude": -83.4589,
        "zIndex": 9973,
        "description": {
            "title": "Wing Snob",
            "color": "CONTENT_PRIMARY",
            "backgroundColor": "BACKGROUND_PRIMARY",
            "selectedColor": "CONTENT_PRIMARY",
            "selectedBackgroundColor": "BACKGROUND_PRIMARY"
        },
        "markerContent": {
            "color": "CONTENT_PRIMARY",
            "selectedColor": "CONTENT_INVERSE_PRIMARY",
            "backgroundColor": "BACKGROUND_PRIMARY",
            "selectedBackgroundColor": "BACKGROUND_INVERSE_PRIMARY",
            "text": "4.5",
            "size": "SPACING_UNIT_4X"
        },
        "secondaryMarkerContent": {
            "color": "CONTENT_POSITIVE",
            "selectedColor": "CONTENT_INVERSE_PRIMARY",
            "backgroundColor": "BACKGROUND_PRIMARY",
            "selectedBackgroundColor": "BACKGROUND_POSITIVE",
            "icon": "TAG"
        }
    },
    "meta2": null,
    "storyIconPayload": {
        "isIconVisible": false
    },
    "endorsements": null,
    "meta4": null,
    "promotionConfiguration": {
        "regularPromotionConfiguration": {}
    }
},
{
    "storeUuid": "4e6db91e-7ae1-5dac-9d9d-263b738bfdcf",
    "title": {
        "text": "Cottage Inn Pizza Novi (41758 W. 10 Mile Rd)"
    },
    "meta": [
        {
            "text": "15–35 min",
            "accessibilityText": "Delivered in 15 to 35 min",
            "badgeType": "ETD"
        }
    ],
    "rating": {
        "text": "4.3",
        "accessibilityText": "Rated 4.3 out of 5 stars based on 30 reviews.",
        "badgeType": "RATINGS"
    },
    "actionUrl": "/store/cottage-inn-pizza-novi-41758-w-10-mile-rd/Tm25HnrhXaydnSY7c4v9zw?delivery_type=deliverytype%280%29",
    "favorite": false,
    "image": {
        "items": [
            {
                "url": "https://d1ralsognjng37.cloudfront.net/8e085bb2-b768-42ab-a20d-2b807343d71d.jpeg",
                "width": 2880,
                "height": 2304
            },
            {
                "url": "https://d1ralsognjng37.cloudfront.net/7d222c9c-1f00-4316-a044-0267070f1040.jpeg",
                "width": 1080,
                "height": 864
            },
            {
                "url": "https://d1ralsognjng37.cloudfront.net/7e3234f6-5008-4c0c-8774-259c3d6f6694.jpeg",
                "width": 750,
                "height": 600
            },
            {
                "url": "https://d1ralsognjng37.cloudfront.net/32536baa-4583-4716-a286-829b3f5c4b21.jpeg",
                "width": 640,
                "height": 512
            },
            {
                "url": "https://d1ralsognjng37.cloudfront.net/71cd926d-759c-4e56-ac8e-cdf369ecaa33.jpeg",
                "width": 550,
                "height": 440
            },
            {
                "url": "https://d1ralsognjng37.cloudfront.net/cc4b18ed-9447-49b1-8852-d861fb8b3f74.jpeg",
                "width": 240,
                "height": 192
            }
        ]
    },
    "signposts": [
        {
            "backgroundColor": {
                "color": "#0E8345"
            },
            "iconUrl": "https://cn-geo1.uber.com/static/mobile-content/offers/trophy.png",
            "text": " Top Offer • 4 Offers Available",
            "textColor": {
                "color": "#FFFFFF"
            },
            "textFormat": "<span><img src=\"https://cn-geo1.uber.com/static/mobile-content/offers/trophy.png\" width=\"10\" height=\"11\" vertical-align=\"middle\"/> Top Offer • 4 Offers Available</span>"
        }
    ],
    "tracking": {
        "metaInfo": {
            "pluginName": "LowDeliveryFeeV2Plugin",
            "analyticsLabel": "LOW_DELIVERY_FEE_V2_CAROUSEL",
            "verticalType": "",
            "category": "",
            "subcategory": "",
            "surfaceAreaV2": ""
        },
        "storePayload": {
            "storeUUID": "4e6db91e-7ae1-5dac-9d9d-263b738bfdcf",
            "isOrderable": true,
            "score": {
                "breakdown": {
                    "ConversionRate_boosting_factor": 1,
                    "FinalScore": 0.01576822979211807,
                    "PredictionScore": 0.01575822979211807,
                    "conversion_rate_partial_score": 0.014711529016494751,
                    "ctr_partial_score": 0.021689534187316895,
                    "net_inflow_boosting_factor": 0,
                    "net_inflow_partial_score": 30.807836776366894,
                    "service_quality_boosting_factor": 0,
                    "service_quality_partial_score": 0.8092348575592041,
                    "t120d_eyeball_count": 5220,
                    "t120d_request_count": 387,
                    "ucb_bandit_boosting_factor": 0,
                    "ucb_bandit_partial_score": 0.110142245260996
                },
                "total": 0.01576822979211807
            },
            "etdInfo": {
                "dropoffETASec": 831,
                "dropoffETARange": {
                    "min": 15,
                    "max": 35,
                    "raw": 15
                },
                "minRangeDropoffETASec": 900,
                "maxRangeDropoffETASec": 2100,
                "etdMode": "PREDICTION"
            },
            "ratingInfo": {
                "storeRatingScore": 4.266666666666667,
                "ratingCount": "30"
            },
            "promotionUUID": "5a244f20-7c97-4e34-bbcf-402a95a65f85",
            "scheduleTimeSlots": null,
            "isDBF": true,
            "storeAvailablityState": "UNKNOWN",
            "offerMetadata": {
                "analyticsUUID": "1fc600a7-4142-4f57-aea8-3442ce05a1df",
                "promotionUUIDs": [
                    "5a244f20-7c97-4e34-bbcf-402a95a65f85",
                    "ddf610ff-a1f9-4fb1-ab0b-d258deb81287",
                    "94e6e251-5304-4e39-8a7c-b1c44ebbe2be",
                    "d6e8ae18-2f87-4c84-bd7b-d2f125eea7ee",
                    "1dfda219-91fc-4716-851d-ad072f4438e6",
                    "f5913d29-6d01-49de-98c8-10da07f89667",
                    "e72c7074-d4a1-4ecb-84d5-cb5577785b7b"
                ],
                "offerTypeCount": 4,
                "concatSignpost": "offer_quality.top_offer,concurrent_offer.signpost.num.of.offers.available"
            }
        }
    },
    "mapMarker": {
        "latitude": 42.4688,
        "longitude": -83.4572,
        "zIndex": 9972,
        "description": {
            "title": "Cottage Inn Pizza Novi",
            "color": "CONTENT_PRIMARY",
            "backgroundColor": "BACKGROUND_PRIMARY",
            "selectedColor": "CONTENT_PRIMARY",
            "selectedBackgroundColor": "BACKGROUND_PRIMARY"
        },
        "markerContent": {
            "color": "CONTENT_PRIMARY",
            "selectedColor": "CONTENT_INVERSE_PRIMARY",
            "backgroundColor": "BACKGROUND_PRIMARY",
            "selectedBackgroundColor": "BACKGROUND_INVERSE_PRIMARY",
            "text": "4.3",
            "size": "SPACING_UNIT_4X"
        },
        "secondaryMarkerContent": {
            "color": "CONTENT_POSITIVE",
            "selectedColor": "CONTENT_INVERSE_PRIMARY",
            "backgroundColor": "BACKGROUND_PRIMARY",
            "selectedBackgroundColor": "BACKGROUND_POSITIVE",
            "icon": "TAG"
        }
    },
    "meta2": null,
    "storyIconPayload": {
        "isIconVisible": false
    },
    "endorsements": null,
    "meta4": null,
    "promotionConfiguration": {
        "regularPromotionConfiguration": {}
    }
},
{
    "storeUuid": "1ad13d0d-8f01-42a9-872f-e2e5d25cdeac",
    "title": {
        "text": "Dunkin' (28777 Northwestern Highway)"
    },
    "meta": [
        {
            "text": "20–35 min",
            "accessibilityText": "Delivered in 20 to 35 min",
            "badgeType": "ETD"
        }
    ],
    "rating": {
        "text": "4.2",
        "accessibilityText": "Rated 4.2 out of 5 stars based on 26 reviews.",
        "badgeType": "RATINGS"
    },
    "actionUrl": "/store/dunkin-28777-northwestern-highway/GtE9DY8BQqmHL-Ll0lzerA?delivery_type=deliverytype%280%29",
    "favorite": false,
    "image": {
        "items": [
            {
                "url": "https://tb-static.uber.com/prod/image-proc/processed_images/df2de7977509b3697cd12d679c8571c2/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg",
                "width": 2880,
                "height": 2304
            },
            {
                "url": "https://tb-static.uber.com/prod/image-proc/processed_images/df2de7977509b3697cd12d679c8571c2/719c6bd2757b08684c0faae44d43159d.jpeg",
                "width": 1080,
                "height": 864
            },
            {
                "url": "https://tb-static.uber.com/prod/image-proc/processed_images/df2de7977509b3697cd12d679c8571c2/93b5fd796682c6d5302cd5bec164fe90.jpeg",
                "width": 750,
                "height": 600
            },
            {
                "url": "https://tb-static.uber.com/prod/image-proc/processed_images/df2de7977509b3697cd12d679c8571c2/97e6648b3593c29cb4a6335f976e6d84.jpeg",
                "width": 640,
                "height": 512
            },
            {
                "url": "https://tb-static.uber.com/prod/image-proc/processed_images/df2de7977509b3697cd12d679c8571c2/a70f5c9df440d10213e93244e9eb7cad.jpeg",
                "width": 550,
                "height": 440
            },
            {
                "url": "https://tb-static.uber.com/prod/image-proc/processed_images/df2de7977509b3697cd12d679c8571c2/97ef7458dde62fa918635bc21265d9f5.jpeg",
                "width": 240,
                "height": 192
            }
        ]
    },
    "signposts": [
        {
            "backgroundColor": {
                "color": "#0E8345"
            },
            "text": "Spend US$15, Save US$3",
            "textColor": {
                "color": "#FFFFFF"
            }
        }
    ],
    "tracking": {
        "metaInfo": {
            "pluginName": "LowDeliveryFeeV2Plugin",
            "analyticsLabel": "LOW_DELIVERY_FEE_V2_CAROUSEL",
            "verticalType": "",
            "category": "",
            "subcategory": "",
            "surfaceAreaV2": ""
        },
        "storePayload": {
            "storeUUID": "1ad13d0d-8f01-42a9-872f-e2e5d25cdeac",
            "isOrderable": true,
            "score": {
                "breakdown": {
                    "ConversionRate_boosting_factor": 1,
                    "FinalScore": 0.015012615749835968,
                    "PredictionScore": 0.015002615749835968,
                    "conversion_rate_partial_score": 0.013523310422897339,
                    "ctr_partial_score": 0.023385345935821533,
                    "net_inflow_boosting_factor": 0,
                    "net_inflow_partial_score": 19.500035407829223,
                    "service_quality_boosting_factor": 0,
                    "service_quality_partial_score": 0.8336756229400635,
                    "t120d_eyeball_count": 2874,
                    "t120d_request_count": 125,
                    "ucb_bandit_boosting_factor": 0,
                    "ucb_bandit_partial_score": 0.1520000035788442
                },
                "total": 0.015012615749835968
            },
            "etdInfo": {
                "dropoffETASec": 1708,
                "dropoffETARange": {
                    "min": 20,
                    "max": 35,
                    "raw": 30
                },
                "minRangeDropoffETASec": 1200,
                "maxRangeDropoffETASec": 2100,
                "etdMode": "PREDICTION"
            },
            "ratingInfo": {
                "storeRatingScore": 4.1923076923076925,
                "ratingCount": "26"
            },
            "promotionUUID": "19263867-abc0-41b3-861e-fc5f054201b3",
            "scheduleTimeSlots": null,
            "isDBF": true,
            "storeAvailablityState": "UNKNOWN",
            "offerMetadata": {
                "analyticsUUID": "bd18efd3-5c38-4387-a6ae-b38c7619328d",
                "promotionUUIDs": [
                    "19263867-abc0-41b3-861e-fc5f054201b3"
                ],
                "offerTypeCount": 1,
                "concatSignpost": "store_promotion_badge"
            }
        }
    },
    "mapMarker": {
        "latitude": 42.4987,
        "longitude": -83.3054,
        "zIndex": 9971,
        "description": {
            "title": "Dunkin'",
            "color": "CONTENT_PRIMARY",
            "backgroundColor": "BACKGROUND_PRIMARY",
            "selectedColor": "CONTENT_PRIMARY",
            "selectedBackgroundColor": "BACKGROUND_PRIMARY"
        },
        "markerContent": {
            "color": "CONTENT_PRIMARY",
            "selectedColor": "CONTENT_INVERSE_PRIMARY",
            "backgroundColor": "BACKGROUND_PRIMARY",
            "selectedBackgroundColor": "BACKGROUND_INVERSE_PRIMARY",
            "text": "4.2",
            "size": "SPACING_UNIT_4X"
        },
        "secondaryMarkerContent": {
            "color": "CONTENT_POSITIVE",
            "selectedColor": "CONTENT_INVERSE_PRIMARY",
            "backgroundColor": "BACKGROUND_PRIMARY",
            "selectedBackgroundColor": "BACKGROUND_POSITIVE",
            "icon": "TAG"
        }
    },
    "meta2": null,
    "storyIconPayload": {
        "isIconVisible": false
    },
    "endorsements": null,
    "meta4": null,
    "promotionConfiguration": {
        "regularPromotionConfiguration": {}
    }
},
{
    "storeUuid": "eb04e5ea-f921-4d69-867a-a66171ae5636",
    "title": {
        "text": "BJ's Restaurant & Brewhouse (Livonia #611)"
    },
    "meta": [
        {
            "text": "35–50 min",
            "accessibilityText": "Delivered in 35 to 50 min",
            "badgeType": "ETD"
        }
    ],
    "rating": {
        "text": "4.5",
        "accessibilityText": "Rated 4.5 out of 5 stars based on 30 reviews.",
        "badgeType": "RATINGS"
    },
    "actionUrl": "/store/bjs-restaurant-%26-brewhouse-livonia-%23611/6wTl6vkhTWmGeqZhca5WNg?delivery_type=deliverytype%280%29",
    "favorite": false,
    "image": {
        "items": [
            {
                "url": "https://tb-static.uber.com/prod/image-proc/processed_images/4e7743d5d4ed6b336cc35b98e43b08ec/c9252e6c6cd289c588c3381bc77b1dfc.jpeg",
                "width": 2878,
                "height": 2303
            },
            {
                "url": "https://tb-static.uber.com/prod/image-proc/processed_images/4e7743d5d4ed6b336cc35b98e43b08ec/50446f64f31cbefe66558fc47f50a9d6.jpeg",
                "width": 1080,
                "height": 864
            },
            {
                "url": "https://tb-static.uber.com/prod/image-proc/processed_images/4e7743d5d4ed6b336cc35b98e43b08ec/f3376a06b92224efbe50167fb7cb61e4.jpeg",
                "width": 750,
                "height": 600
            },
            {
                "url": "https://tb-static.uber.com/prod/image-proc/processed_images/4e7743d5d4ed6b336cc35b98e43b08ec/67b1ce06a25a64dc4a71581bb39c36c6.jpeg",
                "width": 640,
                "height": 512
            },
            {
                "url": "https://tb-static.uber.com/prod/image-proc/processed_images/4e7743d5d4ed6b336cc35b98e43b08ec/7915c4a78a9f94ed56316c7c4dc0ec89.jpeg",
                "width": 550,
                "height": 440
            },
            {
                "url": "https://tb-static.uber.com/prod/image-proc/processed_images/4e7743d5d4ed6b336cc35b98e43b08ec/e39556ef1e4c4565bc6c7dbd8b90869c.jpeg",
                "width": 240,
                "height": 192
            }
        ]
    },
    "signposts": null,
    "tracking": {
        "metaInfo": {
            "pluginName": "LowDeliveryFeeV2Plugin",
            "analyticsLabel": "LOW_DELIVERY_FEE_V2_CAROUSEL",
            "verticalType": "",
            "category": "",
            "subcategory": "",
            "surfaceAreaV2": ""
        },
        "storePayload": {
            "storeUUID": "eb04e5ea-f921-4d69-867a-a66171ae5636",
            "isOrderable": true,
            "score": {
                "breakdown": {
                    "ConversionRate_boosting_factor": 1,
                    "FinalScore": 0.01354943943977356,
                    "PredictionScore": 0.01353943943977356,
                    "conversion_rate_partial_score": 0.01265069842338562,
                    "ctr_partial_score": 0.01857563853263855,
                    "net_inflow_boosting_factor": 0,
                    "net_inflow_partial_score": 32.472140477616115,
                    "service_quality_boosting_factor": 0,
                    "service_quality_partial_score": 0.8592871427536011,
                    "t120d_eyeball_count": 3255,
                    "t120d_request_count": 219,
                    "ucb_bandit_boosting_factor": 0,
                    "ucb_bandit_partial_score": 0.15038051499232544
                },
                "total": 0.01354943943977356
            },
            "etdInfo": {
                "dropoffETASec": 2751,
                "dropoffETARange": {
                    "min": 35,
                    "max": 50,
                    "raw": 45
                },
                "minRangeDropoffETASec": 2100,
                "maxRangeDropoffETASec": 3000,
                "etdMode": "PREDICTION"
            },
            "ratingInfo": {
                "storeRatingScore": 4.5,
                "ratingCount": "30"
            },
            "scheduleTimeSlots": null,
            "isDBF": true,
            "storeAvailablityState": "UNKNOWN"
        }
    },
    "mapMarker": {
        "latitude": 42.4278,
        "longitude": -83.4326,
        "zIndex": 9970,
        "description": {
            "title": "BJ's Restaurant & Brewhouse",
            "color": "CONTENT_PRIMARY",
            "backgroundColor": "BACKGROUND_PRIMARY",
            "selectedColor": "CONTENT_PRIMARY",
            "selectedBackgroundColor": "BACKGROUND_PRIMARY"
        },
        "markerContent": {
            "color": "CONTENT_PRIMARY",
            "selectedColor": "CONTENT_INVERSE_PRIMARY",
            "backgroundColor": "BACKGROUND_PRIMARY",
            "selectedBackgroundColor": "BACKGROUND_INVERSE_PRIMARY",
            "text": "4.5",
            "size": "SPACING_UNIT_4X"
        }
    },
    "meta2": null,
    "storyIconPayload": {
        "isIconVisible": false
    },
    "endorsements": null,
    "meta4": null
},
{
    "storeUuid": "424c1c63-5159-5e43-9df0-96154bd275ab",
    "title": {
        "text": "Lefty's Cheesesteaks (Southfield)"
    },
    "meta": [
        {
            "text": "25–40 min",
            "accessibilityText": "Delivered in 25 to 40 min",
            "badgeType": "ETD"
        }
    ],
    "rating": {
        "text": "3.7",
        "accessibilityText": "Rated 3.7 out of 5 stars based on 44 reviews.",
        "badgeType": "RATINGS"
    },
    "actionUrl": "/store/leftys-cheesesteaks-southfield/QkwcY1FZXkOd8JYVS9J1qw?delivery_type=deliverytype%280%29",
    "favorite": false,
    "image": {
        "items": [
            {
                "url": "https://tb-static.uber.com/prod/image-proc/processed_images/b29c324c59c66611e3fc4f9d1614e17b/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg",
                "width": 2880,
                "height": 2304
            },
            {
                "url": "https://tb-static.uber.com/prod/image-proc/processed_images/b29c324c59c66611e3fc4f9d1614e17b/719c6bd2757b08684c0faae44d43159d.jpeg",
                "width": 1080,
                "height": 864
            },
            {
                "url": "https://tb-static.uber.com/prod/image-proc/processed_images/b29c324c59c66611e3fc4f9d1614e17b/93b5fd796682c6d5302cd5bec164fe90.jpeg",
                "width": 750,
                "height": 600
            },
            {
                "url": "https://tb-static.uber.com/prod/image-proc/processed_images/b29c324c59c66611e3fc4f9d1614e17b/97e6648b3593c29cb4a6335f976e6d84.jpeg",
                "width": 640,
                "height": 512
            },
            {
                "url": "https://tb-static.uber.com/prod/image-proc/processed_images/b29c324c59c66611e3fc4f9d1614e17b/a70f5c9df440d10213e93244e9eb7cad.jpeg",
                "width": 550,
                "height": 440
            },
            {
                "url": "https://tb-static.uber.com/prod/image-proc/processed_images/b29c324c59c66611e3fc4f9d1614e17b/97ef7458dde62fa918635bc21265d9f5.jpeg",
                "width": 240,
                "height": 192
            }
        ]
    },
    "signposts": null,
    "tracking": {
        "metaInfo": {
            "pluginName": "LowDeliveryFeeV2Plugin",
            "analyticsLabel": "LOW_DELIVERY_FEE_V2_CAROUSEL",
            "verticalType": "",
            "category": "",
            "subcategory": "",
            "surfaceAreaV2": ""
        },
        "storePayload": {
            "storeUUID": "424c1c63-5159-5e43-9df0-96154bd275ab",
            "isOrderable": true,
            "score": {
                "breakdown": {
                    "ConversionRate_boosting_factor": 1,
                    "FinalScore": 0.013372714648246764,
                    "PredictionScore": 0.013362714648246765,
                    "conversion_rate_partial_score": 0.011202096939086914,
                    "ctr_partial_score": 0.025606215000152588,
                    "net_inflow_boosting_factor": 0,
                    "net_inflow_partial_score": 25.72211938441885,
                    "service_quality_boosting_factor": 0,
                    "service_quality_partial_score": 0.7569064497947693,
                    "t120d_eyeball_count": 9322,
                    "t120d_request_count": 426,
                    "ucb_bandit_boosting_factor": 0,
                    "ucb_bandit_partial_score": 0.089545140014528
                },
                "total": 0.013372714648246764
            },
            "etdInfo": {
                "dropoffETASec": 1986,
                "dropoffETARange": {
                    "min": 25,
                    "max": 40,
                    "raw": 35
                },
                "minRangeDropoffETASec": 1500,
                "maxRangeDropoffETASec": 2400,
                "etdMode": "PREDICTION"
            },
            "ratingInfo": {
                "storeRatingScore": 3.727272727272727,
                "ratingCount": "44"
            },
            "scheduleTimeSlots": null,
            "isDBF": true,
            "storeAvailablityState": "NOT_ACCEPTING_ORDERS"
        }
    },
    "mapMarker": {
        "latitude": 42.4842,
        "longitude": -83.2416,
        "zIndex": 9969,
        "description": {
            "title": "Lefty's Cheesesteaks",
            "color": "CONTENT_PRIMARY",
            "backgroundColor": "BACKGROUND_PRIMARY",
            "selectedColor": "CONTENT_PRIMARY",
            "selectedBackgroundColor": "BACKGROUND_PRIMARY"
        },
        "markerContent": {
            "color": "CONTENT_PRIMARY",
            "selectedColor": "CONTENT_INVERSE_PRIMARY",
            "backgroundColor": "BACKGROUND_PRIMARY",
            "selectedBackgroundColor": "BACKGROUND_INVERSE_PRIMARY",
            "text": "3.7",
            "size": "SPACING_UNIT_4X"
        }
    },
    "meta2": null,
    "storyIconPayload": {
        "isIconVisible": false
    },
    "endorsements": null,
    "meta4": null
},
{
    "storeUuid": "b5a6e786-b14c-5a50-842d-40418e1f5b55",
    "title": {
        "text": "Savvy Sliders (Redford)"
    },
    "meta": [
        {
            "text": "30–45 min",
            "accessibilityText": "Delivered in 30 to 45 min",
            "badgeType": "ETD"
        }
    ],
    "rating": {
        "text": "4.4",
        "accessibilityText": "Rated 4.4 out of 5 stars based on 67 reviews.",
        "badgeType": "RATINGS"
    },
    "actionUrl": "/store/savvy-sliders-redford/tabnhrFMWlCELUBBjh9bVQ?delivery_type=deliverytype%280%29",
    "favorite": false,
    "image": {
        "items": [
            {
                "url": "https://tb-static.uber.com/prod/image-proc/processed_images/c0a259d1590167d8f95167e0b26f71f4/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg",
                "width": 2880,
                "height": 2304
            },
            {
                "url": "https://tb-static.uber.com/prod/image-proc/processed_images/c0a259d1590167d8f95167e0b26f71f4/719c6bd2757b08684c0faae44d43159d.jpeg",
                "width": 1080,
                "height": 864
            },
            {
                "url": "https://tb-static.uber.com/prod/image-proc/processed_images/c0a259d1590167d8f95167e0b26f71f4/93b5fd796682c6d5302cd5bec164fe90.jpeg",
                "width": 750,
                "height": 600
            },
            {
                "url": "https://tb-static.uber.com/prod/image-proc/processed_images/c0a259d1590167d8f95167e0b26f71f4/97e6648b3593c29cb4a6335f976e6d84.jpeg",
                "width": 640,
                "height": 512
            },
            {
                "url": "https://tb-static.uber.com/prod/image-proc/processed_images/c0a259d1590167d8f95167e0b26f71f4/a70f5c9df440d10213e93244e9eb7cad.jpeg",
                "width": 550,
                "height": 440
            },
            {
                "url": "https://tb-static.uber.com/prod/image-proc/processed_images/c0a259d1590167d8f95167e0b26f71f4/97ef7458dde62fa918635bc21265d9f5.jpeg",
                "width": 240,
                "height": 192
            }
        ]
    },
    "signposts": [
        {
            "backgroundColor": {
                "color": "#0E8345"
            },
            "text": "Spend US$25, Save US$5",
            "textColor": {
                "color": "#FFFFFF"
            }
        }
    ],
    "tracking": {
        "metaInfo": {
            "pluginName": "LowDeliveryFeeV2Plugin",
            "analyticsLabel": "LOW_DELIVERY_FEE_V2_CAROUSEL",
            "verticalType": "",
            "category": "",
            "subcategory": "",
            "surfaceAreaV2": ""
        },
        "storePayload": {
            "storeUUID": "b5a6e786-b14c-5a50-842d-40418e1f5b55",
            "isOrderable": true,
            "score": {
                "breakdown": {
                    "ConversionRate_boosting_factor": 1,
                    "FinalScore": 0.013196511397361756,
                    "PredictionScore": 0.013186511397361756,
                    "conversion_rate_partial_score": 0.011354446411132812,
                    "ctr_partial_score": 0.02356821298599243,
                    "net_inflow_boosting_factor": 0,
                    "net_inflow_partial_score": 23.742939992885987,
                    "service_quality_boosting_factor": 0,
                    "service_quality_partial_score": 0.7642676830291748,
                    "t120d_eyeball_count": 5981,
                    "t120d_request_count": 467,
                    "ucb_bandit_boosting_factor": 0,
                    "ucb_bandit_partial_score": 0.11249912391883632
                },
                "total": 0.013196511397361756
            },
            "etdInfo": {
                "dropoffETASec": 2379,
                "dropoffETARange": {
                    "min": 30,
                    "max": 45,
                    "raw": 40
                },
                "minRangeDropoffETASec": 1800,
                "maxRangeDropoffETASec": 2700,
                "etdMode": "PREDICTION"
            },
            "ratingInfo": {
                "storeRatingScore": 4.373134328358209,
                "ratingCount": "67"
            },
            "promotionUUID": "191840c9-c0c3-4c14-96ce-69d2519dd935",
            "scheduleTimeSlots": null,
            "isDBF": true,
            "storeAvailablityState": "UNKNOWN",
            "offerMetadata": {
                "analyticsUUID": "cf1a78a5-e432-4d56-b6c6-ae913e92ecef",
                "promotionUUIDs": [
                    "191840c9-c0c3-4c14-96ce-69d2519dd935"
                ],
                "offerTypeCount": 1,
                "concatSignpost": "store_promotion_badge"
            }
        }
    },
    "mapMarker": {
        "latitude": 42.3958,
        "longitude": -83.2772,
        "zIndex": 9968,
        "description": {
            "title": "Savvy Sliders",
            "color": "CONTENT_PRIMARY",
            "backgroundColor": "BACKGROUND_PRIMARY",
            "selectedColor": "CONTENT_PRIMARY",
            "selectedBackgroundColor": "BACKGROUND_PRIMARY"
        },
        "markerContent": {
            "color": "CONTENT_PRIMARY",
            "selectedColor": "CONTENT_INVERSE_PRIMARY",
            "backgroundColor": "BACKGROUND_PRIMARY",
            "selectedBackgroundColor": "BACKGROUND_INVERSE_PRIMARY",
            "text": "4.4",
            "size": "SPACING_UNIT_4X"
        },
        "secondaryMarkerContent": {
            "color": "CONTENT_POSITIVE",
            "selectedColor": "CONTENT_INVERSE_PRIMARY",
            "backgroundColor": "BACKGROUND_PRIMARY",
            "selectedBackgroundColor": "BACKGROUND_POSITIVE",
            "icon": "TAG"
        }
    },
    "meta2": null,
    "storyIconPayload": {
        "isIconVisible": false
    },
    "endorsements": null,
    "meta4": null,
    "promotionConfiguration": {
        "regularPromotionConfiguration": {}
    }
},
{
    "storeUuid": "fbc91687-07df-58a2-b7d6-3a49ccf10f91",
    "title": {
        "text": "Grandy's Coney Island (Fenkell St)"
    },
    "meta": [
        {
            "text": "30–45 min",
            "accessibilityText": "Delivered in 30 to 45 min",
            "badgeType": "ETD"
        }
    ],
    "rating": {
        "text": "3.8",
        "accessibilityText": "Rated 3.8 out of 5 stars based on more than 100 reviews.",
        "badgeType": "RATINGS"
    },
    "actionUrl": "/store/grandys-coney-island-fenkell-st/-8kWhwffWKK31jpJzPEPkQ?delivery_type=deliverytype%280%29",
    "favorite": false,
    "image": {
        "items": [
            {
                "url": "https://d1ralsognjng37.cloudfront.net/8e81b8f9-2d15-4f50-9941-8b3537429d76.webp",
                "width": 2880,
                "height": 2304
            },
            {
                "url": "https://d1ralsognjng37.cloudfront.net/a4be9c99-95e8-4130-a45b-7680e7c9f0ba.webp",
                "width": 1080,
                "height": 864
            },
            {
                "url": "https://d1ralsognjng37.cloudfront.net/e83c0170-9901-46ec-b4cd-eb45ffa5f87f.webp",
                "width": 750,
                "height": 600
            },
            {
                "url": "https://d1ralsognjng37.cloudfront.net/45f45aa1-887b-4858-b45a-d27108c42b71.webp",
                "width": 640,
                "height": 512
            },
            {
                "url": "https://d1ralsognjng37.cloudfront.net/e8fba769-2cf0-45be-9623-872295ed44b6.webp",
                "width": 550,
                "height": 440
            },
            {
                "url": "https://d1ralsognjng37.cloudfront.net/bad52bf5-01e5-494a-bdfa-272274692d4a.webp",
                "width": 240,
                "height": 192
            }
        ]
    },
    "signposts": [
        {
            "backgroundColor": {
                "color": "#0E8345"
            },
            "text": "3 Offers Available",
            "textColor": {
                "color": "#FFFFFF"
            }
        }
    ],
    "tracking": {
        "metaInfo": {
            "pluginName": "LowDeliveryFeeV2Plugin",
            "analyticsLabel": "LOW_DELIVERY_FEE_V2_CAROUSEL",
            "verticalType": "",
            "category": "",
            "subcategory": "",
            "surfaceAreaV2": ""
        },
        "storePayload": {
            "storeUUID": "fbc91687-07df-58a2-b7d6-3a49ccf10f91",
            "isOrderable": true,
            "score": {
                "breakdown": {
                    "ConversionRate_boosting_factor": 1,
                    "FinalScore": 0.012797307798862456,
                    "PredictionScore": 0.012787307798862457,
                    "conversion_rate_partial_score": 0.01013040542602539,
                    "ctr_partial_score": 0.027843087911605835,
                    "net_inflow_boosting_factor": 0,
                    "net_inflow_partial_score": 24.48350491535176,
                    "service_quality_boosting_factor": 0,
                    "service_quality_partial_score": 0.748433530330658,
                    "t120d_eyeball_count": 36384,
                    "t120d_request_count": 2470,
                    "ucb_bandit_boosting_factor": 0,
                    "ucb_bandit_partial_score": 0.04635425212612969
                },
                "total": 0.012797307798862456
            },
            "etdInfo": {
                "dropoffETASec": 2417,
                "dropoffETARange": {
                    "min": 30,
                    "max": 45,
                    "raw": 40
                },
                "minRangeDropoffETASec": 1800,
                "maxRangeDropoffETASec": 2700,
                "etdMode": "PREDICTION"
            },
            "ratingInfo": {
                "storeRatingScore": 3.8284518828451883,
                "ratingCount": "100+"
            },
            "promotionUUID": "d5f97a5c-1d85-4254-8d2c-14a242c959f7",
            "scheduleTimeSlots": null,
            "isDBF": true,
            "storeAvailablityState": "UNKNOWN",
            "offerMetadata": {
                "analyticsUUID": "f29219c3-ec3f-496f-a36a-e67ea2f638ce",
                "promotionUUIDs": [
                    "d5f97a5c-1d85-4254-8d2c-14a242c959f7",
                    "18b31c23-9dde-41dc-9118-0759f8769e31",
                    "18d6279a-6979-42b0-bbfc-f52a1a57c9b6"
                ],
                "offerTypeCount": 3,
                "concatSignpost": "concurrent_offer.signpost.num.of.offers.available"
            }
        }
    },
    "mapMarker": {
        "latitude": 42.4001,
        "longitude": -83.2572,
        "zIndex": 9967,
        "description": {
            "title": "Grandy's Coney Island",
            "color": "CONTENT_PRIMARY",
            "backgroundColor": "BACKGROUND_PRIMARY",
            "selectedColor": "CONTENT_PRIMARY",
            "selectedBackgroundColor": "BACKGROUND_PRIMARY"
        },
        "markerContent": {
            "color": "CONTENT_PRIMARY",
            "selectedColor": "CONTENT_INVERSE_PRIMARY",
            "backgroundColor": "BACKGROUND_PRIMARY",
            "selectedBackgroundColor": "BACKGROUND_INVERSE_PRIMARY",
            "text": "3.8",
            "size": "SPACING_UNIT_4X"
        },
        "secondaryMarkerContent": {
            "color": "CONTENT_POSITIVE",
            "selectedColor": "CONTENT_INVERSE_PRIMARY",
            "backgroundColor": "BACKGROUND_PRIMARY",
            "selectedBackgroundColor": "BACKGROUND_POSITIVE",
            "icon": "TAG"
        }
    },
    "meta2": null,
    "storyIconPayload": {
        "isIconVisible": false
    },
    "endorsements": null,
    "meta4": null,
    "promotionConfiguration": {
        "regularPromotionConfiguration": {}
    }
}];

const Body = () => {
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {resList.map((restaurant => <RestaurantCard key={restaurant.storeUuid} resData={restaurant} />))
                }
            </div>
    </div>)
}
const Footer = () => {
    return <div className="footer">
        <p>@copyright 2024</p>    
    </div>
}
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
            <Footer />
        </div>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(jsxHeading); // this is how we render React Element

root.render(<AppLayout />); // this is how we render React Component
