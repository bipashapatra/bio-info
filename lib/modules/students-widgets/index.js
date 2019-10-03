module.exports = {          
   extend: 'apostrophe-pieces-widgets',          
   label: 'Students Widget',

     construct: function(self, options) {
         var superPushAssets = self.pushAssets;
         self.pushAssets = function() {
           superPushAssets();
           self.pushAsset('stylesheet', 'always', { when: 'always' });
         };
       }
};