'use strict';

import _ from 'lodash';

const sellers = (Authentication, API, $http, $q) => {

  let allSellers = [];

  const get = () => {
    return $http.get(`${API.url}/api/sellers`).then(resp => allSellers = resp.data);
  };

  const getOne = (id, Authentication) => {
    const seller = _.find(allSellers, (seller) => { return seller._id == id; });

    if (seller) {
        return $q.when(seller);
    }
    else {
      return $http.get(`${API.url}/api/sellers/${id}`, {
        headers: {
          Authorization: 'Bearer ' + Authentication.getToken()
        }
      }).then(({data}) => {
          allSellers.push(data);

          return data;
      });
    }
  };

  const insertSeller = (seller, Authentication) => {
    return $http.post(`${API.url}/api/sellers`, seller, {
      headers: {
        Authorization: 'Bearer ' + Authentication.getToken()
      }
    });
  };

  const deleteSeller = (id, Authentication) => {
    return $http.delete(`${API.url}/api/sellers/${id}`, {
      headers: {
        Authorization: 'Bearer ' + Authentication.getToken()
      }
    }).then((data) => {
      allSellers.forEach((obj, i) => {
        if (obj._id === id) {
          let removed = allSellers.splice(i, 1);
        }
      });
    });
  };

  const updateSeller = (seller, Authentication) => {
    return $http.put(`${API.url}/api/sellers/${seller._id}`, seller, {
      headers: {
        Authorization: 'Bearer ' + Authentication.getToken()
      }
    });
  };

  const getState = () => {
    return allSellers;
  };

  return {get, getOne, insertSeller, deleteSeller, updateSeller, getState};
};

sellers.$inject = ['Authentication', 'API', '$http', '$q'];

export {sellers};
