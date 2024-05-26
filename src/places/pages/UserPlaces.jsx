import React from "react";
import PlaceList from "../components/PlaceList";
import { useParams } from "react-router-dom";

const UserPlaces = props => {

    const items = [{
        id:"p1",
        title : "Empire State Building",
        imageUrl : "https://w0.peakpx.com/wallpaper/791/747/HD-wallpaper-tropical-beach-beach-tropical-thumbnail.jpg",
        description : "One Of the famous ,places",
        address : "25 variya rajkot road",
        creatorId : "u1",
        location : ''
    },
    {
        id:"p2",
        title : "Empire State Building",
        imageUrl : "https://w0.peakpx.com/wallpaper/791/747/HD-wallpaper-tropical-beach-beach-tropical-thumbnail.jpg",
        description : "One Of the famous ,places",
        address : "25 variya rajkot road",
        creatorId : "u1",
        location : ''
    }
]

    const userId = useParams().userId;
    console.log(userId);
    const newItems = items.filter( place => place.creatorId == userId)

    return <PlaceList items={newItems} />
}

export default UserPlaces ;