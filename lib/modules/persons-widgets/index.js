module.exports = {          
   extend: 'apostrophe-pieces-widgets',          
   label: 'Persons Widget',
    addFields: [
       {
         name: '_page',
         type: 'joinByOne',
         withType: 'apostrophe-page',
         label: 'Page',
         required: true,
         idField: 'pageId'
       }
     ],
     construct: function(self, options) {
         var superPushAssets = self.pushAssets;
         self.pushAssets = function() {
           superPushAssets();
           self.pushAsset('stylesheet', 'always', { when: 'always' });
         };
       }
};