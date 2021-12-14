import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import Spinner from '../component/spinner';

import ProductRefinement from '../component/coachproductrefinement';
import ProductSearchedList from '../component/coachsearchproduct';
import ProductFilter from "../component/coachproductfilter";

class Product_list extends React.Component{ 
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            sortBy: 'BEST_MATCHES',
            data: "",
            genderType: ''
        }
    }

    componentDidMount() {
        let payload = {
            pageNo: 4,
            startFrom: 0
        }
        this.props.getProductList(payload);
    }

    static getDerivedStateFromProps(props, state) {
        let data = null;

        if(props.productList){
            data = {
                data: props.productList.Data,
                loading: props.productList.loading
            }
        }

        return data;
    }

    genderFilterCallback(currentVal) {
        this.setState({
            genderType: currentVal
        });
    }

    sortByCallback(currentVal) {
        console.log(currentVal);
        this.setState({
            sortBy: currentVal
        });
    }

    clearAllFilters() {
        this.setState({
            sortBy: 'BEST_MATCHES',
            genderType: '' 
        })
    }

    render() {
        let response = this.state.data;
        let genderType = this.state.genderType;
        let sortBy = this.state.sortBy;
        let productlistjsondata = response ? response.hits ? response.hits.filter((data, i) => data.defaultVariant.match(/\//) != "/") : [] : [];

        console.log("response: ", response);
        
        if(genderType && genderType !== 'ALL'){
            productlistjsondata = productlistjsondata.filter((data, i) => data.c_gender && data.c_gender.toUpperCase() === genderType);
        }
        if(sortBy === 'PRICE_HIGH_TO_LOW'){
            productlistjsondata = productlistjsondata.sort((a, b) => b.variants[0].price - a.variants[0].price);
        }
        else if(sortBy === 'PRICE_LOW_TO_HIGH'){
            productlistjsondata = productlistjsondata.sort((a, b) => a.variants[0].price - b.variants[0].price);
        }

        return(
            <div className="search-page-banner">
                <div class="row plp-heading">
                    <h1 class="plp-heading__title col-sm-12 col-md-9">NEW ARRIVALS</h1>
                </div>

                <div className="search-result-container">
                    <div className="search-results">
                        <div className="tab-content">
                            <div className="tab-pane active" id="product-search-results">
                                <div className="row">
                                    <div className="search-refinement refinement-bar d-md-block col-md-3">
                                        <ProductFilter genderFilterCallback={(val) => this.genderFilterCallback(val)} 
                                            clearAllFilters={() => this.clearAllFilters()} 
                                            genderType={genderType} 
                                        />
                                    </div>

                                    <div className="col-sm-12 col-md-9 search-list">
                                        <ProductRefinement sortByCallback={(val) => this.sortByCallback(val)} 
                                            activeVal={sortBy} 
                                            totalcount={productlistjsondata.limit}
                                        />

                                        <ProductSearchedList  productlistjsondata={productlistjsondata} />
                                    </div>
                                </div>
                            </div>
                            {this.state.loading ? <Spinner /> : null}
                        </div>
                    </div>
                </div> 
            </div>
        )
    }
}


const mapStateToProps = (state) => {
	return {
		productList: state.productListReducer
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Product_list);