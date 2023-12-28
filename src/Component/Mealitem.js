import React from "react";
const Mealitem=({item})=>{
    return (
        <>
       <div className="card">
          <img src={item.strMealThumb} alt="x"></img>
          <div className="info">
            <h2>{item.strMeal}</h2>
         <p>{item.strInstructions}</p>
          </div>
          <div className="receipe">
            <h2>
                <h2>Receipe</h2>
                <img src='https://vignette3.wikia.nocookie.net/chowder/images/7/75/Foof_N_Scoops.png/revision/latest?cb=20170722204317'></img>
                <a href={item.strYoutube}>watch video</a>
            </h2>
          </div>
       </div>
        </>
    )
}
export default Mealitem;