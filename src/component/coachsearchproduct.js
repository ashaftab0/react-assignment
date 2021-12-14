import React from "react";
import { Link } from "react-router-dom";
import Fill_Star from "../assets/images/fill-star.png";
import Half_Fill_Star from "../assets/images/half-fill-star.png";
import Empty_Star from "../assets/images/empty-star.png"

export default function PList(props) {
    return (
        <div className="row product-grid">
            {props.productlistjsondata.map((data, i) =>
                <div key={i} className="col-6 col-md-3 product-tile__container" data-pid={data.productId} data-gender={data.c_gender}>
                    <div className="product" >
                        <div className="product-tile">
                            <div className="product-tile__upper-section">
                                {data.defaultVariant ? 
                                    <div className="product-tile__upper-section">
                                        <Link to={`/product-details/${(data.defaultVariant.toUpperCase()).replace(/ /g, '-')}-A0`}>
                                            <picture>
                                                <source srcSet={`https://img1.cohimg.net/is/image/Coach/${(data.defaultVariant.toLowerCase()).replace(/ /g, '_')}_a0`} media="(min-width:992px)" />
                                                <source srcSet={`https://img1.cohimg.net/is/image/Coach/${(data.defaultVariant.toLowerCase()).replace(/ /g, '_')}_a0`} media="(min-width:768px)" />
                                                <img src={`https://img1.cohimg.net/is/image/Coach/${(data.defaultVariant.toLowerCase()).replace(/ /g, '_')}_a0`} alt={data.productId} />
                                            </picture>
                                        </Link>
                                    </div> : ""
                                 }
                            </div>
                            <div className="product-tile__lower-section">
                                <div className="product-tile__top-promotions">
                                    <div className="plp-badges js-upper-badges-area-plp text-uppercase plp-badges__upper">
                                    </div>
                                </div>
                                <div className="product-tile__title pdp-link">
                                     {data.promotion[0].category_id}
                                </div>
                                <div className="product-tile__title pdp-link">
                                    {data.defaultVariant ? <Link to={`/product-details/${(data.defaultVariant.toUpperCase()).replace(/ /g, '-')}-A0`}>{data.variants[0].name}</Link> : ""}
                                </div>
                                <div className="product-tile__price" data-qa="product_tile_pricing_wrapper">
                                    <div className="price ">
                                        <span className="price-container">
                                            <span className="sales">
                                                <span className="value">
                                                    {data.currency === "USD" && '$'} {data.variants[0].price}
                                                </span>
                                            </span>
                                            <span className="final-sale-text js-final-sale-text">
                                            </span>
                                        </span>
                                    </div>
                                </div>
                                <div className="product-tile__swatches-wrapper">
                                </div>
                                <div className="product-tile__bottom-promotions">
                                    <div data-qa="cm_tile_txt_pt_lower_promobadges" className="plp-badges js-lower-badges-area-plp d-none">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}