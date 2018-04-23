require.config({
    baseUrl: './static/js/lib',
    paths: {
        'jquery': 'jquery-1.10.1.min',
        'handlebars': 'handlebarrs-v4.0.11',
        'index': '../page/index'
    }
})

require(['index'], function(index) {

})