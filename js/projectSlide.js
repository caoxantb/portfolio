function moveTo(node) {

    let curr = null;
    if (node == "next") {
        curr = $(".current").next();
    } else if (node == "prev") {
        curr = $(".current").prev();
    } else {
        curr = node;
    }

    var next = $(curr).next();
    var prev = $(curr).prev();
    var nextNext = $(next).next()
    var prevPrev = $(prev).prev()

    $(curr).removeClass().addClass("current");
    $(prev).removeClass().addClass("prev");
    $(next).removeClass().addClass("next");
    $(nextNext).removeClass().addClass("nextNext");
    $(prevPrev).removeClass().addClass("prevPrev");
    $(nextNext).nextAll().removeClass().addClass("hideNext");
    $(prevPrev).prevAll().removeClass().addClass("hidePrev");
}

// $(document).keydown(e => {
//     switch(e.which) {
//         case 37: // left
//         moveTo('prev');
//         break;

//         case 39: // right
//         moveTo('next');
//         break;
//     }
//     e.preventDefault();
// });

$('.carousel div img').click(function(e) {
    moveTo($(this).parent());
});

$('.arrow-left').click(function() {
    moveTo('prev');
});
  
$('.arrow-right').click(function() {
    moveTo('next');
});