import React from "react";

const Searcbox = ({searchchange}) =>{
    return (
        <div className="pa2">
            <input 
            type="searc" 
            placeholder="search robots" 
            className="pa3 ba b--green bg-lightest-blue"
            onChange={searchchange}
            />
        </div>
    );
}

export default Searcbox;