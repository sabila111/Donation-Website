import { useState } from "react";
import { Link } from "react-router-dom";

const Banner = () => {

    const [search, setSearch]= useState("");
    const [cards, setCards]= useState([]);

const handleSubmit= e =>{
e.preventDefault();

}
const handleSearchChange= e =>{
if(!e.target.value) return setSearch(cards)
const resultArray = cards.filter(searches => searches.Category.includes(e.target.value))
setSearch(resultArray)
// console.log(e.target);
// setSearch(e.target.value);
}

    return (
        <div>
             <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/JvHgVR9/environment-volunteer-concept-with-persons-holding-boxes-donations.jpg)'}}>
  <div className="hero-overlay bg-opacity-90 bg-white"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="">
      <h1 className="mb-5 text-5xl font-bold text-black">I Grow By Helping People In Need</h1>
      
      <div>
       <form onSubmit={handleSubmit}>
       <input 
       onChange={handleSearchChange}
       className="border-solid border-slate-600 py-4 px-8 text-black rounded-lg" type="search" name="search" placeholder="Search here...." />
      
      {/* <input className="bg-red-600 py-3 px-6 rounded-lg text-white" type="submit" value="submit" /> */}
      <Link><button  className="bg-red-600 py-3 px-6 rounded-lg text-white" >submit</button></Link>
       </form>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;