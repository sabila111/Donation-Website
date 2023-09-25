import { Link } from "react-router-dom";


const DonationCarddd = ({card}) => {

        
        const {id,Picture,Title,Category,Category_bg,Description,Price,Card_bg,Text_color }= card || {}

    return (
        <Link>
        
        <div style={{background:Card_bg}} className="card-compact w-72 bg-base-100 ">
  <figure><img className="w-[312px] h-[194px" src={Picture} alt="Shoes" /></figure>
  <div className="card-body">
    <p style={{background:Card_bg, color:Text_color}} className="text-left text-sm">{Category}</p>
    <p className="text-left text-xl" style={{color:Text_color}}>{Title}</p>
    
  </div>
</div>
        
        </Link>
    );
};

export default DonationCarddd;