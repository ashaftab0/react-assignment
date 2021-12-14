import React from "react";

const sortByOptions = [
    {name: 'Best Matches', value: 'BEST_MATCHES'},
    {name: 'Price High To Low', value: 'PRICE_HIGH_TO_LOW'},
    {name: 'Price Low To High', value: 'PRICE_LOW_TO_HIGH'}
];

export default function SortBy(props) {
    let activeVal = props.activeVal;

    function selectCurrentVal(e) {
        let selectedVal = e.target.getAttribute('data-val');
        props.sortByCallback(selectedVal);
    }

    return(
        <div className="grid-header search-list__header row sticky-grid-header">
        <div className="count-cta-section col-12 d-flex align-items-center">
            <div className="accordion ted-filter__accordion flex-shrink-0">
              <button className="card-header__button d-flex align-items-center">
                  <div className="result-count">
                    <span >
                        11 Products
                    </span>
                  </div>
              </button>
            </div>
            <div className="d-none d-md-block plp-sortby__wrapper text-right flex-shrink-0">
              <div className="d-inline-flex align-items-center plp-sortby__group">
                  <label for="sort-order" className="plp-sortby__label flex-shrink-0">Sort by:</label>
                  <div className="dropdown">
                    <button className="btn dropdown-toggle sortby-btn" type="button" id="dropdownMenuButton" data-toggle="dropdown">
                        {sortByOptions.map((data, i) => data.value === activeVal && data.name)}
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        {sortByOptions.map((data, i) =>
                            <li key={i} className={`${activeVal === data.value ? 'selected': ''}`} data-val={data.value} onClick={activeVal !== data.value ? (e) => selectCurrentVal(e) : null} >
                                {data.name}
                            </li>
                        )}
                    </ul>
                  </div> 
              </div>
            </div>
        </div>
      </div>
    )
}