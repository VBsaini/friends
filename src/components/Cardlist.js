import React, { Fragment } from "react";
import Card from './Card';

const Cardlist = ({robots}) =>{
    const cardlist = robots.map((user, i) =>{
        return (
        <Card key={i} 
        id={robots[i].id} 
        name={robots[i].username} 
        email={robots[i].email} />
        )
    })
    return (
        <Fragment>
            {cardlist}
        </Fragment>
    )
}

export default Cardlist;