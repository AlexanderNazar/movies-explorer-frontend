class MainApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
      return Promise.reject(res.status)
  }

  registration(inputValueOject) {
    return fetch(this._baseUrl + `/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(inputValueOject)
    })
      .then(this._handleResponse)
  }

  login(inputValueOject) {
    return fetch(this._baseUrl + `/signin`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify(inputValueOject)
    })
      .then(this._handleResponse)
  }

  logout() {
    return fetch(this._baseUrl + `/signout`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
    })
      .then(this._handleResponse)
  }

  getUserInfo() {
    return fetch(this._baseUrl + `/users/me`, {
      headers: this._headers,
      credentials: 'include',
    })
      .then(this._handleResponse)
  }

  changeUserInfo(inputValueOject) {
    return fetch(this._baseUrl + `/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify(inputValueOject)
    })
    .then(this._handleResponse)
  }
}

  const mainApi = new MainApi({
    baseUrl: 'https://api.diploma-nazarov.nomoredomains.icu',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  export default mainApi;
