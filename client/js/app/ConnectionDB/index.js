export class connectionIndexDB {
  getConnection() {
    var openRequest = window.indexedDB.open("aluraframe", 4);
    return openRequest;
  }
}
export default connectionIndexDB;
