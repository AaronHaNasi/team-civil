import React, {useState} from "react"
import ReactTooltip from "react-tooltip"
import Map from "./Map"
import Header from "./Header";
import Country from "./Country"

const MapWrapper = () => {
    const [content, setContent] = useState("")
    const [userSearchCountry, setUserSearchCountry] = useState("");

    console.log("map wrapper called");
    
    return(
        <div>
      <Header searchTerm = {setUserSearchCountry}/>
      <Country input = {userSearchCountry}/>
      <Map setTooltipContent={setContent}/>
      <ReactTooltip>{content}</ReactTooltip>

      
    </div>
    )
}

export default MapWrapper