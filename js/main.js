jQuery(document).ready(function($) {
    
    $("#header #search-btn").hover(function(){//  executer lors du sorvol
        $("#header .search").fadeIn('fast');
    });

    $('#header .search #close-search').on('click', function(e){
        $("#header .search").fadeOut('fast');
    })


});     