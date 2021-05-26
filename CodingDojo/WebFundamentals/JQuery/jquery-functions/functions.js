$('#addClass button').click(function(){
    $('#addClass-p').addClass('red');
    $('h1').toggle();
});

$('#slideToggle button').click(function(){
    $('img').slideToggle();
});

$('#append button').click(function(){
    $('#append-p').append('<p>hello</p>');
});