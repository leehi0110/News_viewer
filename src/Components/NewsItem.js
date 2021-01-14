import React from 'react';
import styled, { keyframes } from 'styled-components';

const NewsItemBlock = styled.div`
  display: flex;
  width: 80%;
  background: #edf0f1;
  border: 1px solid #edf0f1;
  border-radius: 20px;

  &:hover {
    width: 85%;
    transition: 0.3s;
    background: linear-gradient(#ffffff, #ecf0f1);
    box-shadow: 3px 1px 3px;
  }

  .thumbnail {
    margin: 1rem;

    img {
      display: block;
      width: 160px;
      height: 100px;
      object-fit: cover;
    }
  }

  .contents {
    margin: 1rem;

    h2 {
      margin: 0;
      a {
        color: black;
      }
    }

    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }

  & + & {
    margin-top: 3rem;
  }
`;

const NewsItem = ({ article }) => {
  const {title, description, url, urlToImage } = article;
  return (
    <NewsItemBlock>
      {urlToImage && (
        <div className="thumbnail">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={urlToImage} alt="thumbnail"/>
          </a>
        </div>
      )}
      <div className="contents">
        <h2>
          <a href={url} target="_blank" rel="noopenner noreferrer">
            {title}
          </a>
        </h2>
        <p>{description}</p>
      </div>
    </NewsItemBlock>
  );
};

export default NewsItem;