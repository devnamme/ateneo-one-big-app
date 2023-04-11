#pip install beautifulsoup4 requests
import requests
from bs4 import BeautifulSoup

url = 'https://www.ateneo.edu/news/loyola-schools'
response = requests.get(url)

soup = BeautifulSoup(response.text, 'html.parser')

news = soup.find('div', {'class': 'row'})
elements = news.select('div.col-6.mb-4')

# Open a file for writing
with open('./python-web-scrape/output.txt', 'w') as f:
    # Write the href, src, and text of each element to the file
    for element in elements:
        # Find the <a> tag within the element
        link = element.find('a')
        article = element.find('h3')
        
        # Get the article text
        article_div = element.find('div', {'class': 'col-8'})
        article_txt = article_div.find_all('p')

        # Get the href, src, and text attributes of the <a> tag
        href = link.get('href').strip()
        src = link.find('img').get('src').strip()
        text = article.text.strip()

        f.write(f'{text}\n')
        for article_texts in article_txt:
            article_text = article_texts.text.strip()
            f.write(f'{article_text}\n')

        f.write(f'https://www.ateneo.edu{href}\n')
        f.write(f'https://www.ateneo.edu{src}\n')



print('Data written to output.txt')