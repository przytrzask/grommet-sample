import compression from 'compression';
import express from 'express';
import http from 'http';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import path from 'path';

const PORT = process.env.PORT || 8000;

const app = express();
app.use(compression());
app.use(morgan('tiny'));
app.use(bodyParser.json());

const tableHeaders = ["numer karty", "operacja", "kwota", "saldo", "opcja177", "bbdfgbb", "bbdfgbb", "status", "bbdfgbb", "bbdfgbb", "bbrtbb", "bbdfgbb", "bbdfgbb", "bbdfgd", "summary"];


const tableRows = [
  {
    "id": "1",
    "numerkarty": "dsfsdgf",
    "operacja": "dsfsdgf",
    "kwota": "dsfsdgf",
    "saldo": "dsfsdgf",
    "opcja177": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "staus": "ok",
    "bbdfgbb": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "bbrtbb": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "bbdfgd": "dsfsdgf"
  },
  {
    "id": "2",
    "numerkarty": "dsfsdgf",
    "operacja": "dsfsdgf",
    "kwota": "dsfsdgf",
    "saldo": "dsfsdgf",
    "opcja177": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "status": "ok",
    "bbdfgbb": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "bbrtbb": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "bbdfgd": "dsfsdgf"


  },
  {
    "id": "3",
    "numerkarty": "dsfsdgf",
    "operacja": "dsfsdgf",
    "kwota": "dsfsdgf",
    "saldo": "dsfsdgf",
    "opcja177": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "status": "critical",
    "bbdfgbb": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "bbrtbb": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "bbdfgd": "dsfsdgf"

  },
  {
    "id": "4",
    "numerkarty": "dsfsdgf",
    "operacja": "dsfsdgf",
    "kwota": "dsfsdgf",
    "saldo": "dsfsdgf",
    "opcja177": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "status": "ok",
    "bbdfgbb": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "bbrtbb": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "bbdfgd": "dsfsdgf"
  },
  {
    "id": "5",
    "numerkarty": "dsfsdgf",
    "operacja": "dsfsdgf",
    "kwota": "dsfsdgf",
    "saldo": "dsfsdgf",
    "opcja177": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "status": "critical",
    "bbdfgbb": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "bbrtbb": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "bbdfgd": "dsfsdgf"
  },
  {
    "id": "6",
    "numerkarty": "dsfsdgf",
    "operacja": "dsfsdgf",
    "kwota": "dsfsdgf",
    "saldo": "dsfsdgf",
    "opcja177": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "status": "ok",
    "bbdfgbb": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "bbrtbb": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "bbdfgd": "dsfsdgf"
  },
  {
    "id": "7",
    "numerkarty": "dsfsdgf",
    "operacja": "dsfsdgf",
    "kwota": "dsfsdgf",
    "saldo": "dsfsdgf",
    "opcja177": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "status": "critical",
    "bbdfgbb": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "bbrtbb": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "bbdfgd": "dsfsdgf"
  },
  {
    "id": "8",
    "numerkarty": "dsfsdgf",
    "operacja": "dsfsdgf",
    "kwota": "dsfsdgf",
    "saldo": "dsfsdgf",
    "opcja177": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "status": "critical",
    "bbdfgbb": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "bbrtbb": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "bbdfgd": "dsfsdgf"
  },
  {
    "id": "9",
    "numerkarty": "dsfsdgf",
    "operacja": "dsfsdgf",
    "kwota": "dsfsdgf",
    "saldo": "dsfsdgf",
    "opcja177": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "status": "ok",
    "bbdfgbb": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "bbrtbb": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "bbdfgd": "dsfsdgf"
  },
  {
    "id": "10",
    "numerkarty": "dsfsdgf",
    "operacja": "dsfsdgf",
    "kwota": "dsfsdgf",
    "saldo": "dsfsdgf",
    "opcja177": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "status": "ok",
    "bbdfgbb": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "bbrtbb": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "bbdfgd": "dsfsdgf"
  },
  {
    "id": "11",
    "numerkarty": "dsfsdgf",
    "operacja": "dsfsdgf",
    "kwota": "dsfsdgf",
    "saldo": "dsfsdgf",
    "opcja177": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "status": "critical",
    "bbdfgbb": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "bbrtbb": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "bbdfgd": "dsfsdgf"
  },
  {
    "id": "12",
    "numerkarty": "dsfsdgf",
    "operacja": "dsfsdgf",
    "kwota": "dsfsdgf",
    "saldo": "dsfsdgf",
    "opcja177": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "status": "critical",
    "bbdfgbb": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "bbrtbb": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "bbdfgd": "dsfsdgf"
  },
  {
    "id": "13",
    "numerkarty": "dsfsdgf",
    "operacja": "dsfsdgf",
    "kwota": "dsfsdgf",
    "saldo": "dsfsdgf",
    "opcja177": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "status": "critical",
    "bbdfgbb": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "bbrtbb": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "bbdfgd": "dsfsdgf"
  },
  {
    "id": "14",
    "numerkarty": "dsfsdgf",
    "operacja": "dsfsdgf",
    "kwota": "dsfsdgf",
    "saldo": "dsfsdgf",
    "opcja177": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "status": "critical",
    "bbdfgbb": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "bbrtbb": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "bbdfgd": "dsfsdgf"
  },
  {
    "id": "15",
    "numerkarty": "dsfsdgf",
    "operacja": "dsfsdgf",
    "kwota": "dsfsdgf",
    "saldo": "dsfsdgf",
    "opcja177": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "status": "ok",
    "bbdfgbb": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "bbrtbb": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "bbdfgbb": "dsfsdgf",
    "bbdfgd": "dsfsdgf"
  },
];

const usersHeaders = ["sklep", "status", "login", "Data", "Imię", "nawisko", "edytuj", "zobacz", "dostęp"];

const users = [
  {
    "id": "1",
    "sklep": "dsfsdgf",
    "status": "dsfsdgf",
    "login": "dsfsdgf",
    "Data": "dsfsdgf",
    "imię": "dsfsdgf",
    "Nazwisko": "dsfsdgf",
    "zoom": true

  },
  {
    "id": "2",
    "sklep": "dsfsdgf",
    "status": "dsfsdgf",
    "login": "dsfsdgf",
    "Data": "dsfsdgf",
    "imię": "dsfsdgf",
    "Nazwisko": "dsfsdgf"


  },
  {
    "id": "3",
    "sklep": "dsfsdgf",
    "status": "dsfsdgf",
    "login": "dsfsdgf",
    "Data": "dsfsdgf",
    "imię": "dsfsdgf",
    "Nazwisko": "dsfsdgf"

  },
  {
    "id": "4",
    "sklep": "dsfsdgf",
    "status": "dsfsdgf",
    "login": "dsfsdgf",
    "Data": "dsfsdgf",
    "imię": "dsfsdgf",
    "Nazwisko": "dsfsdgf"
  },
  {
    "id": "5",
    "sklep": "dsfsdgf",
    "status": "dsfsdgf",
    "login": "dsfsdgf",
    "Data": "dsfsdgf",
    "imię": "dsfsdgf",
    "Nazwisko": "dsfsdgf"
  },
  {
    "id": "6",
    "sklep": "dsfsdgf",
    "status": "dsfsdgf",
    "login": "dsfsdgf",
    "Data": "dsfsdgf",
    "imię": "dsfsdgf",
    "Nazwisko": "dsfsdgf"
  },
  {
    "id": "7",
    "sklep": "dsfsdgf",
    "status": "dsfsdgf",
    "login": "dsfsdgf",
    "Data": "dsfsdgf",
    "imię": "dsfsdgf",
    "Nazwisko": "dsfsdgf"
  },
  {
    "id": "8",
    "sklep": "dsfsdgf",
    "status": "dsfsdgf",
    "login": "dsfsdgf",
    "Data": "dsfsdgf",
    "imię": "dsfsdgf",
    "Nazwisko": "dsfsdgf"
  },
  {
    "id": "9",
    "sklep": "dsfsdgf",
    "status": "dsfsdgf",
    "login": "dsfsdgf",
    "Data": "dsfsdgf",
    "imię": "dsfsdgf",
    "Nazwisko": "dsfsdgf"
  },
  {
    "id": "10",
    "sklep": "dsfsdgf",
    "status": "dsfsdgf",
    "login": "dsfsdgf",
    "Data": "dsfsdgf",
    "imię": "dsfsdgf",
    "Nazwisko": "dsfsdgf"
  }];

const contractors = [

  {
    "id": "1",
    "nazwa": "nazwa",
    "sklep": "dlosowef",
    "symbol": "dffgft",
    "nip": "222444556",
    "adres": "kołobrzeska 12",
    "kod_pocztowy": "99-291",
    "miasto": "Gdańsk",
    "osoba_kontaktowa": "Tomek",
    "telefon": "2223333333",


  },
  {
    "id": "2",
    "nazwa": "nazwa",
    "sklep": "dlosowef",
    "symbol": "dffgft",
    "nip": "222444556",
    "adres": "kołobrzeska 12",
    "kod_pocztowy": "99-291",
    "miasto": "Gdańsk",
    "osoba_kontaktowa": "Tomek",
    "telefon": "2223333333",


  },
  {
    "id": "3",
    "nazwa": "nazwa",
    "sklep": "dlosowef",
    "symbol": "dffgft",
    "nip": "222444556",
    "adres": "kołobrzeska 12",
    "kod_pocztowy": "99-291",
    "miasto": "Gdańsk",
    "osoba_kontaktowa": "Tomek",
    "telefon": "2223333333",


  }];


const orders = {


  headers : ["id", "data założenia", "zlecający", "kierunek logistyczny", "nazwa sklepu", "status"],
  data : [

  {
    "id": "1",
    "data_założenia": "nazwa",
    "zlecający": "dlosowef",
    "kierunek logistyczny": "dffgft",
    "nazwa sklepu": "222444556",
    "status": "kołobrzeska 12"
  },
  {
    "id": "2",
    "data_założenia": "nazwa",
    "zlecający": "dlosowef",
    "kierunek logistyczny": "dffgft",
    "nazwa sklepu": "222444556",
    "status": "kołobrzeska 12"
  },
  {
    "id": "3",
    "data_założenia": "nazwa",
    "zlecający": "dlosowef",
    "kierunek logistyczny": "dffgft",
    "nazwa sklepu": "222444556",
    "status": "kołobrzeska 12"
  },
  {
    "id": "4",
    "data_założenia": "nazwa",
    "zlecający": "dlosowef",
    "kierunek logistyczny": "dffgft",
    "nazwa sklepu": "222444556",
    "status": "kołobrzeska 12"
  }
]};




app.get('/api/json', (req, res) => {
  res.send(tableHeaders);
});

app.get('/api/rows', (req, res) => {
  res.send(tableRows);
});

app.get('/api/usersHeaders', (req, res) => {
  res.send(usersHeaders);
});

app.get('/api/users', (req, res) => {
  res.send(users);
});

app.get('/api/contractors', (req, res) => {
  res.send(contractors);
});

app.get('/api/orders', (req, res) => {
  res.send(orders);
});

app.use('/', express.static(path.join(__dirname, '/../dist')));
app.get('/*', function (req, res) {
  res.sendFile(path.resolve(path.join(__dirname, '/../dist/index.html')));
});

const server = http.createServer(app);
server.listen(PORT);

console.log(`Server started, listening at: http://localhost:${PORT}...`);




