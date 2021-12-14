import React from "react";
const genderTypes = {all: 'ALL', men: 'MEN', women: 'WOMEN'};

export default function Filter(props) {
    function selectGender(e) {
        let selectedVal = e.target.getAttribute('data-val');
        props.genderFilterCallback(selectedVal);
        e.target.blur();
    }
 
    return(
        <div className="filter-panel drawer-sort-and-filters">
            <div className="refinements">
                <div className="refinements__internal-block">
                    <div className="search-refinements__title-wrapper js-title-wrapper d-flex align-items-center justify-content-between">
                        <h3 className="search-refinements__title">FILTER BY</h3>
                        <button type="button" className="btn btn-outline-dark clear-btn float-right" onClick={() => props.clearAllFilters()}>CLEAR ALL</button>
                    </div>
                    <div className="filter-accordion-wrapper custom-scrollbar">
                        <div className="accordion filter-accordion-filtercategory">
                            <div className="card">
                            <div className="card-header">
                                <button className="card-header__button d-flex align-items-center w-100 collapsed">
                                    <h3 className="d-inline-flex card-header__title js-card-header-title s-card-header-title-filtercategory text-left w-100">
                                        <span className="d-inline-block title-text text-capitalize">Categories</span>
                                    </h3>
                                </button>
                            </div>
                            <div id="filter-accordion-body-filtercategory" className="collaps" aria-labelledby="Search Refinement">
                                <div className="card-body js-card-body card-body-filtercategory">
                                    <div className="d-flex flex-wrap refinements-attribute-set js-refinement-attr-set js-checkbox-filter-set">
                                        <a href="/shop/new/view-all?filterCategory=Watches">
                                        Watches
                                        </a>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="accordion filter-accordion-gender">
                            <div className="card">
                                <div className="card-header">
                                    <button className="card-header__button d-flex align-items-center w-100">
                                        <h3 className="d-inline-flex card-header__title js-card-header-title s-card-header-title-gender text-left w-100">
                                            <span className="d-inline-block title-text text-capitalize">Gender</span>
                                        </h3>
                                    </button>
                                </div>
                                <div id="filter-accordion-body-gender" className="collapse show" aria-labelledby="Search Refinement">
                                    <div className="card-body js-card-body card-body-gender">
                                        <div className="d-flex flex-wrap refinements-attribute-set js-refinement-attr-set js-attribute-set">
                                            <button type="button" className={`btn btn-outline-dark gender-btn ${props.genderType === genderTypes.all ? 'active':'' }`} onClick={(e) => selectGender(e)} data-val={genderTypes.all} >All</button>
                                            <button type="button" className={`btn btn-outline-dark gender-btn ${props.genderType === genderTypes.men ? 'active':'' }`} onClick={(e) => selectGender(e)} data-val={genderTypes.men}>Men</button>
                                            <button type="button" className={`btn btn-outline-dark gender-btn ${props.genderType === genderTypes.women ? 'active':'' }`} onClick={(e) => selectGender(e)} data-val={genderTypes.women}>Women</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}