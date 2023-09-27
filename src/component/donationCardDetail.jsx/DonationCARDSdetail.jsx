import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const DonationCARDSdetail = ({ card }) => {
    const { id, Picture, Title, Description, Price, Text_color } = card || {}

    const handleApplyDonation = () => {
        toast('Donated Successfully');
        const donationArray = [];
        const donationItem = JSON.parse(localStorage.getItem('test'))

        if (!donationItem) {
            donationArray.push(card)
            localStorage.setItem('test', JSON.stringify(donationArray))

        }
        else {

            const isExits = donationItem.find(card => card.id === parseInt(id))

            if (!isExits){

                donationArray.push(...donationItem, card)
            localStorage.setItem('test', JSON.stringify(donationArray))

            }

            

        }

        // localStorage.setItem('test',JSON.stringify([{name:"sabila"},{name:"ph"}]));
    }
    return (
        <div>
            <div style={{ position: 'relative' }}>
                <img className="w-full mt-10" src={Picture} alt="" />
                <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    background: 'rgba(11, 11, 11, 0.50)',
                    padding: '25px',
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                }}>
                    <Link to={`/donationCardDetail/${id}`}><button
                        onClick={handleApplyDonation} style={{ background: Text_color }} className="p-4 rounded-lg text-white text-lg">Donate {Price}</button></Link>
                </div>
            </div>
            <div className="text-left text-black ">
                <h2 className="text-5xl mt-8 mb-5">{Title}</h2>
                <p className="text-base">{Description}</p>
            </div>
            <ToastContainer />
        </div>


    );
};

export default DonationCARDSdetail;