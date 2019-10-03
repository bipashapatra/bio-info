apos.define('students-widgets', {
  extend: 'apostrophe-widgets',
  construct: function(self, options) {
    self.play = function($widget, data, options) {
      $widget.find('[data-student-submit]').on('click', function() {
        var data = {
          name: $widget.find('[data-student-name]').val(),
          pieceId: $widget.find('[data-piece-id]').attr('data-piece-id'),
          email: $widget.find('[data-student-email').val(),
          phone: $widget.find('[data-student-phone').val(),
          biography: $widget.find('[data-student-biography]').val(),

        }
        $.ajax({
          url: '/modules/students/student',
          method: 'POST',
          data: data
        }).done(function(msg){
          apos.change($widget)
        });
      })
    };
  }
});