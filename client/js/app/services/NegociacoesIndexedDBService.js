import { IndexedDBService } from './IndexedDBService';

const NEGOCIACAO_OBJECT_STORE = "negociacoes";

export class NegociacoesIndexedDBService {

  constructor() {
    this._indexedDBService = new IndexedDBService([
      {
        objectStoreName: NEGOCIACAO_OBJECT_STORE,
        keyGenerator: IndexedDBService.DEFAULT_KEY_GENERATOR()
      }
    ]);
  }

  adiciona(negociacao) {
    this._indexedDBService
      .overObjectStore(NEGOCIACAO_OBJECT_STORE)
      .accessMode({read : true, write : true})
      .doInsert(negociacao)
      .then(negociacaoChave => {
        console.log("Negociação inserida com sucesso, e a chave de identificação resultante é; ", negociacaoChave);
      })
      .catch(erro => {
        console.error("Erro an tentar inserir negociação; ", erro);
      });
  }
}
