import React from "react";

import './PlaceList.css'
import PlaceItem from "./PlaceItem";
import Card from "../../shared/components/UIElements/Card";

const PlaceList = props => {
    if(props.items.length == 0 ) {
        return (
            <div className="center">
                <Card>
                <h2>No Places Found</h2>
                <button>Create One</button>
                </Card>
            </div>
        )
    }

    return(
        <ul className="place-list">
            { props.items.map( place => {
               return <PlaceItem key={place.id} id={place.id} image={place.imageUrl} title={place.title} description={place.description} address={place.address} creatorId={place.creatorId} coordinates={place.location} />
            })}
        </ul>
    )
}

export default PlaceList;