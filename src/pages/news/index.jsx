import './News.css'
import React, { useState, useEffect } from 'react';

function NewsPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchTextData = async () => {
      const response = await fetch('python-web-scrape/output.txt');
      const data = await response.text();

      const lines = data.split('\n');
      const numItems = lines.length / 3;
      const itemsArray = [];

      for (let i = 0; i < numItems; i++) {
        const url = lines[i * 3];
        const photoLink = lines[i * 3 + 1];
        const headline = lines[i * 3 + 2];

        const item = {
          url: url,
          photoLink: photoLink,
          headline: headline,
        };

        itemsArray.push(item);
      }

      setItems(itemsArray);
    };

    fetchTextData();
  }, []);

  return (
    <>
    <h1>News</h1>
    <div id="news-page" class='main-wrapper'>
      {items.map((item, index) => (
        <div key={index} className='article'>
          <a href={item.url}>
            <img src={item.photoLink} alt='photo' className='news-img' />
            <headline>{item.headline}</headline>
          </a>
        </div>
      ))}
    </div>
    </>
  )
}

export default NewsPage