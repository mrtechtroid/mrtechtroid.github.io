document.getElementById("nav_mob").addEventListener("onclick",function(){
    document.getElementById("navbar_mobile").style.display = "flex";
})
// https://codepen.io/fghty/pen/VwpWOJr
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Youtuber", "Web Designer", "Programer", "Developer"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;
function ifcls(){
  document.getElementById('tempIF_G').remove();
}
function sendmail() {
  if (document.getElementById("ip-email").value == "" || document.getElementById("ip-name").value == "" || document.getElementById("ip-subject").value == "" || document.getElementById("ip-message").value == "") {
      alert("Some Fields Are Missing!!!")
  } else {
      if (document.getElementById("ip-ideas").value == "") { document.getElementById("ip-ideas").value = "No Ideas" }
      if (document.getElementById("ip-email").value.includes(" ")) { alert("Spaces In Email Is Not Valid"); throw new Error("") }
      document.getElementById("ip-name").value = document.getElementById("ip-name").value.replaceAll(" ", "+")
      document.getElementById("ip-subject").value = document.getElementById("ip-subject").value.replaceAll(" ", "+")
      document.getElementById("ip-message").value = document.getElementById("ip-message").value.replaceAll(" ", "+")
      document.getElementById("ip-ideas").value = document.getElementById("ip-ideas").value.replaceAll(" ", "+")
      data = "?entry.1120375066=" + document.getElementById("ip-email").value + "&entry.1808878457=" + document.getElementById("ip-name").value + "&entry.665491960=" + document.getElementById("ip-subject").value + "&entry.652909799=" + document.getElementById("ip-message").value + "&entry.435683521=" + document.getElementById("ip-ideas").value + "&entry.656874236=Recommendations"
      f_url = "https://docs.google.com/forms/d/e/1FAIpQLSdocdqyhyoTZrXcF2RejwMP35eB6akOG95aZoUxU5IAs3Nwdw/formResponse" + data
      ifeq = document.createElement("iframe")
      ifeq.id = "tempIF_G"
      ifeq.width = "100px"
      ifeq.height = "100px"
      ifeq.style.display = "none"
      ifeq.onload = "ifcls();"
      ifeq.src = f_url
      document.getElementsByTagName("body")[0].appendChild(ifeq);
      ifeq.onload = "ifeq.remove();"
      document.getElementById("ip-email").value = ""
      document.getElementById("ip-name").value = ""
      document.getElementById("ip-subject").value = ""
      document.getElementById("ip-message").value = ""
      document.getElementById("ip-ideas").value = ""
      alert("We Will Be Looking On This Soon")
      ifeq.addEventListener("load", ifcls(), false);
  }
}
function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}
// Get the button:
let mybutton = document.getElementById("top_Btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});

var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('yt_player', {
          videoId: 'FSx-rA22LFk',
          playerVars: {
            'playsinline': 1,
            'controls':0
          },
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }
      function onPlayerReady(event) {
        // event.target.playVideo();
      }
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          // setTimeout(stopVideo, 6000);
          // done = true;
        }
        if (player.getPlayerState() == 0){
          window.location.hash = 'footer'
        }

      }
      function stopVideo() {
        player.stopVideo();
      }