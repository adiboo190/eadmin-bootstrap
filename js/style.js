( function($) {
    "use strict";

    $( document ).ready( function() {
        $( '#sidebar-wrapper' ).niceScroll();
        $( '#sidebar-wrapper a.menu-link[data-toggle="collapse"]' ).on( 'click', function() {
            $( '#sidebar-wrapper' ).niceScroll().resize();
            // alert( 'Collapse has been triggered!' );
            $( "#sidebar-wrapper" ).mouseover(function() {
                $( "#sidebar-wrapper" ).getNiceScroll().resize();
                // alert( 'Wrapper has been mouseovered!' );
            });
        });
    });

    /**
     * Body Class Toggler
     */
    function wrapperSwitcher() {
        var $switch   = $( '#sidebar-toggler' ).prop('checked');
        var $bodywrap = $( '#app' );
        // console.log( $switch );
        if ( $switch == true ) {
            $bodywrap.removeClass( 'toggled' );
        } else {
            $bodywrap.addClass( 'toggled' );
        }
    }
    $( '.custom-switch #sidebar-toggler' ).click(function() {
        wrapperSwitcher();
    });
    wrapperSwitcher();
})(jQuery);