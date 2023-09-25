import { useLoaderData } from "react-router-dom";
import Card from "../card/Card";
import Banner from "../header/banner/Banner";

const Home = () => {

const cards = useLoaderData()
 console.log(cards);


    return (
        <div>
       <Banner></Banner>
       <Card cards={cards}></Card>
        </div>
    );
};

export default Home;