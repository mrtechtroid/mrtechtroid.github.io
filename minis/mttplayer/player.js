var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('yt_player', {
        // videoId: '4nOn9YLp7AE',
        playerVars: {
            'playsinline': 1,
            'controls': 0,
            'modestbranding': 1,
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}
function onPlayerReady(event) {
    event.target.playVideo();
    ldVid()
}
var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
    }
}
function stopVideo() {
    player.stopVideo();
}
function volumechange() {
    if (player.isMuted() == true) {
      document.getElementById("tb_vl_br").value = 0
    } else {
      volumebar = document.getElementById("tb_vl_br").value
      player.setVolume(volumebar)
    }
    if (player.getVolume() < 100 && player.getVolume() > 50) {
      document.getElementById("mute").innerText = "volume_up"
    }
    if (player.getVolume() < 50 && player.getVolume() > 0) {
      document.getElementById("mute").innerText = "volume_down"
    }
    if (player.getVolume() == 0) {
      document.getElementById("mute").innerText= "volume_off"
    }
  }
  
  function volumetype() {
    if (player.isMuted() == true) {
      player.unMute()
      document.getElementById("mute").innerText = "volume_up"
    } else {
      player.mute()
      document.getElementById("mute").innerText= "volume_off"
    }
  
  }
  function fullscreen(){
    if (
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement ||
      document.msFullscreenElement
    ) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      document.getElementById("yt_player").style.height = "50vh"
      document.getElementById("yt_player").style.width= "68vw"
    } else {
      element = document.getElementById("yt_holdr")
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      }
      document.getElementById("yt_player").style.height = "90vh"
      document.getElementById("yt_player").style.width = "90vw"
    }
  }
  function ldVid(){
    player.loadVideoById({videoId:document.getElementById("yt_vid_id").value,startSeconds:0})
  }

  document.onkeydown = function(evt) {
    
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
        isEscape = (evt.key === "Escape" || evt.key === "Esc");
    } else {
        isEscape = (evt.keyCode === 27);
    }
    if (isEscape) {
        evt.preventDefault()
        fullscreen()
    }
  };