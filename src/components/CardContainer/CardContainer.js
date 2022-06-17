import React from "react";
import HogCard from "../Card/HogCard";
import { Card } from "semantic-ui-react";


function CardContainer({hogData, handleFilterChange, handleSortClick}) {
    
    const allTheHogs = hogData.map((hog) =>{
        return <HogCard 
        key={hog.name} 
        name={hog.name} 
        image={hog.image} 
        grease={hog.greased} 
        specialty={hog.specialty}
        weight={hog.weight}
        highestMedal={hog["highest medal achieved"]} />
    })

    //onChange={handleSortClick}
    
    return (
        <>
            <label>Sort by weight </label>
            <input type="checkbox" name="weight" value="weight" onChange={handleSortClick}></input>
            <h4>Filter</h4>
            <select onChange={handleFilterChange}>
                <option id="all" value="All">All</option>
                <option id="greased" value="Greased">Greased</option>
                <option id="notGreased" value="Not Greased">Not Greased</option>
            </select>
            <Card.Group itemsPerRow={2}>
            {allTheHogs}
            </Card.Group>
        </>
        
    )
}

export default CardContainer;