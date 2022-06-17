import React, {useState} from "react";
import {Card} from "semantic-ui-react"


function HogCard({name, image, grease, specialty, weight, highestMedal}) {
    const [isHideButton, setIsHideButton] = useState(false)
    
    function handleShowContent(){
        //console.log(grease)
        return setIsHideButton(!isHideButton)  
    }


    return(
        <Card className="pigTile" color="pink" onClick={handleShowContent}>
            <img src={image} alt="piggies" ></img>
            <div>{name}</div>
            <ul className={isHideButton === true? "" : "hide"}>   
                <li>Grease: {grease ? "Greased" : "Not greased"}</li>
                <li>Specialty: {specialty}</li>
                <li>Weight(lb):{weight}</li>
                <li>Highest Medal: {highestMedal}</li>
                 
            </ul>
                      
        </Card>
    )
}

export default HogCard;