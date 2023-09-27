import DonationCarddd from "./DonationCarddd";

const Card = ({cards}) => {

    
    return (
        <div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-15 lg:gap-5 mt-10   ">
                  {
                cards.map(card=> <DonationCarddd key={card.id} card={card} ></DonationCarddd>)
                  }

            </div>
        </div>
    );
};

export default Card;