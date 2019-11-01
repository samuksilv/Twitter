const colors = require('colors');
const dotenv = require('dotenv');
const path = require('path');

//configura somente as váriaveis de ambeinete quando estiver em dev
if (process.env.NODE_ENV === 'development') {

    const result = dotenv.config({ path: path.resolve(__dirname, 'dev.env') });

    if (result.error)
        throw new Error(`Fail on load dev environment. Error =>  ${result.error.message}`.red);        
}



