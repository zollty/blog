(function($) {

    var doSearch = function() {
        var value = $("#search-input").val();
        if (value) {
            var url = 'https://github.com/zollty/n/search?utf8=✓&q=' + encodeURIComponent(value) + '+path%3A_posts';
            window.open(url, '_blank');
        }
    }

    $('#search-submit').click(function() {
        doSearch();
    });

    $('#search-input').bind('keydown', function(event) {
        var event = window.event || arguments.callee.caller.arguments[0];
        if (event.keyCode == 13) {
            doSearch();
        }
    });

})(jQuery);