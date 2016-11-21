import _ from 'lodash';

const authentication = ($http, API, $window) => {

    let allUsers=[];

    const saveToken = function (token) {
        $window.localStorage['authorization-token'] = token;
    };

    const getToken = function () {
        return $window.localStorage['authorization-token'];
    };

    const logout = function () {
        $window.localStorage.removeItem('authorization-token');
    };

    const isLoggedIn = function () {
        var token = getToken();
        var payload;

        if (token) {
            payload = token.split('.')[1];
            payload = $window.atob(payload);
            payload = JSON.parse(payload);

            return payload.exp > Date.now() / 1000;
        } else {
            return false;
        }
    };

    const currentUser = function () {
        if (isLoggedIn()) {
            var token = getToken();
            var payload = token.split('.')[1];
            payload = $window.atob(payload);
            payload = JSON.parse(payload);
            return {
                email: payload.email,
                name: payload.name,
                type:payload.type
            };
        }
    };

    const register = function (user) {
        return $http.post(`${API.url}/api/register`, user).success(function (data) {
            saveToken(data.token);
        });
    };

    const login = function (user) {
        return $http.post(`${API.url}/api/login`, user).success(function (data) {
            saveToken(data.token);
        });
    };

    const getProfile = function () {
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

    return { saveToken, getToken, logout, isLoggedIn, currentUser, register, login, getProfile ,getUsers,getState};
};

authentication.$inject = ['$http', 'API','$window'];

export { authentication };
