import React from "react";
import { roomitemcomponent } from "../type/roomitem";

function RoomItem(prop:roomitemcomponent) {
    return <tr>
        <td>{prop.items.id}</td>
        <td>{prop.items.name}</td>
        <td>{prop.items.creator}</td>
        <td>{prop.items.code}</td>
        <td><button onClick={() => prop.join(prop.items)}> Join</button></td>
    </tr>
}

export default RoomItem;