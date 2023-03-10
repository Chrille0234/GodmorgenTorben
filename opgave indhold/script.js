document.addEventListener('DOMContentLoaded', function(){
	InfoKasser();
});
function InfoKasser()
{
    for ( var i = 0; i < document.querySelectorAll('.info').length; i++ )
    {
        document.querySelectorAll('.info')[i].addEventListener('click',InfoKasseSkift);
    }
}
function InfoKasseSkift(){
    if( this.querySelectorAll('p')[0].style.display != "block" )
    {
        this.querySelectorAll('p')[0].style.display = "block";
    }
    else
    {
        this.querySelectorAll('p')[0].style.display = "none";
    }
}