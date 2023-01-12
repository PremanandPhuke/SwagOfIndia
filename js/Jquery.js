
$(document).ready(function(){

    $('.question').click(function () {

        //toggle indicator from + to - & from - to +
        $(this).closest('.question').find('.icon').text($(this).find('.icon').text() == '+' ? '-' : '+');
        //toggle content in question
        //toggle happens with annimation at 0.3 sec.
        $(this).find('.content').toggle(300);

    });


    $('[class^="displayStar"]').prepend(function () {
    
        var c = $(this).attr("class");
        var num = parseInt(c.charAt(11));
        var x = '';
        
        for (let i = 0; i < num; i++) {
            x = x + '<img src="img/Path 9645.png" height="22px">';
        }
     
        for (let i = 0; i < 5 - num; i++) {
            x = x + '<img src="img/Path -5.png" height="22px">';
        }
        return x;
    })

    CartCalculation();
})

