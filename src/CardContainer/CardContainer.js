import React from "react";
import Card from "./Card/Card";

const cardContainer = ({data}) => {
  return (
    <div className="container mx-auto mt-20 grid grid-cols-2 gap-8 md:grid-cols-3 xl:grid-cols-4">
      {data.map(entry => <Card data={entry}/>)}
    </div>
  );
};

export default cardContainer;
