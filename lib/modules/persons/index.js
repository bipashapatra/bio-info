module.exports = {
   name: 'persons',
   extend: 'apostrophe-pieces',
   label: 'Persons',
   pluralLabel: 'Persons',
   addFields: [
   	{
   		type: 'array',
   		name: 'persons',
   		label: 'Persons',
      schema: [
        {
          name: 'name',
          label: 'Name',
          type: 'string'
        },
        {
          name: 'email',
          label: 'Email',
          type: 'email'
         },

        {
          name: 'biography',
          label: 'Biography',
          type: 'area',
          options: {
            // just like apos.area in a template
            widgets: {
              'apostrophe-rich-text': {
                toolbar: [ 'Bold', 'Italic', 'Link', 'Unlink' ]
              },
              'apostrophe-images': {}
            }
          }
        },
      {
        name: 'phone',
        label: 'Phone',
        type: 'string'
          },
      {
        name: 'thumbnail',
        label: 'Thumbnail',
        type: 'singleton',
        widgetType: 'apostrophe-images',
        options: {
          limit: 1,
          minSize: [ 200, 200 ],
          aspectRatio: [ 1, 1 ]
        }
      }

      ]
   	}
   ],
   construct: function(self, options) {
   	self.route('post', 'person', function(req, res) {
			self.apos.modules['persons'].find(req, { _id: req.body.pieceId }).toArray(function(err, docs) {
			  if (err) {
			   return callback(err);
			  }

			  var person = {
			  	_id: self.apos.utils.generateId(),
			  	name: req.body.name,
			  	email: req.body.email,
			  	biography: req.body.biography
			  }

			  docs.forEach(function(doc){
			  	doc.persons.push(person);
			  	self.apos.modules['persons'].update(req, doc, function(){
		  			return res.json({status: 'okay'});
			  	})
			  })
			});
		});
   }
};