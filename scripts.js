let home = () => {
    // hide other elements
    $('body > :not(#hero)').hide();
    $('#hero small').hide();
    $('#hero').appendTo('body');

    let i = 0;
    let text = 'Sid Ganti ;';
    let typewriter = () => {
        if (i < text.length) {
            $('#heading').append(text.charAt(i));

            i++;
            setTimeout(typewriter, 150);
        }
        else {
            // show elements
            $('body > :not(#hero)').slideDown('slow');
            $('#hero small').slideDown('slow');

            $('#cursor').addClass('blink');
        }
    }
    typewriter();
}

let other = () => {
    // hide other elements
    $('body > :not(#hero)').hide();
    $('#hero').hide();


    $('body > :not(#hero)').slideDown('slow');
    $('#hero').slideDown('slow');
}

$(document).ready(() => {
    page = $('body').attr('id')

    switch (page) {
        case 'home':
            home();
        case 'projects':
            // temporary
        case 'about':
        case 'four-o-four':
        default:
            other();
    }
});
