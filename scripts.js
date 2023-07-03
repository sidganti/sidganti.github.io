$(document).ready(() => {
    // hide other elements
    $('body > :not(#hero)').hide();
    $('#hero small').hide();
    $('#hero').appendTo('body');

    let i = 0;
    let text = 'SidGanti ;';
    let typewriter = () => {
        if (i < text.length) {
            $('#heading').append(text.charAt(i));

            i++;
            setTimeout(typewriter, 250);
        }
        else {
            // show elements
            $('body > :not(#hero)').slideDown('slow');
            $('#hero small').slideDown('slow');
        }
    }
    typewriter();
});
