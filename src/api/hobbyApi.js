class HobbyApi {
  static getAllHobbies() {
    return fetch('http://localhost:5000/api/v1/hobbies')
      .then(response => response.json())
      .catch(error => error)
  }
}

export default HobbyApi
