SC.initialize({
  client_id: 'a1352e0cf83977a0c01a6d1118e10451'
});

$(document).ready(function() {

  SC.stream('/tracks/148648574', function(sound) {
      $('#start1').click(function(e) {
    e.preventDefault();
    sound.start();
  });
  $('#stop1').click(function(e) {
    e.preventDefault();
    sound.stop();
  });

  });
});

$(document).ready(function() {

  SC.stream('/tracks/138403237', function(sound) {
      $('#start2').click(function(e) {
    e.preventDefault();
    sound.start();
  });
  $('#stop2').click(function(e) {
    e.preventDefault();
    sound.stop();
  });

  });
});

$(document).ready(function() {

  SC.stream('/tracks/175830912', function(sound) {
      $('#start3').click(function(e) {
    e.preventDefault();
    sound.start();
  });
  $('#stop3').click(function(e) {
    e.preventDefault();
    sound.stop();
  });

  });
});

//-------------------------------------------------------

$(document).ready(function() {
  SC.get('/tracks', { genres: 'HNTR' }, function(tracks) {
    $(tracks).each(function(index, track) {
      $('#results').append($('<li></li>').html(track.title + ' - ' + track.genre));
    });
  });
});

