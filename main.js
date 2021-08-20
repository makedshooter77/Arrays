var main_array=[];
function submit(){
    var display_array=[];
for(var r=1; r<=4;r++){
var name=document.getElementById("name_of_the_student_"+r).value;
console.log(name);
main_array.push(name);



}
console.log(main_array);
var length_name=main_array.length;
console.log(length_name);

for( var a=0; a<length_name;a++){
display_array.push("<h4>name-"+main_array[a]+"</h4>");
console.log(display_array)

}
document.getElementById("display_name_with_commas").innerHTML=display_array;
var remove_commas=display_array.join(" ");
console.log(remove_commas);
document.getElementById("display_name_without_commas").innerHTML=remove_commas;
document.getElementById("submit_button").style.display = "none";
document.getElementById("sort_button").style.display = "inline-block";
}
function sort(){
    main_array.sort();
    console.log(main_array);
    var display=[];
    var length_name=main_array.length;
console.log(length_name);

for( var a=0; a<length_name;a++){
display.push("<h4>name-"+main_array[a]+"</h4>");
console.log(display)

}
document.getElementById("display_name_without_commas").innerHTML=display;
var remove_commas=display.join(" ");
console.log(remove_commas);

}
//Additional activity 
function new_update() 
{ document.getElementById("display_name_without_commas").innerHTML = "<h1>" + main_array +"</h1>"; }