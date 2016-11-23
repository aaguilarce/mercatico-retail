'use strict';

const authentication = (API, $http, $window) => {

  let allUsers = [];

  const saveToken = (token) => {
    $window.localStorage['authorization-token'] = token;
  };

  const getToken = () => {
    return $window.localStorage['authorization-token'];
  };

  const logout = () => {
    $window.localStorage.removeItem('authorization-token');
  };

  const isLoggedIn = () => {
    let token = getToken();
    let payload;

    if (token) {
        payload = token.split('.')[1];
        payload = $window.atob(payload);
        payload = JSON.parse(payload);

        return payload.exp > Date.now() / 1000;
    }
    else {
        return false;
    }
  };

  const currentUser = () => {
    if (isLoggedIn()) {
      let token = getToken();
      let payload = token.split('.')[1];

      payload = $window.atob(payload);
      payload = JSON.parse(payload);

      return {
        email: payload.email,
        name: payload.name,
        type: payload.type
      };
    }
  };

  const register = (user) => {
    return $http.post(`${API.url}/api/register`, user).success((data) => {
      saveToken(data.token);
    });
  };

  const login = (user) => {
    return $http.post(`${API.url}/api/login`, user).success((data) => {
      saveToken(data.token);
    });
  };

  const getProfile = () => {
    return $http.get(`${API.url}/api/profile`, {
      headers: {
        Authorization: 'Bearer '+ getToken()
      }
    });
  };

  const getUsers = (Authentication) => {
    return $http.get(`${API.url}/api/users`, {
      headers: {
        Authorization: 'Bearer ' + Authentication.getToken()
      }
    }).then(resp => allUsers = resp.data);
  };

  const getState = () => {
    return allUsers;
  };

  return {saveToken, getToken, logout, isLoggedIn, currentUser, register, login, getProfile ,getUsers,getState};
};

authentication.$inject = ['API', '$http','$window'];

export {authentication};
