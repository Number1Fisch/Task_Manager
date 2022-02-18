import React from "react";
import PropTypes from "prop-types";

export default function Task({id, title, description}){
    return(<div>
    {id}
    <h1>
        {title} - {description}
    </h1>
    </div>
    );
}

Task.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.number
};
