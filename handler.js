// aonde gostariamos de usar modulos ES6, precisamos primeiro importar a dependencia do ESM
// apos isso, vamos efetuar o require dos arquivos .js que estão como ES6 da forma abaixo.
// Com isso, conseguimos efetuar a importação sem problemas.
require = require("esm")(module/* , options */)
const { dateTime } = require('./dateTime.js');

module.exports.whatday = (event, context, callback) => {
    const dateTimeInstance = new dateTime();
    const message = `Today is ${dateTimeInstance.today()} and yesterday was ${dateTimeInstance.yesterday()}`;

    const response = {
        statusCode: 200,
        body: message,
        headers: {
          'Content-Type': 'text/json'
        }
    };

    callback(null, response);
};