import React from "react";

function RoomItem(prop:any) {
    return <tr>
        <td>{prop.items.id}</td>
        <td>{prop.items.name}</td>
        <td>{prop.items.creator}</td>
        <td>{prop.items.code}</td>
        <td><button onClick={() => prop.join(prop.items)}> Join</button></td>
    </tr>
}

export default RoomItem;