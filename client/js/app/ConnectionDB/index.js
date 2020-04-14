export class connectionIndexDB {
  getConnection() {
    var connection;
    var openRequest = window.indexedDB.open("aluraframe", 4);
    openRequest.onupgradeneeded = (e) => {
      console.log("Cria ou altera um banco já existente");
      let minhaConnection = e.target.result;
      if (minhaConnection.objectStoreNames.contains("negociacoes")) {
        minhaConnection.deleteObjectStore("negociacoes");
      }
      minhaConnection.createObjectStore("negociacoes", {
        autoIncrement: true,
      });
    };
    openRequest.onsuccess = (e) => {
      console.log("Conexão obtida com sucesso");

      connection = e.target.result;
      return connection;
    };
    openRequest.onerror = (e) => {
      console.log(e.target.error);
    };
  }
}

export default connectionIndexDB;
