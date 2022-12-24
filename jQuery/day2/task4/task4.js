let bandsVal;
$(function(){
    $.ajax("rockbands.json", {
        type:"GET",
        dataType:'json',
        contentType: 'application/json',
        success: function(dataObj){

            $("#bands").append($("<option>", {
              value: "",
              text: "Select an option"
            }));

            for (const bandName in dataObj) {
                $("#bands").append($("<option>", {
                  value: bandName,
                  text: bandName
                }));
            }
            
            $("#bands").on("change", function() {
              bandsVal = $(this).val();
              $("#artists").empty();
              $("#artists").append($("<option>", {
                value: "",
                text: "Select an option"
              }));

              dataObj[bandsVal].forEach(function (artist){
                $("#artists").append($("<option>",{
                  value: artist.name,
                  text: artist.name
                }));
              });
            });

            $("#artists").on("change", function() {
              let artistVal = $(this).val();
              dataObj[bandsVal].forEach(function (artist){
                if (artist.name === artistVal) {
                  window.open(artist.value, "_blank");
                }
              });
            });

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
