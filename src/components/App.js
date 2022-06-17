import React, { useState } from "react";
import Nav from "./Nav";
import CardContainer from "./CardContainer/CardContainer";

import hogs from "../porkers_data";

function App() {
	const all = [...hogs]
	const greased = hogs.filter((hog) => hog.greased === true)
	const notGreased = hogs.filter((hog) => hog.greased === false)

	const[filteredHogs, setFilteredHogs] = useState(all)
	

	function greasedSelection(e){
        if(e.target.value === "All"){
			return setFilteredHogs(all)
		} else if(e.target.value === "Greased"){
			return setFilteredHogs(greased)
		}else if(e.target.value === "Not Greased"){
			return setFilteredHogs(notGreased)
		}
    }
	
	// function orderedPigs() {
	// 	 filteredHogs.sort((a,b) => (
	// 		a.weight - b.weight
	// ))
	// }

	
	
	function sortByWeight(e){
		const orderedPigs = filteredHogs.sort((a,b) => (
			a.weight - b.weight
	))
		const checked = e.target.checked
		console.log(checked)
		if(checked === true) {
			setFilteredHogs([...orderedPigs])
		} else if (checked === false) {
			setFilteredHogs(all)
			}
		} 
		
		

	return (
		<div className="App">
			<Nav />
			<CardContainer hogData={filteredHogs} handleFilterChange={greasedSelection} handleSortClick={sortByWeight}/>
		</div>
	);
}

export default App;
