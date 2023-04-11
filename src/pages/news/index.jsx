import './News.css'
import React, { useState, useEffect } from 'react';

function NewsPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchTextData = async () => {
      const response = await fetch('python-web-scrape/output.txt');
      const data = await response.text();

      const lines = data.split('\n');
      const numItems = lines.length / 5;
      const itemsArray = [];

      for (let i = 0; i < numItems; i++) {
        const headline = lines[i * 5];
        const date = lines[i * 5 + 1];
        const text = lines[i * 5 + 2];
        const url = lines[i * 5 + 3];
        const photoLink = lines[i * 5 + 4];

        const item = {
          url: url,
          photoLink: photoLink,
          headline: headline,
          text: text,
          date: date,
        };

        itemsArray.push(item);
      }

      setItems(itemsArray);
    };

    fetchTextData();
  }, []);

  return (
    <>
      <div className='news-wrapper'>
        <div className='news-header'>
          <h2>News</h2>
        </div>
        <div className='article-wrapper'>
          {items.map((item, index) => (
            <div key={index} className='article'>
              <img src={item.photoLink} alt='photo' className='news-img' />
              <div className='text-wrapper'>
                <date className='date'>{item.date}</date>
                <a href={item.url} className='headline'>
                  {item.headline}
                </a>
                <p className='body'>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default NewsPage