const todos         = require('../models/todo'),
     express        = require('express'),
     router         = express.Router(),
     todosCtrl      = require('../controllers/todo.ctrl'),
     users          =  require('../models/user'),
     jwt            = require('express-jwt'),
     profileCtrl     = require('../controllers/profile.ctrl'),
     authCtrl        = require('../controllers/authentication.ctrl'),
     books          =  require('../models/book'),
     bookCtrl     = require('../controllers/book.ctrl'),
     bookpublishers          =  require('../models/bookpublisher'),
     bookPublisherCtrl     = require('../controllers/bookpublisher.ctrl'),
     authors          =  require('../models/author'),
     authorsCtrl     = require('../controllers/author.ctrl'),
     categories          =  require('../models/category'),
     categoriesCtrl     = require('../controllers/category.ctrl'),
     languages          =  require('../models/language'),
     languagesCtrl     = require('../controllers/language.ctrl')
     config = require('../config/auth');

var auth           = jwt({
        secret: config.secret,
        userProperty: 'payload'//default name is user
    });
// Get all Todo
router.get('/todos', todosCtrl.getAllTodos);
// Create new Todo
router.post('/todos/new', todosCtrl.insertTodo);

// Delete a todo based on :_id
router.delete('/todos/delete/:_id', todosCtrl.deleteTodo);

// profile
router.get('/api/profile', auth, profileCtrl.getprofile);

// authentication
router.post('/api/register', authCtrl.register);
router.post('/api/login', authCtrl.login);
router.get('/api/users', auth,authCtrl.getAllUsers);
//books
router.post('/api/books/new', auth, bookCtrl.insertBook);
router.get('/api/books', bookCtrl.getAllBooks);
router.get('/api/books/:_id', bookCtrl.getBook);
router.delete('/api/books/:_id', auth,bookCtrl.deleteBook);
router.put('/api/books/:_id', auth,bookCtrl.updateBook);

//Book Publisher
router.post('/api/bookpublishers/new', auth, bookPublisherCtrl.insertBookPublishers);
router.get('/api/bookpublishers', bookPublisherCtrl.getAllBookPublishers);
router.get('/api/bookpublishers/:_id', auth,bookPublisherCtrl.getPublisher);
router.delete('/api/bookpublishers/:_id',auth,bookPublisherCtrl.deleteBookPublishers);
router.put('/api/bookpublishers/:_id', auth,bookPublisherCtrl.updateBookPublishers);

//Authors
router.post('/api/authors/new', auth, authorsCtrl.insertAuthors);
router.get('/api/authors', authorsCtrl.getAllAuthors);
router.get('/api/authors/:_id', auth,authorsCtrl.getAuthor);
router.delete('/api/authors/:_id',auth,authorsCtrl.deleteAuthors);
router.put('/api/authors/:_id', auth,authorsCtrl.updateAuthors);

//Categories
router.post('/api/categories/new', categoriesCtrl.insertCategories);
router.get('/api/categories', categoriesCtrl.getAllCategories);
router.get('/api/categories/:_id', auth,categoriesCtrl.getCategory);
router.delete('/api/categories/:_id',auth,categoriesCtrl.deleteCategories);
router.put('/api/categories/:_id', auth,categoriesCtrl.updateCategories);

//Languages
router.post('/api/languages/new', auth, languagesCtrl.insertLanguages);
router.get('/api/languages', languagesCtrl.getAllLanguages);
router.get('/api/languages/:_id', auth,languagesCtrl.getLanguage);
router.delete('/api/languages/:_id',auth,languagesCtrl.deleteLanguages);
router.put('/api/languages/:_id', auth,languagesCtrl.updateLanguages);

module.exports = router;