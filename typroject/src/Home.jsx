import React from "react";
import Header from "./Header";
import Card from "./Card";
import Middle from "./Middle";
import Footer from "./Foot";
import HeadphoneCard from "./Earphone";
import ChargerCard from "./component/ChargerCard";

function Home() {
  return (
    <>
      <Header />
      <Middle />
      <h4 className="container headphones">SmartPhones</h4>
      <Card />
      <br />
      <h4 className="container headphones">Headphones</h4>
      <HeadphoneCard />
      <br />
      <h4 className="container headphones">Chargers</h4>
      <ChargerCard />
      <Footer />
    </>
  );
}
export default Home;
