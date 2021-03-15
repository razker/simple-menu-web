const SERVER_URL = process.env.NODE_ENV === 'Production'
? 'http://myapidomain.com'
: 'http://localhost:8080' ;

export default SERVER_URL;


