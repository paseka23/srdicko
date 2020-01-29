var randomImages = (function(){
  'use strict';
  return{
    init: function(){
      this.events();// init events
    },
    events: function(){
      /* random images snippet*/
      var images = [
        'https://srdickoband.com/images/05.jpg',
        'https://srdickoband.com/images/06.jpg',
        'https://srdickoband.com/images/07.jpg',
        'https://srdickoband.com/images/08.jpg'
      ];
      // create style tag in head
      var s = document.createElement('style');
      // add id
      s.id = 'random-Img';
      // type css
      s.type = 'text/css';
      // append in head
      document.head.appendChild(s);
      // math random
      var r = images[Math.floor(Math.random() * images.length)];
      // add into style
      s.textContent = '#one{background:url('+r+'); vertical-align: top;}';
    }
  };
})();
// Ready for the war
randomImages.init();