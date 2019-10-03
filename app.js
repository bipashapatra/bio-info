var path = require('path');

var apos = require('apostrophe')({
  shortName: 'bio-info',

  // See lib/modules for basic project-level configuration of our modules
  // responsible for serving static assets, managing page templates and
  // configuring user accounts.

  modules: {
  'apostrophe-express': {
        csrf: {
          exceptions: [ '/modules/apostrophe-notifications/poll-notifications',
                       ' /modules/apostrophe-areas/editor' ]
        }
      },


    // Apostrophe module configuration

    // Note: most configuration occurs in the respective
    // modules' directories. See lib/apostrophe-assets/index.js for an example.
    
    // However any modules that are not present by default in Apostrophe must at
    // least have a minimal configuration here: `moduleName: {}`

    // If a template is not found somewhere else, serve it from the top-level
    // `views/` folder of the project

    'apostrophe-templates': { viewsFolderFallback: path.join(__dirname, 'views') },
    // This module adds Nunjucks "helper functions" and helper data useful in all templates.
        //
        // Some uses include special template functions that go outside the depth of nunjucks,
        // often by exporting lodash functions, and reusable, centralized apos.area configurations.
        //
        // The module also contains useful library .js files containing ready-made options

        'apostrophe-favicons': {},
        // apostrophe-favicons arrives as a bundle of modules, apostrophe-favicons-global is the
        // specific one we want to activate

        'locations': {
          extend: 'apostrophe-pieces'

        },

        'people': { extend: 'apostrophe-pieces' },
        'people-pages': { extend: 'apostrophe-pieces-pages' },

        // Content Widgets
        'image-widgets': { extend: 'apostrophe-widgets' },
        'logo-mask-widgets': { extend: 'apostrophe-widgets' },
        'link-widgets': { extend: 'apostrophe-widgets' },

         'apostrophe-open-graph': {},
         'apostrophe-seo': {},

         'helpers': { extend: 'apostrophe-module' },
        'apostrophe-forms': {},
          'apostrophe-forms-widgets': {},
          // Enable only the field widgets that your application needs to make it
          // easier for application/website managers.
          'apostrophe-forms-text-field-widgets': {},
          'apostrophe-forms-textarea-field-widgets': {},
          'apostrophe-forms-file-field-widgets': {},
          'apostrophe-forms-select-field-widgets': {},
          'apostrophe-forms-radio-field-widgets': {},
          'apostrophe-forms-checkboxes-field-widgets': {},
          'apostrophe-forms-boolean-field-widgets': {},
          'apostrophe-forms-conditional': {},
          // END of field widgets
           'apostrophe-email': {
            // See the email tutorial for required configuration.
           // https://docs.apostrophecms.org/apostrophe/tutorials/howtos/email
           },
           'apostrophe-permissions': {
               construct: function(self, options) {
                 // Required if you want file fields to work on public pages.
                 self.addPublic([ 'edit-attachment' ]);
               }
             },
//           'contact-form': {},
//           'contact-form-widgets': {},
//            'contact-form-pages': {
//               extend: 'apostrophe-pieces-pages'
//             },
             'comments': {},
             'comments-widgets': {},

            'persons': {},
            'persons-widgets': {},
            'students':{},
            'students-widgets':{},
            'studentcomments':{},
            'studentcomments-widgets':{}

           }


});
