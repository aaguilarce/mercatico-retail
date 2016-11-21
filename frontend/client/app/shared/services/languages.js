import _ from 'lodash';

const languages = ($http, API, $q) => {

    let allLanguages = [];

    const get = () => {
        return $http.get(`${API.url}/api/languages`).then(resp => allLanguages = resp.data);
    };

    const getOne = (id, Authentication) => {
        const language = _.find(allLanguages, { id });

        if (language) {
            return $q.when(language);//para retornar una promesa 
        } else {
            return $http.get(`${API.url}/api/languages/${id}`, {
                headers: {
                    Authorization: 'Bearer ' + Authentication.getToken()
                }
            })
                .then(({data}) => {//get data of the response object
                    allLanguages.push(data);
                    return data;
                });
        }
    };

    const insertLanguages = (language, Authentication) => {
        return $http.post(`${API.url}/api/languages/new`, language, {
            headers: {
                Authorization: 'Bearer ' + Authentication.getToken()
            }
        });


    };

    const deleteLanguages = (id, Authentication) => {
        return $http.delete(`${API.url}/api/languages/${id}`, {
            headers: {
                Authorization: 'Bearer ' + Authentication.getToken()
            }
        })
            .then(function (data) {
                allLanguages.forEach(function (obj, i) {
                    if (obj._id === id) {
                        var removed = allLanguages.splice(i, 1);
                    }
                });
            });
    };

    const updateLanguages = (language, Authentication) => {
        return $http.put(`${API.url}/api/languages/${language._id}`, { name: language.name }, {
            headers: {
                Authorization: 'Bearer ' + Authentication.getToken()
            }
        });
    };

    const getState = () => {
        return allLanguages;
    };

    return { insertLanguages, get, getOne, getState, deleteLanguages,  updateLanguages };
};

languages.$inject = ['$http', 'API', '$q'];

export { languages };
