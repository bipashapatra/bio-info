apos.define('persons-widgets', {
  extend: 'apostrophe-widgets',
  construct: function(self, options) {
    self.play = function($widget, data, options) {
      $widget.find('[data-person-submit]').on('click', function() {
        var data = {
          name: $widget.find('[data-person-name]').val(),
          pieceId: $widget.find('[data-piece-id]').attr('data-piece-id'),
          email: $widget.find('[data-person-email').val(),
          biography: $widget.find('[data-person-biography]').val()
        }
        $.ajax({
          url: '/modules/persons/person',
          method: 'POST',
          data: data
        }).done(function(msg){
          apos.change($widget)
        });
      })
    };
  }
});