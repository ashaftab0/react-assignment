import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router";
import { getProductDetails_Request } from '../actions';
import Spinner from '../component/spinner';

export default function Product_details() {
    const productDetails = useSelector((state) => state.productDetailsReducer);
    const dispatch = useDispatch();
    const { id } = useParams();
    let pid = id ? id.split("-")[0] : "";
    let urlId = id ? id.replace(/-/g, " ") : "";
    let pDetails = "";  

    useEffect(() => {
        let payload = { id:  urlId}
        dispatch(getProductDetails_Request(payload));
    }, []);

    if(productDetails){
        // console.log("if 1", productDetails);

        if(Array.isArray(productDetails.details)){
            pDetails = productDetails.details.find((p) => p.id === pid);
        }
        else {
            // console.log("msg", productDetails.details);
            return(<p>{productDetails.details}</p>);
        }
    }

    if(!pDetails){
        return( <Spinner /> )
    }

    return(
        <div className="conatiner-fluid">
            <h4>Product details</h4>

            <div className="col-12 col-md-8">
                <div className="row">
                    <div className="col-md-2">
                        <ul className="list pd-thumbnails-img+">
                            <li>Hi</li>
                            <li>Hi 2</li>
                        </ul>
                    </div>
                    <div className="col-md-10">
                        {pDetails.media.thumbnails.map((data, i) =>
                            <div key={i} className="pd-full-img" id={`pd-full-img-${i}`}>
                                <img src={data.src} alt={data.alt} />
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="col-12 col-md-4">

            </div>

            <ul className="list">
                <li className="mt-3">
                    <div>{pDetails.id}</div>
                    <div>{pDetails.title}</div>
                </li> 
            </ul>
        </div>  
    )
}