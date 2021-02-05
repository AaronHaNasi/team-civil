import config # contains census API key, contact Aaron for key if needed
import requests

countries = []

response = requests.get("https://api.census.gov/data/timeseries/idb/1year?get=NAME,AGE,POP,AREA_KM2&GENC=NO&YR=2021&SEX=0&key=" + config.census_key);

print(response.json())
