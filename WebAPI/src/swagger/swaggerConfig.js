const swaggerJSDoc = require('swagger-jsdoc');

// swagger definition
const swaggerDefinition = {
    info: {
        title: 'Twitter API',
        version: '1.0.0',
        description: 'RESTful API for Twitter',
    },
    host: 'localhost:3000',
    basePath: '/',
};

// options for the swagger docs
const options = {
    // import swaggerDefinitions
    swaggerDefinition: swaggerDefinition,
    // path to the API docs
    apis: ['../../routes.js'],
};

// const swaggerSpec = 
module.exports = swaggerJSDoc(options);;