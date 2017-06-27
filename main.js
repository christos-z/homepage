/**
 * Created by chris on 27/06/2017.
 */
$(window).load(function() {
    $('.social i').show();

    var githubPos = $('#github').position();
    var linkedinPos = $('#linkedin').position();
    var cvPos = $('#cv').position();
    var imgPos = $('.me').position();

    $('.social i').css({
        position: 'absolute',
        zIndex: '1',
        top: imgPos.top + 100,
        left: 'calc(50% - 25px)'
    });

    setTimeout(function() {
        $('#github').animate({
            top: githubPos.top,
            left: githubPos.left
        }, 500);
    }, 250);

    setTimeout(function() {
        $('#github').animate({
            top: githubPos.top,
            left: githubPos.left
        }, 250);

        $('#linkedin').animate({
            top: linkedinPos.top + 10,
            left: linkedinPos.left
        }, 500);
    }, 500);

    setTimeout(function() {
        $('#linkedin').animate({
            top: linkedinPos.top,
            left: linkedinPos.left
        }, 250);

        $('#cv').animate({
            top: cvPos.top + 10,
            left: cvPos.left - 3
        }, 500);
    }, 750);

    setTimeout(function() {
        $('#cv').animate({
            top: cvPos.top,
            left: cvPos.left
        }, 250);

    }, 1000);


    setTimeout(function() {
        $('#github, #linkedin, #cv').css({
            position: 'relative',
            zIndex: '1',
            top: 'initial',
            left: 'initial'
        });
    }, 1550);
});