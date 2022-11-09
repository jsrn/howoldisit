from bs4 import BeautifulSoup
import sqlite3
from sqlite3 import Error


connection = sqlite3.connect("tech_db.db")
cursor     = connection.cursor()

cursor.execute('''
    DROP TABLE IF EXISTS `technologies`;
''')

cursor.execute('''
    CREATE TABLE IF NOT EXISTS `technologies` (
        `id` INTEGER PRIMARY KEY,
        `tech_name` TEXT,
        `link` TEXT NULL,
        `icon` TEXT NULL,
        `start_date` TEXT NULL
    )
''')

connection.commit()


file = open('index.html', 'r')
file_text = file.read()

soup = BeautifulSoup(file_text, "html.parser")

results = soup.find("main").find(id="rows")
languages = results.select("[data-name]")

for language in languages:
    link = language.find('a')
    date  = language.select("[data-date]")

    tech_name  = language['data-name']
    tech_link  = link['href']
    start_date = date[0]['data-date']

    sql = ''' INSERT INTO technologies (tech_name, link, start_date) VALUES(?,?,?) '''
    cursor = connection.cursor()
    cursor.execute(sql, (tech_name, tech_link, start_date))
    connection.commit()
