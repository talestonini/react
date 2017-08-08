class CatApi {
  static getAllCats() {
    return fetch('http://localhost:5000/api/v1/cats')
      .then(response => response.json())
      .catch(error => error)
  }
}

export default CatApi
