class RefDataApi {
  static getRefData(key) {
    return fetch(`http://localhost:4569/api/referenceservice/reference/properties/${key}`)
      .then(response => response.json())
      .catch(error => error)
  }
}

export default RefDataApi
