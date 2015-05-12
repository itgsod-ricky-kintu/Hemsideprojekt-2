/**
 * Created by ricky.kintu on 19/03/15.
 */
$(document).ready(function(){
    $("#navigation").load("content/nav.inc.html")
    $("#lunchbox").load("lunch/1.html")
    $("#box2").load("content/box2.inc.html")
    $("#box3").load("content/box3.inc.html")

    $("#nWeek").click(function(){
        week = $("#lunchbox").attr("data-week")
        week = parseInt(week)+1
        $("#lunchbox").attr("data-week",week)
        $("#lunchbox").load("lunch/"+week+".html")
        if(week >= 4){
            $("#nWeek").hide()
            $("#pWeek").show()
        }else{
            $("#nWeek").show()
            $("#pWeek").show()
        }
    });

    $("#pWeek").click(function(){
        week = $("#lunchbox").attr("data-week")
        week = parseInt(week)-1
        $("#lunchbox").attr("data-week",week)
        $("#lunchbox").load("lunch/"+week+".html")
        if(week <= 1){
            $("#pWeek").hide()
            $("#nWeek").show()
        }else{
            $("#pWeek").show()
            $("#nWeek").show()
        }
    });

    $("#veg").click(function(){
        $("#veg").disabled
        page = parseInt($("#veg").attr("class"))
        if(page == 1) {
            $("#lunchbox").load("lunch/v1.html");
            $("#veg").text("Visa vanliga maten");
            $("#veg").attr("class","2")
        }else{
            $("#lunchbox").load("lunch/"+$("#lunchbox").attr("data-week")+".html");
            $("#veg").attr("class","1")
            $("#veg").text("Visa vegetarisk maten");
        }

    });

});