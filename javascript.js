var x = 0;
var z = 0;
function sizeselect() {
     var x = document.getElementById("size").value;
     $('.squares').remove();
     $('.squarescolored').remove();
     for (i = 1; i <= (x*x); ++i){
        $("#wrapper").append( $('<div/>').addClass("squares"))
        ;}
     var y = x * 20 + "px";
     $("#wrapper").removeAttr('style').css("width",y);
     $(document).ready(function () {
        $('.squares').hover(function () {
        $(this).addClass('squarescolored');}, function(){
        $(this).removeClass('squares');
        });
    });
     
 };
    

$(document).ready(function () {
    $(function(){
    $('#clear').click(function() {
        $('.squarescolored').addClass('squares');
        $('.squares').removeClass('squarescolored'); 
    });
});});
    
