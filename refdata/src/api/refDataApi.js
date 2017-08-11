const REFDATA_SERVICE_CTX = 'http://localhost:4569/api/referenceservice'

class RefDataApi {
  static getRefData(key) {
    return fetch(`${REFDATA_SERVICE_CTX}/reference/properties/${key}`)
      .then(response => response.json())
      .catch(error => error)
  }
}

export default RefDataApi
