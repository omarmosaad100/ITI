$(function(){
    $(".cartoon-guy").draggable();
    $("#blackHole").droppable({
        drop: function (event, ui) {
            var draggable = ui.draggable;

            if (draggable.attr("id") == "cartoonGuy")
                draggable.hide();
        }
    });
})
