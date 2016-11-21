import _ from 'lodash';

const authors = ($http, API, $q) => {

    let allAuthors = [];

    const get = () => {
        return $http.get(`${API.url}/api/authors`).then(resp => allAuthors = resp.data);
    };

    const getOne = (id,Authentication) => {
        const author = _.find(allAuthors, { id });

        if (author) {
            return $q.when(author);//para retornar una promesa 
        } else {
            return $http.get(`${API.url}/api/authors/${id}`, {
                headers: {
                    Authorization: 'Bearer ' + Authentication.getToken()
                }
            })
                .then(({data}) => {//get data of the response object
                    allAuthors.push(data);
                    return data;
                });
        }
    };

    const insertAuthors = (author, Authentication) => {
        return $http.post(`${API.url}/api/authors/new`, author, {
            headers: {
                Authorization: 'Bearer ' + Authentication.getToken()
            }
        });


    };

    const deleteAuthors = (id, Authentication) => {
        return $http.delete(`${API.url}/api/authors/${id}`, {
            headers: {
                Authorization: 'Bearer ' + Authentication.getToken()
            }
        })
            .then(function (data) {
                allAuthors.forEach(function (obj, i) {
                    if (obj._id === id) {
                        var removed = allAuthors.splice(i, 1);
                    }
                });
            });
    };

    const updateAuthors = (author, Authentication) => {
        return $http.put(`${API.url}/api/authors/${author._id}`, { name: author.name }, {
            headers: {
                Authorization: 'Bearer ' + Authentication.getToken()
            }
        });
    };


    const getState = () => {
        return allAuthors;
    };

    return { insertAuthors, get, getOne, getState,deleteAuthors,updateAuthors };
};

authors.$inject = ['$http', 'API', '$q'];

export { authors };
