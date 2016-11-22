'use strict';

import _ from 'lodash';

const categories = (Authentication, API, $http, $q) => {

  let allCategories = [];

  const get = () => {
    return $http.get(`${API.url}/api/categories`).then(resp => allCategories = resp.data);
  };

  const getOne = (id,Authentication) => {
    const category = _.find(allCategories, { id });

    if (category) {
        return $q.when(category);
    }
    else {
      return $http.get(`${API.url}/api/categories/${id}`, {
        headers: {
          Authorization: 'Bearer ' + Authentication.getToken()
        }
      }).then(({data}) => {
          allCategories.push(data);

          return data;
      });
    }
  };

  const insertCategory = (category, Authentication) => {
    return $http.post(`${API.url}/api/categories`, category, {
      headers: {
        Authorization: 'Bearer ' + Authentication.getToken()
      }
    });
  };

  const deleteCategory = (id, Authentication) => {
    return $http.delete(`${API.url}/api/categories/${id}`, {
      headers: {
        Authorization: 'Bearer ' + Authentication.getToken()
      }
    }).then((data) => {
      allCategories.forEach((obj, i) => {
        if (obj._id === id) {
          let removed = allCategories.splice(i, 1);
        }
      });
    });
  };

  const updateCategories = (category, Authentication) => {
    return $http.put(`${API.url}/api/categories/${category._id}`, { name: category.name }, {
      headers: {
        Authorization: 'Bearer ' + Authentication.getToken()
      }
    });
  };

  const getState = () => {
    return allCategories;
  };

  return {get, getOne, insertCategory, deleteCategory, updateCategory, getState};
};

categories.$inject = ['Authentication', 'API', '$http', '$q'];

export {categories};
