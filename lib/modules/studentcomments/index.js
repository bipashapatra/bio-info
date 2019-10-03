module.exports = {        
   name: 'studentcomments',
   extend: 'apostrophe-pieces',        
   label: 'Studentcomments',
   pluralLabel: 'Studentcomments',
   addFields: [
   	{
   		type: 'array',
   		name: 'studentcomments',
   		label: 'Studentcomments',
      schema: [
        {
          name: 'comment',
          label: 'Comment',
          type: 'string',
          textarea: true
        },
        {
          name: 'name',
          label: 'Name',
          type: 'string'
        },
         {
           name: 'date',
           label: 'Date',
           type: 'date',
           pikadayOptions: {
             format: 'DD/MM/YYYY',
             firstDay: 1
           }
           },
         {
           name: 'time',
           label: 'Time',
           type: 'time'
           },

           {
           name: '_students',
           type: 'joinByOne',
           withType: 'students',
           label: 'Students',
           filters: {
               projection: {
                   title: 1,
                   slug: 1,
                   type: 1,
                   tags: 1,
                   _students: 1
               }
           }
       }
      ]
   	}
   ],
   construct: function(self, options) {
   	self.route('post', 'studentcomment', function(req, res) {
			self.apos.modules['studentcomments'].find(req, { _id: req.body.pieceId }).toArray(function(err, docs) {
			  if (err) {
			   return callback(err);
			  }

           var today = new Date();
           var date = ("0" + today.getDate()).slice(-2) +'/'+("0" + (today.getMonth() + 1)).slice(-2)+'/'+today.getFullYear();
//           var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
           var time = ("0"+today.getHours()).slice(-2) + ":" + ("0"+today.getMinutes()).slice(-2) + ":" + ("0"+today.getSeconds()).slice(-2);
//           var dateTime = date+' '+time;
			  var comment = {
			  	_id: self.apos.utils.generateId(),
			  	comment: req.body.comment,
			  	name: req.body.name,
			  	date: date,
			  	time: time

			  }


			  docs.forEach(function(doc){
			  	doc.studentcomments.push(comment);
			  	self.apos.modules['studentcomments'].update(req, doc, function(){
		  			return res.json({status: 'okay'});
			  	})
			  })
			});
		});
   }
};