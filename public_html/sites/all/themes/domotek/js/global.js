(function ($) {
  Drupal.behaviors.ajaxLoadNode = {
    attach:
      function(context, settings){
        /*$('#contentBg').ajaxStart(function() {
          $(this).fadeOut(1200);
          $('#loader').show();
        });
        $('#contentBg').ajaxComplete(function() {
          $('#loader').fadeOut(1000);
          $(this).fadeIn(1000);
        });*/
        $('a').each(function(){
          $(this).addClass('ajax-load-node-processed');
          $(this).once('samie-jay-nav').click(function(e){
            e.preventDefault();
            var getThisNode = $(this).attr("href");
            var container = $(".l-content");
            $.ajax({
              url: getThisNode,
              beforeSend: function ( xhr ) {
                var opts = {
                    lines: 13, // The number of lines to draw
                    length: 20, // The length of each line
                    width: 10, // The line thickness
                    radius: 30, // The radius of the inner circle
                    corners: 1, // Corner roundness (0..1)
                    rotate: 0, // The rotation offset
                    direction: 1, // 1: clockwise, -1: counterclockwise
                    color: '#000', // #rgb or #rrggbb or array of colors
                    speed: 1, // Rounds per second
                    trail: 60, // Afterglow percentage
                    shadow: false, // Whether to render a shadow
                    hwaccel: false, // Whether to use hardware acceleration
                    className: 'spinner', // The CSS class to assign to the spinner
                    zIndex: 2e9, // The z-index (defaults to 2000000000)
                    top: 'auto', // Top position relative to parent in px
                    left: 'auto' // Left position relative to parent in px
                  };
                  var target = container.get();
                  var spinner = new Spinner(opts).spin();
                  target[0].insertBefore(spinner.el, target[0].firstChild);
              }
            }).done(function ( data ) {
              container.html($('.l-content',data));
              //location.hash = 'page=' + getThisNode;
              Drupal.attachBehaviors(container, settings);
            });
            /*xhr = $.ajax({
              url: getThisNode,
              success: function(data){
                var container = $(".l-content");
                container.html($('.l-content',data));
                //location.hash = 'page=' + getThisNode;
                Drupal.attachBehaviors(container, settings);
                
              }
            });*/
          })
        });
      }
  };
})(jQuery);