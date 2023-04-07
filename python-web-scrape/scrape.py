#pip install beautifulsoup4 requests
import requests
from bs4 import BeautifulSoup

url = 'https://www.ateneo.edu/news/loyola-schools'
response = requests.get(url)

soup = BeautifulSoup(response.text, 'html.parser')

news = soup.find('div', {'class': 'row'})
elements = news.find_all()

# print the text of each element
for element in elements:
    print(element.text)