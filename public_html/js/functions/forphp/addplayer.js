/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function submitform(id)
            {
                //document.getElementById("form2").value = "oh la la ";
                document.getElementById(id).submit();
            }

function formaddplayer(name,x,y,dir,moved,clase, nobjs) {
    let formid = "addplayer"+name;
    let action = "../../../php/savedata/startgame.php";
    let submit = "addplayer";
  return creaform(formid, action, 
        ["playername","x","y","dir","moved","clase","nobjs"], 
        [name,x,y,dir,moved,clase, nobjs], submit);
}


function addplayer(name,x,y,dir,moved,clase, nobjs) {
     document.getElementById("formi").innerHTML += "<br>"+
                formaddplayer(name,x,y,dir,moved,clase, nobjs);
}

function creaform(formid, action, innames, invalues, submit) {
    
    formulari = '<form id="'+formid+'"  method="post" action="'+action+'" style="visibility:visible">';
    
    for (let i = 0; i < innames.length ;i++) { /* writing down the different inputs and values */
        formulari = formulari + '<input  name="'+innames[i]+'"  value="'+invalues[i]+'" style="visibility:visible"> ';
    }    
    
    formulari = formulari + '<input type="submit" value="'+submit+'">';
    formulari = formulari + '</form> <br> <p> mamma mia</p>';
    
    return formulari;
}


function link(url) {
  location.replace(url);
}