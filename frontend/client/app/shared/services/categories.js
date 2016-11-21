import _ from 'lodash';

const categories = ($http, API, $q) => {

    let allCategories = [];


    const get = () => {
        return $http.get(`${API.url}/api/categories`).then(resp => allCategories = resp.data);
    };

    const getOne = (id,Authentication) => {
        const category = _.find(allCategories, { id });

        if (category) {
            return $q.when(category);//para retornar una promesa 
        } else {
            return $http.get(`${API.url}/api/categories/${id}`, {
                headers: {
                    Authorization: 'Bearer ' + Authentication.getToken()
                }
            })
                .then(({data}) => {//get data of the response object
                    allCategories.push(data);
                    return data;
                });
        }
    };

    const insertCategories = (category, Authentication) => {
        return $http.post(`${API.url}/api/categories/new`, category, {
            headers: {
                Authorization: 'Bearer ' + Authentication.getToken()
            }
        });


    };

     const deleteCategories = (id, Authentication) => {
        return $http.delete(`${API.url}/api/categories/${id}`, {
            headers: {
                Authorization: 'Bearer ' + Authentication.getToken()
            }
        })
            .then(function (data) {
                allCategories.forEach(function (obj, i) {
                    if (obj._id === id) {
                        var removed = allCategories.splice(i, 1);
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

    return { insertCategories, get, getOne, getState,deleteCategories ,updateCategories};
};

categories.$inject = ['$http', 'API', '$q'];

export { categories };
