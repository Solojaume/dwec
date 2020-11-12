const path = require('path');
module.export = {
    mode: 'development',

    entry:path.resolve(__dirname,'src','index.js'),

    ouput:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    }
}