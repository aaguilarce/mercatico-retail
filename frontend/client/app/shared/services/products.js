'use strict';

import _ from 'lodash';

const products = (Authentication, API, $http, $q) => {

  let allProducts = [];

  const get = () => {
    return $http.get(`${API.url}/api/products`).then(resp => allProducts = resp.data);
  };

  const getOne = (id) => {
    const product = _.find(allProducts, { id });

    if (product) {
      return $q.when(product);
    }
    else {
      return $http.get(`${API.url}/api/products/${id}`).then((data) => {
        allProducts.push(data);
        return data;
      });
    }
  };

  const insertProduct = (product) => {
    return $http.post(`${API.url}/api/products`, product, {
      headers: {
        Authorization: 'Bearer ' + Authentication.getToken()
      }
    }).then((data) => {
      allProducts.push(product);
    });
  };

  const deleteProduct = (id) => {
    const headers = {
      Authorization: 'Bearer ' + Authentication.getToken()
    };

    return $http.delete(`${API.url}/api/products/${id}`, headers).then((data) => {
      allProducts.forEach((obj, i) => {
        if (obj._id === id) {
          let removed = allProducts.splice(i, 1);
        }
      });
    });
  };

  const updateProduct = (product) => {
    const headers = {
      Authorization: 'Bearer ' + Authentication.getToken()
    };

    return $http.put(`${API.url}/api/products/${product._id}`, product, headers);
  };

  const getState = () => {
    return allProducts;
  };

  const imgToBase64 = (image) =>{
    const deferred = $q.defer();
    const reader = new FileReader();

    reader.readAsDataURL(image[0]);

    reader.onload = () => {
      deferred.resolve(reader.result);
    };

    reader.onerror = (error) => {
      deferred.reject(error);
    };

    return deferred.promise;
  };

  return {get, getOne, insertProduct, deleteProduct, updateProduct, getState, imgToBase64};
};

products.$inject = ['Authentication', 'API', '$http', '$q'];

export {products};
