module.exports = {          
   extend: 'apostrophe-pieces-widgets',          
   label: 'Studentcomments Widget',
   construct: function(self, options) {
            var superPushAssets = self.pushAssets;
            self.pushAssets = function() {
              superPushAssets();
              self.pushAsset('stylesheet', 'always', { when: 'always' });
            };
          }
};