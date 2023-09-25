import DonationCarddd from "./DonationCarddd";

const Card = ({cards}) => {

    console.log(cards);
    return (
        <div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10 ">
                  {
                cards.map(card=> <DonationCarddd key={card.id} card={card} ></DonationCarddd>)
                  }

            </div>
        </div>
    );
};

export default Card;