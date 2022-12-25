let bandsVal;
$(function(){
    $.ajax("rockbands.json", { //open the json file
        type:"GET",
        dataType:'json',
        contentType: 'application/json',
        success: function(dataObj){

            $("#bands").append($("<option>", { //if the opening succeed, append the initial option
              value: "",
              text: "Select an option"
            }));

            for (const bandName in dataObj) { //then append more options with band names
                $("#bands").append($("<option>", {
                  value: bandName,
                  text: bandName
                }));
            }
            
            $("#bands").on("change", function() { //however, if the selected band changes, artists should be REpopulated
              bandsVal = $(this).val();
              $("#artists").empty();
              $("#artists").append($("<option>", { //initial option
                value: "",
                text: "Select an option"
              }));

              dataObj[bandsVal].forEach(function (artist){ //repopulation
                $("#artists").append($("<option>",{
                  value: artist.name,
                  text: artist.name
                }));
              });
            });

            $("#artists").on("change", function() {     //whenever one artist is selected open link
              let artistVal = $(this).val();
              dataObj[bandsVal].forEach(function (artist){
                if (artist.name === artistVal) {
                  window.open(artist.value, "_blank");
                }
              });
            });

            //note: we used on change not on click, because we want the user redirected every time he/she changes their selection
            //we used window.open not just open, because in this scope this is #artists, thus open would not be found in this scope\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

        },
        complete: function(){
            alert("done");
        },

        beforeSend: function () {
            alert("start");
        },
        
        error: function(jqxhrObj, errtype, errmsg)
        {
            console.error("an error occurred: " + errmsg);
        }
    });
});
