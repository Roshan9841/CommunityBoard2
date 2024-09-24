import React from "react";

const Card=  ({teamName, country, imageUrl, link}) => {
  return(
<div className="Card">
<img src ={imageUrl} alt={'${teamName} logo'}/>
<h3>{teamName}</h3>
<p>{country}</p>
<a href={link} target="_blank">
  Learn More
</a>
</div>
  )
}
export default Card;