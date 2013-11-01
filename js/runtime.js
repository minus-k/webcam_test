$(document).ready(function() {
  window.URL = window.URL || window.webkitURL || window.mozURL || window.msURL;
  navigator.getMedia = ( navigator.getUserMedia ||
                         navigator.webkitGetUserMedia ||
                         navigator.mozGetUserMedia ||
                         navigator.msGetUserMedia);
  navigator.getMedia ({
    // constraints
    video: true,
    },

    // successCallback
    function(localMediaStream) {
      var video = document.querySelector('video');
      video.src = window.URL.createObjectURL(localMediaStream);
      // Do something with the video here.
      if (video.mozSrcObject !== undefined) {
        video.mozSrcObject = localMediaStream;
      } else {
        video.src = (window.URL && window.URL.createObjectURL(localMediaStream)) || localMediaStream;
      }
      video.play();
      setInterval(function(){ swap_visible() },5000);
    },

    // errorCallback
    function(err) {
    console.log("The following error occured: " + err);
  });

  function swap_visible() {
    $('#camera').hide();
    $('#target').hide();
    $('#fun').show();
  }
});
