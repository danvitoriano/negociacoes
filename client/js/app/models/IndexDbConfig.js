class IndexDbConfig {
    constructor() {
        this.connection = null;
        this.openRequest = window.indexedDB.open("negociacoes", 4);
        this.openRequest.onupgradeneeded = e => {
            console.log("Cria ou altera um banco já existente");
            let minhaConnection = e.target.result;
            if (!minhaConnection.objectStoreNames.contains("negociacoes")) {
                minhaConnection.createObjectStore("negociacoes", {
                    autoIncrement: true
                });
            }
            connection = e.target.result;
        };
        this.openRequest.onsuccess = e => {
            console.log("Conexão obtida com sucesso");
            connection = e.target.result;
        };
        this.openRequest.onerror = e => {
            console.log(e.target.error);
        };
    };

    gravar(negociacao) {
        let transaction = connection.transaction(["negociacoes"], "readwrite");

        let store = transaction.objectStore("negociacoes");



        let request = store.add(negociacao);

        request.onsuccess = e => {
            console.log("Negociação incluida com sucesso");
        };

        request.onerror = e => {
            console.log("Não foi possível incluir a negociação");
        };
    }

    deletaTabela() {
        console.log("entrou no deletaTabela");
        let transaction = connection.transaction(["negociacoes"], "readwrite");
        let objectStore = transaction.objectStore("negociacoes");
        let objectStoreRequest = objectStore.clear();
        objectStoreRequest.onerror = e => {
            console.log("erro na deleção da tabela");
        };
        console.log("saiu do deletaTabela");
    }

    listaTodos() {
        let transaction = connection.transaction(["negociacoes"], "readwrite");

        let store = transaction.objectStore("negociacoes");

        let cursor = store.openCursor();

        let negociacoes = [];

        cursor.onsuccess = e => {
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

        cursor.onerror = e => {
            console.log(e.target.error.name);
        };
    }
}
module.exports = new IndexDbConfig()