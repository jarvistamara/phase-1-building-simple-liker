// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
//const glyphObject = {'♡':FULL_HEART,'♥':EMPTY_HEART}
//const colorState = {"red":"","":"red"}
///
let likeButtons = document.querySelectorAll(".like")
for (el of likeButtons){
  el.addEventListener("click", (e) => {
    mimicServerCall("fakeUrl")
    .then((respond) => {
      if (e.target.innerText === EMPTY_HEART) {
        e.target.innerText = FULL_HEART
        e.target.style = "red"
      } else { 
        e.target.innerText = EMPTY_HEART
        e.target.style = ""
      }
      //e.target.innerText = glyphObject[e.target.innerText]
      //e.target.style.color = colorState[e.target.style.color]
    })
    .catch((error) => {
      document.getElementById("modal").className = ""
      document.getElementById("model").innerText = error
      setTimeout(function() {
        document.getElementById("modal").className = "hidden"
      }, 3000);
    })
  })
}
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------
function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}