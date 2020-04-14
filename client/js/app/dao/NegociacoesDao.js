import { connectionIndexDB } from "../ConnectionDB/index.js";
import { Negociacao } from "../models/Negociacao.js";

class NegociacaoDao {
  constructor(connection) {
    this._connnection = connection;
    this._store = "negociacoes"; // dados do banco
  }

  adiciona(negociacao) {
    return new Promise((resolve, reject) => {
      let transaction = this._connection.transaction(
        [this._store],
        "readwrite"
      );

      let store = transaction.objectStore(this._store);

      let negociacao = new Negociacao(new Date(), 1, 200);

      let request = store.add(negociacao);

      request.onsuccess = (e) => {
        resolve("adicionado com sucesso");
      };

      request.onerror = (e) => {
        console.log(e.target.error);
        reject("Não foi possível negociar a negociação");
      };
    });
  }

  listaTodos() {
    return new Promise((resolve, reject) => {
      let transaction = this._connection.transaction(
        [this._store],
        "readwrite"
      );
      let store = transaction.objectStore(this._store);
      let cursor = store.openCursor();
      let negociacoes = [];
      cursor.onsuccess = (e) => {
        let atual = e.target.result;
        if (atual) {
          let dado = atual.value;
          negociacoes.push(
            new Negociacao(dado._data, dado._quantidade, dado._valor)
          );
          atual.continue();
        } else {
          console.log(negociacoes);
        }
      };
      cursor.onerror = (e) => {
        console.log(e.target.error.name);
      };
    });
  }
}

// Connection create
const connection = new connectionIndexDB().getConnection();

// Instance of NegociacaoDao
let dao = new NegociacaoDao(connection);

// Examples add Negociacao
let negociacao = new Negociacao(new Date(), 1, 100);
dao.adiciona(negociacao).then(sucess, error);

// Example list of Negociacao
dao.listaTodos().then(sucess, error);

function sucess() {
  console.log("sucess");
}

function error(e) {
  throw new Error(e);
}
