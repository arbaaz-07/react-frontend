import React from "react";

import Card from "../../shared/components/UIElements/Card";
import './UserItem.css';
import { Link } from "react-router-dom";
import Avatar from "../../shared/components/UIElements/Avatar";

const UserItem = props => {
    return (
        <li className="user_item">
            <Card className="user_item__content">
                <Link to={`/${props.id}/places`}>
                    <div className="user_item__image">
                        <Avatar image={props.image} alt="image of beach" />
                    </div>
                    <div className="user_item__info">
                        <h2>{props.name}</h2>
                        <h3>{props.placeCount} {props.placeCount == 1 ? "place" : "places"} </h3>
                    </div>
                </Link>
            </Card>
        </li>
    )
}

export default UserItem ; 