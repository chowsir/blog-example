$(function(){
    //event handlers
    var showBlog = function(){
        $('.container > section').hide();
        $('article > p').hide();
        $('#blog').css('display', 'inline-block');

        //only show previews of blog articles
        $('#blog > article').show();
        $('article > .preview').show();
        $('.read-more').show();
    }.bind(this);

    var showAbout = function(){
        $('.container > section').hide();
        $('#about').css('display', 'inline-block');
    }.bind(this);

    var showClasses = function(){
        $('.container > section').hide();
        $('#classes').css('display', 'inline-block');
    }.bind(this);
    
    var followLink = function(evt){
        var el = $(evt.target);
        if(el.prop('tagName') === 'A'){
            var articleId = el.attr('href');
        }else if(el.prop('tagName') === 'SPAN'){
            var articleId = el.siblings('h2').children(0).attr('href');
        }else if(el.prop('tagName') === 'LI'){
            var articleId = el.children(0).attr('href');
        }
        var $articleId = $(articleId);

        //hide all content 
        $('.container > section').hide();
        $('#blog > article').hide();
        $articleId.children('.read-more').hide();

        //show only the content for the article clicked on 
        $articleId.show();
        $('#blog').css('display', 'inline-block');
        $articleId.children('p').show();
    }.bind(this);

    var fakeServerReq = function(){
        $('button').hide();
        $('#jquery-msg').show();
        console.log('<button> clicked');
        console.log('if this app had a server, information indicating that the blog post had been "liked" would be sent to the server right now.');
    }.bind(this);

    var hideJQueryMsg = function(){
        $('#jquery-msg').hide();
        $('button').show();
        console.log('<p> with id "jquery-msg" clicked');
    }.bind(this);

    //show and hide different 'pages' based on the link clicked
    $('.blog-link').on('click', showBlog);
    $('.about-link').on('click', showAbout);
    $('.classes-link').on('click', showClasses);

    //go to a 'page' containing a single blog post
    $('#sidebar li').on('click', followLink);
    $('article h2').on('click', followLink);
    $('article .read-more').on('click', followLink);

    //show and hide jQuery message
    $('button').on('click', fakeServerReq);
    $('#jquery-msg').on('click', hideJQueryMsg);
})