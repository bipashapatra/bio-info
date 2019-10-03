apos.define('studentcomments-widgets', {
  extend: 'apostrophe-widgets',
  construct: function(self, options) {
    self.play = function($widget, data, options) {
      $widget.find('[data-comment-submit]').on('click', function() {
        var data = {
          comment: $widget.find('[data-comment-input]').val(),
          pieceId: $widget.find('[data-piece-id]').attr('data-piece-id'),
          name: $widget.find('[data-name-input]').val(),
        }
        $.ajax({
          url: '/modules/studentcomments/studentcomment',
          method: 'POST',
          data: data
        }).done(function(msg){
          apos.change($widget)
        });
      })
    };
  }
});