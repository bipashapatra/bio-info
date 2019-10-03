module.exports = {
   name: 'students',
   extend: 'apostrophe-pieces',
   label: 'Students',
   pluralLabel: 'Students',
   addFields: [
   	{
   		type: 'array',
   		name: 'students',
   		label: 'Students',
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
                 toolbar: [ 'Styles', 'Bold', 'Italic', 'Link', 'Unlink' ],
                          styles: [
                            { name: 'Heading', element: 'h3' },
                            { name: 'Subheading', element: 'h4' },
                            { name: 'Paragraph', element: 'p' }
                          ]
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
   	self.route('post', 'student', function(req, res) {
			self.apos.modules['students'].find(req, { _id: req.body.pieceId }).toArray(function(err, docs) {
			  if (err) {
			   return callback(err);
			  }

			  var student = {
			  	_id: self.apos.utils.generateId(),
			  	name: req.body.name,
			  	email: req.body.email,
			  	biography: req.body.biography,
			  	phone: req.body.phone
			  }

			  docs.forEach(function(doc){
			  	doc.students.push(student);
			  	self.apos.modules['students'].update(req, doc, function(){
		  			return res.json({status: 'okay'});
			  	})
			  })
			});
		});
   }
};