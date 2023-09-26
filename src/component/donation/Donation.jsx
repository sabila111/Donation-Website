import { useEffect, useState } from "react";
import Donateee from "./Donateee";

const Donation = () => {

    const [donation, setDonation] = useState([])
    const [noFound, setNoFound] = useState(false)
    const [show, setShow] = useState(false)

    useEffect(() => {

        const donationItem = JSON.parse(localStorage.getItem('test'))
        if (donationItem) {
            setDonation(donationItem)
        }
        else {
            setNoFound('no data found')
        }

    }, [])

    console.log(donation)

    return (
        <div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 ">
                {
                    show ? donation.map(donate => <Donateee key={donate.id} donate={donate}></Donateee>) :

                        donation.slice(0, 4).map(donate => <Donateee key={donate.id} donate={donate}></Donateee>)
                }

            </div>

            <div className="">
                    {
                        donation.length > 2 && !show && (<button onClick={() => setShow(!show)} className="p-4 bg-orange-300 rounded-lg text-2xl text-white mt-5">show all</button>)
                    }
                </div>

        </div>

    );
};

export default Donation;