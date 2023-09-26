// import { useEffect, useState } from "react";
// import Donateee from "./Donateee";

// const Donation = () => {

// const [donation,setDonation] = useState([])
// const [noFound, setNoFound] = useState(false)

// useEffect(()=>{

//     const donationItem = JSON.parse(localStorage.getItem('test'))
//     if(donationItem){
//         setDonation(donationItem)
//     }
//     else{
//         setNoFound('no data found')
//     }

// },[])

// console.log(donation)

//     return (
//         <div className="grid grid-cols-2 gap-5">
//             {
//                 donation.map(donate=> <Donateee key={donate.id} donate={donate}></Donateee> )
//             }
//         </div>
//     );
// };

// export default Donation;