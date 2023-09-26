// import { useEffect, useState } from "react";
// import { useLoaderData, useParams } from "react-router-dom";

// const Cards2 = () => {

//     const [card3, setCard3] = useState({})

//     const { id } = useParams()
    
//     const cards2 = useLoaderData()
    
//     useEffect(() => {
        
//         const findCard = cards2.find((card3)=>card3.id === parseInt(id))

//         setCard3(findCard)

//     }, [id, cards2])

//     console.log(card3)

//     return (
//         <div>
            
//         </div>
//     );
// };

// export default Cards2;