import React, { useState } from "react";
import "./portfolio.css";
import { portfolioData } from "../../data/portfolioData";
import PortfolioCard from "./PortfolioCard";

function Portfolio() {
  const [itemsCount, setItemsCount] = useState(3);

  const updateItemsCount = () => {
    if (itemsCount <= portfolioData.length) {
      setItemsCount((prev) => prev + 5);
    } else {
      setItemsCount(3);
    }
  };

  return (
    <div className='container' id='portfolio'>
      <h1 className='heading'>My Portfolio</h1>
      <div className='portfolio__content'>
        {portfolioData.slice(0, itemsCount).map((item) => (
          <PortfolioCard key={item.id} itemData={item} />
        ))}
      </div>
      <button className='portfolio-button' onClick={updateItemsCount}>
        {itemsCount <= portfolioData.length ? "Show More..." : "Show Less"}
      </button>
    </div>
  );
}

export default Portfolio;
