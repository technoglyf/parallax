let stars = document.getElementById("stars-space");
let midMnt = document.getElementById("mid-mnt");
let ground = document.getElementById("ground");
let dome = document.getElementById("dome");
let rocket = document.getElementById("rocket");
let mtn1 = document.getElementById("mtn1");
let moon = document.getElementById("moon");


/*
event listerer
scrowl
*/

window.addEventListener("scroll",function(){
  let value = window.scrollY;
  console.log(value);

  rocket.style.bottom = 20*value+"px";

  midMnt.style.bottom = .50*value+"px";

  mtn1.style.bottom = -.50*value+"px";

  ground.style.bottom = -.25*value+"px";
});
