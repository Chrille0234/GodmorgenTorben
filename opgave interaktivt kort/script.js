document.addEventListener('DOMContentLoaded', function(){
 
    document.querySelector("#DivKassePunkt1").addEventListener("mouseover", function(){
        vispunkt1info()

    });
    document.querySelector("#DivKassePunkt1").addEventListener("mouseout", function(){
        gempunkt1info();

    });
   document.querySelector("#DivKassePunkt2").addEventListener("mouseover", function(){
        vispunkt2info()
    })
    document.querySelector("#DivKassePunkt2").addEventListener("mouseout", function(){
        gempunkt2info()
    })
});

function vispunkt1info()
{
	document.querySelector("#PTag1").style.display = 'inline-block';
}
function gempunkt1info()
{
	document.querySelector("#PTag1").style.display = 'none';
}
function vispunkt2info()
{
	document.querySelector("#PTag2").style.display = 'inline-block';
}
function gempunkt2info()
{
	document.querySelector("#PTag2").style.display = 'none';
}