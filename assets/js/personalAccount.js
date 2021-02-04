$(document).ready(function(){


    <!-- табы -->
    $('ul.radio_block').on('click', 'li:not(.active)', function() {
        $(this)
            .addClass('active').siblings().removeClass('active')
    });
    <!-- конец табы -->





});
