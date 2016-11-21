import _ from 'lodash';

const publishers = ($http, API, $q) => {

    let allPublishers = [];
    const get = () => {
        return $http.get(`${API.url}/api/bookpublishers`).then(resp => allPublishers = resp.data);
    };

    const getOne = (id,Authentication) => {
        const publisher = _.find(allPublishers, { id });

        if (publisher) {
            return $q.when(publisher);//para retornar una promesa 
        } else {
            return $http.get(`${API.url}/api/bookpublishers/${id}`, {
                headers: {
                    Authorization: 'Bearer ' + Authentication.getToken()
                }
            })
                .then(({data}) => {//get data of the response object
                    allPublishers.push(data);
                    return data;
                });
        }
    };

    const insertPublishers = (publisher, Authentication) => {
        return $http.post(`${API.url}/api/bookpublishers/new`, publisher, {
            headers: {
                Authorization: 'Bearer ' + Authentication.getToken()
            }
        });


    };

    const deletePublishers = (id, Authentication) => {
        return $http.delete(`${API.url}/api/bookpublishers/${id}`, {
            headers: {
                Authorization: 'Bearer ' + Authentication.getToken()
            }
        })
            .then(function (data) {
                allPublishers.forEach(function (obj, i) {
                    if (obj._id === id) {
                        var removed = allPublishers.splice(i, 1);
                    }
                });
            });
    };

    const updatePublishers = (publisher, Authentication) => {
        return $http.put(`${API.url}/api/bookpublishers/${publisher._id}`,publisher, {
            headers: {
                Authorization: 'Bearer ' + Authentication.getToken()
            }
        });
    };


    const getState = () => {
        return allPublishers;
    };

    return { insertPublishers, get, getOne, getState ,deletePublishers,updatePublishers};
};

publishers.$inject = ['$http', 'API', '$q'];

export { publishers };
