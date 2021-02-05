# Aaron Bager
# Method for getting population of a single country; in this case, norway 

import config # contains census API key, contact Aaron for key if needed
import requests
import json

countries = []

response = requests.get("https://api.census.gov/data/timeseries/idb/1year?get=POP&GENC=NO&YR=2021&SEX=0&key=" + config.census_key);

population = 0

first_column = True
for data in response.json():
    if first_column:
        first_column = False 
        continue
    population += int(data[0])
#    print(data[3])

print(population) 
