import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";

function PortfolioCard({ itemData }) {
  const { img, title, description, liveLink, repoLink, techStack } = itemData;

  return (
    <div className='portfolio-card'>
      <div className='portfolio-img'>
        <img src={img} alt='portfolio-img' />
        <div className='tech-stack-list'>
          <div>
            {techStack.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>
      </div>
      <div className='portfolio-info'>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className='portfolio-icons'>
          <a target='_blank' href={repoLink}>
            <AiFillGithub />
          </a>
          <a target='_blank' href={liveLink}>
            <BiLinkExternal />
          </a>
        </div>
      </div>
    </div>
  );
}

export default PortfolioCard;
