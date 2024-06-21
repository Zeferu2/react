
import React from "react";
import PropTypes from "prop-types";

function UserProfileCard(props) {
    return (
        <>
            <span>Name:{props.name} Zeferu </span>
            <span>Age:{props.age} 20 </span>
            <span>Email:{props.email} zeferu@gmail.com </span>
        </>
    )
}

UserProfileCard.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,

}
 export default UserProfileCard;


