function myFunction(){
    var temp=document.getElementById("nav");
    if(temp.className==="navbar"){
        temp.className+=" responsive";
    }else{
        temp.className="navbar"
    }
}
// Curtain Menu

function openNav() {
    document.getElementById("myNav").style.width = "50%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }
  

function Search() {
  
    var input, filter, ul, li, a, i;
    input = document.getElementById("input");
    filter = input.value.toUpperCase();
    ul = document.getElementById("searchMenu-context");
    li = ul.getElementsByTagName("li");
  
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
  function cancelDropDown(){
    var searchMenuContext=document.getElementById("searchMenu-context");
    searchMenuContext.style.display="none";
  }
  function dropdown(){

    var searchMenuContext=document.getElementById("searchMenu-context");
    searchMenuContext.style.display="block";
  }
  function context(name){
    
     var cont=document.getElementById("context");

     var dictionary={
         Georgia:"Georgia1d.jpg",
         Armenia:"Armenia.jpg",
         Azerbaijan:"azerbaijan.png",
         Ukraine:"Ukraine.jpg",
         Japan:"Japan.jpg",
         Greece:"Greece.jpg",
         Morocco:"moroco.jpg",
         SriLanka:"Srilanka.webp"
     }
     
      cont.innerHTML=`
      <img src="${dictionary[name.textContent]}" alt="">
      `;
      
   
  }