import React from "react";
import { useParams, useLocation } from "react-router";

export function withRouter(Child) {
    return (props) => {
        const param = useParams();
        const location = useLocation();

        return <Child {...props} param={param} location={location} />
    }
}