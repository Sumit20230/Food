import react,{useState} from 'react';
import Mealitem from './Mealitem';
const Meal=()=>{
  const [search,setSearch]=useState("");
  const [mymeal,setMeal]=useState();
  const searchMeal=(e)=>{
if(e.key=="Enter")
{
  //console.log("hello");
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`).then(res=>res.json()).then(data=> {console.log(data);setMeal(data.meals);setSearch("")})
 
}
  }
    return (
      <div className='main'>
        <div className='heading'>
        <h1>
            Search Your Food Recipe
        </h1>
        <h4>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto libero facilis quae qui minus debitis minima possimus quasi obcaecati doloribus distinctio ea a repellat quaerat, quos ipsa? Unde, odio aliquam.
        </h4>
        </div>
        <div className='search-box'>
            <input type='search' className='search-bar' placeholder='enter the food' onChange={(e)=>setSearch(e.target.value)} value={search} onKeyDown={searchMeal}></input>
        </div>
        <div className="conatiner">
          {
            (mymeal==null)?<p>Not Found</p>:mymeal.map((item)=>{
                return ( <Mealitem item={item}/>)
            })
          }
         
         
        </div>
      </div>
    )
}
export default Meal;