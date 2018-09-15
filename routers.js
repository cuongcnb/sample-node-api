/**
 * Handles controller execution and responds to user (API Express version).
 * Web socket has a similar handler implementation.
 * @param promise Controller Promise. I.e. getUser.
 * @param params A function (req, res, next), all of which are optional
 * that maps our desired controller parameters. I.e. (req) => [req.params.username, ...].
 */
const controllerHandler = (promise, params) => async (req, res, next) => {
    const boundParams = params ? params(req, res, next) : [];
    try {
        const result = await promise(...boundParams);
        return res.json(result || {message: 'OK'});
    } catch (error) {
        return res.status(500) && next(error);
    }
};
const c = controllerHandler; // Just a name shortener.

const graphController = require('./controllers/graph.controller');
const userController = require('./controllers/test-mongo.controller');
const helloController = require('./controllers/hello.controller');

module.exports = (app) => {

    // get page extend token
    app.get('/page-token', c(graphController.extendPageAccessToken, (req, res) => [req.query]));

    // page setting
    app.get('/hello',
        c(helloController.helloWorld, (req, res) => []));
    app.get('/users',
        c(userController.getUsers, (req, res) => [req.params.userId]));
};