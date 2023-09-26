import { useLoaderData, useParams } from "react-router-dom";
import DonationCARDSdetail from "./DonationCARDSdetail";

const DonatioCardDetail = () => {

const cards2= useLoaderData();
const {id}= useParams()
const card3= cards2.find(card3 => card3.id ===  parseInt(id))
console.log( card3);


    return (
        <div>
            <DonationCARDSdetail card={card3}></DonationCARDSdetail>
        </div>
    );
};

export default DonatioCardDetail;