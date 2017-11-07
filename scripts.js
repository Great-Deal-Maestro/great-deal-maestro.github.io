jQuery(function($){
    // $(document).mouseup(function (e){ // событие клика по веб-документу
    //     var div1 = $("#enter_form");
    //     var div2 = $("#registration_form"); // тут указываем ID элемента
    //     if ((div1.is(e.target) || div1.has(e.target).length > 0) || (div2.is(e.target) || div2.has(e.target).length > 0)) {
    //             change_property('background_form', 'display','block');
    //     }
    //     else {
    //         change_property('background_form', 'display','none');
    //     }
    // });

    $('#profile_button').click(function(event) {
        $("#menu").toggleClass('show');
    });
});

// function change_property(element, property, value) {
//     var elem=document.getElementById(element).style;
//     if (property == 'display')
//     {elem.display = value;}
//     else if (property == 'background')
//     {elem.background = value;}
//     elem=document.getElementById(element).style;
//     if (property == 'display')
//     {elem.display = value;}
//     else if (property == 'background')
//     {elem.background = value;}
// }