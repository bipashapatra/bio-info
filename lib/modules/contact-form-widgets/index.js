module.exports = {

  extend: 'apostrophe-widgets',
  label: 'Contact Form',
  contextualOnly: true,
  scene: 'user',

  construct: function(self, options) {

    self.forms = self.apos.contactForm;

    self.output = function(widget, options) {
      return self.partial(self.template, {
        widget: widget,
        options: options,
        manager: self,
        schema: self.forms.submitSchema
      });
    };

    self.pushAsset('script', 'always', { when: 'always' });
    self.pushAsset('stylesheet', 'always', { when: 'always' });

    self.route('post', 'submit', function(req, res) {
      return self.forms.submit(req, function(err) {
        return res.send({ status: err ? 'error' : 'ok' });
      });
      self.apos.modules['contact-form'].find(req, { _id: req.body.pieceId }).toArray(function(err, docs) {
      			  if (err) {
      			   return callback(err);
      			  }
    });
    docs.forEach(function(doc){
    			  	doc.comments.push(comment);
    			  	self.apos.modules['contact-form'].update(req, doc, function(){
    		  			return res.json({status: 'okay'});
    			  	})
    			  })

    var superGetCreateSingletonOptions = self.getCreateSingletonOptions;
    self.getCreateSingletonOptions = function(req) {
      var options = superGetCreateSingletonOptions(req);
      options.submitSchema = self.forms.submitSchema;
      options.piece = self.forms.newInstance();
      return options;
    };

  })
}
};