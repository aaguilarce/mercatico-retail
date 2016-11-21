import _ from 'lodash';

const books = ($http, API, $q) => {

  let allBooks = [];//se modifica allTodos xq el factory tiene más vida en la app que el controller

  const get = (Authentication) => {
    return $http.get(`${API.url}/api/books`).then(resp => allBooks = resp.data);
  };

  const getOne = (id) => {
    const book = _.find(allBooks, { id });

    if (book) {
      return $q.when(book);//para retornar una promesa 
    } else {
      return $http.get(`${API.url}/api/books/${id}`)
        .then(({data}) => {//get data of the response object
          allBooks.push(data);
          return data;
        });
    }
  };

  const BookImage64 = (image) => {
    //convert file to base 64 
    var deferred = $q.defer();
    const reader = new FileReader();
    reader.readAsDataURL(image[0]);
    reader.onload = function () {
      deferred.resolve(reader.result);
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
      deferred.resolve(error);
    };

    return deferred.promise;

  };

  const insertBooks = (book, Authentication) => {
    return $http.post(`${API.url}/api/books/new`, book, {
      headers: {
        Authorization: 'Bearer ' + Authentication.getToken()
      }
    });
  };

  const deleteBooks = (id, Authentication) => {
    return $http.delete(`${API.url}/api/books/${id}`, {
      headers: {
        Authorization: 'Bearer ' + Authentication.getToken()
      }
    })
      .then(function (data) {
        allBooks.forEach(function (obj, i) {
          if (obj._id === id) {
            var removed = allBooks.splice(i, 1);
          }
        });
      });
  };

  const updateBooks = (book, Authentication) => {
    return $http.put(`${API.url}/api/books/${book._id}`, book, {
      headers: {
        Authorization: 'Bearer ' + Authentication.getToken()
      }
    });
  };


  const getState = () => {
    return allBooks;
  };

  return { insertBooks, BookImage64, get, getOne, getState, deleteBooks ,updateBooks};
};

books.$inject = ['$http', 'API', '$q'];

export { books };
