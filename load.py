import csv
from elasticsearch import helpers, Elasticsearch

def csv_reader(file_name):
    es = Elasticsearch(['https://search-unknownborrowers-acaq4szy7dpjir7ku3tikz66he.us-east-1.es.amazonaws.com:443'])
    with open(file_name, 'r') as outfile:
        reader = csv.DictReader(outfile)
        helpers.bulk(es, reader, index="user_index", doc_type="user")

csv_reader('csvjson.csv')
