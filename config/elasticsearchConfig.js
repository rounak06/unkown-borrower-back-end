let elasticSearch = require('elasticsearch');
let esClient = elasticSearch.Client({
    host:'https://search-unknownborrowers-acaq4szy7dpjir7ku3tikz66he.us-east-1.es.amazonaws.com'
});

module.exports = esClient;