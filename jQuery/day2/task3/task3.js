$(function(){
    $(".cartoon-guy").draggable(); //activated dragging for the cartoon-guy
    $("#blackHole").droppable({ // now black hole can be dropped into
        drop: function (event, ui) {
            var draggable = ui.draggable;

            // if the black hole encounters a dropped item on it with id similar to caroon's, hide cartoon
            if (draggable.attr("id") == "cartoonGuy")
                draggable.hide();
        }
    });
})