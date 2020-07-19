const { css } = require("jquery");

var gamescheck = true;
var websitescheck = true; 
var appscheck = true;

function changegames()
{
    gamescheck = !gamescheck;
    if (gamescheck)
    {
        $(".games").hide();

        $("#Games-Selection").css({
            background:"white",
            color:"black",
            border:"1px solid #2d2d30"
        });
    }
    else
    {
        $("#Games-Selection").css({
            background:"#2d2d30",
            color:"white",
            border:"1px solid #2d2d30;"
        });
        $(".games").show();
    }
    
}

function changewebsites()
{
    websitescheck = !websitescheck;

    if (websitescheck)
    {
        $("#website-selection").css({
            background:"white",
            color:"black",
            border:"1px solid #2d2d30"
        });

        $(".websites").hide();
        console.log(websitescheck);
    }
    else
    {
        $("#website-selection").css({
            background:"#2d2d30",
            color:"white",
            border:"1px solid #2d2d30;"
        });

        $(".websites").show(3000);
        //$(".games").css({visibility:"visible"});
        console.log(websitescheck);
    }
}

function changeapps()
{
    appscheck = !appscheck;

    if (appscheck)
    {
        $("#app-selection").css({
            background:"white",
            color:"black",
            border:"1px solid #2d2d30"
        });
    }   
    else
    {
        $("#app-selection").css({
            background:"#2d2d30",
            color:"white",
            border:"1px solid #2d2d30;"
        });
    }
}