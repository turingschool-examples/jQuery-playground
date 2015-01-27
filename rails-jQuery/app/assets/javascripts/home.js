$(document).ready(function(){
  toggleSong('#justin', '#baby');
  toggleSong('#selena', '#come-and-get-it');
  toggleSong('#miley', '#wrecking-ball');

  colorizeSong('#baby');
  colorizeSong('#come-and-get-it');
  colorizeSong('#wrecking-ball');

  increaseFont('#baby');
  increaseFont('#come-and-get-it');
  increaseFont('#wrecking-ball');

  function colorizeSong(songID){
    $(songID).find('#colorize').click(function(){
      $(songID).toggleClass('colorize');
    });
  };

  function increaseFont(songID){
    $(songID).find('#increase-text-size').click(function(){
      var size = parseInt($(songID).css('font-size'));
      size++
      $(songID).css('font-size', size)
    });
  };

  function toggleSong(artistID, songID){
    $(artistID).click(function(){
      $(songID).toggleClass('hidden');
      increaseCounter(songID)
    });
  };

  function increaseCounter(songID){
    if(!$(songID).hasClass('hidden')){
      var counter = parseInt($(songID).find('#view-counter').text());
      counter++
      $(songID).find('#view-counter').text(counter);
    } 
  }
});
