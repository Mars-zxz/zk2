require(['jquery', 'handlebars'], function($, handlebars) {
    var lists = $('#tpl').html();
    var template = handlebars.cpmpile(lists);
    var data = {
        //json数据
    }
    var html = template(data);
    $('.box').html(html);
    $('.reduce').on('click', function() {
        $(this).css('display', 'none').next().css('display', 'inline-block').siblings()
    })
    $('.plus').on('click', function() {
        $(this).css('display', 'none').prev().css('display', 'inline-block');
        $(this).nextAll().css('display', 'block');
    })
})