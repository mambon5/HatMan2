/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function deletetable(table) {
     document.getElementById("formi").innerHTML += "<br>"+
                formdeletetable(table);
}

function formdeletetable(table) {
    let formid = "deletetable";
    let action = "../../../php/deletedata/deletetable.php";
    let submit = "delete all data";
  return creaform(formid, action, 
        [], 
        [], submit);
}


function createmonsts(){
    //I really should post the JSON request using xmlhttpRequest
   // take a look at JSON at https://www.w3schools.com/js/js_json_php.asp
    var text = '{"employees":[' +
        '{"firstName":"John","lastName":"Doe" },' +
        '{"firstName":"Anna","lastName":"Smith" },' +
        '{"firstName":"Peter","lastName":"Jones" }]}';

   addplayer("laila", 5, 10, 4, 1, "char",1);
   addplayer(["hjones","laila"], [12,5], 
   [10,10], [4,4], [0,1], ["char","char"],[1,1]);
   addplayer("rhodey", 25, 0, 1, 1, "char",1);
   addplayer("greebo2", 25, 1, 1, 0, "char",1);
   addplayer("protocoldroid2", 54, 144, 1, 0, "char",1);
}