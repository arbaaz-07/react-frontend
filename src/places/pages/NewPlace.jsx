import React from "react";

const NewPlace = props => {

    const items = [{
        id:"u1",
        name : "first photo",
        image : "https://w0.peakpx.com/wallpaper/791/747/HD-wallpaper-tropical-beach-beach-tropical-thumbnail.jpg",
        places : 3
    }]

    return <UserList items={items} />
}

export default NewPlace ;