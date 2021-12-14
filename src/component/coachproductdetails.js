import React from "react";

export default function Details(props) {
    return(
        <ul className="list">
            {pDetails.map((list, i) =>
                <li key={i} className="mt-3">
                    <div>{list.id}</div>
                    <div>{list.title}</div>
                </li> 
            )}
        </ul>
    )
}