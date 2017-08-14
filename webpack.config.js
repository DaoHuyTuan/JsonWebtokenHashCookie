
module.exports = {
    entry:  './app.js',
    output:{
        filename: './public/bundle.js'
    },
    
    node: {
        fs:"empty",
        net:"empty"
    },
    stats: {
        warnings: false
      }
   
};