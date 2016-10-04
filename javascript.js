var x = 0;
function sizeselect() {
  var x = document.getElementById("size").value;
    console.log(x);
    for (i = 1; i <= (x*x); ++i){
    $("#wrapper").append( $('<div/>')
    .addClass("squares")
    );
      console.log("got here");
      }
    var y = x * 20 + "px";
    $("#wrapper").removeAttr('style').css("width",y);
    console.log(y);
        
    }