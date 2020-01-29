$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '5524382583',
        limit: 20,
        resolution: 'standard_resolution',
        accessToken: '5524382583.1677ed0.07b90b33f09b4c37957ce80e0de50b9a',
        sortBy: 'most-recent',
        template: '<div class="col-lg-3 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
		  
		  filter: function(image) {
    return image.type === "image";
  }
		
    });


    userFeed.run();

    
    // This will create a single gallery from all elements that have class "gallery-item"
    $('.instagal').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });


});