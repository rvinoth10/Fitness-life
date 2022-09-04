$(document).ready(function() {
    $('.counter').counterUp({
        Time: 4000,
        Delay: 10
    });
    $("#top").mouseenter(function() {
        $(this).css({
            transform: 'rotate(360deg)',
            Transition: 'transform 2s ease'
        }, "slow");
    });
    $("#top").mouseleave(function() {
        $(this).css({
            transform: 'rotate(-360deg)',
            Transition: 'transform 1s ease'
        }, "slow");
    });

});