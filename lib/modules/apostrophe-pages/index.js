// This configures the apostrophe-pages module to add a "home" page type to the
// pages menu

module.exports = {
  filters: {
    // Grab our ancestor pages, with two levels of subpages
    ancestors: {
      children: {
        depth: 2
      }
    },
    // We usually want children of the current page, too
    children: true
  },
  park: [
    {
      title: 'Search',
      slug: '/search',
      type: 'apostrophe-search',
      label: 'Search',
      published: true
    }
  ],
  types: [
    {
      name: 'home',
      label: 'Home'
    },
    {
      name: 'default',
      label: 'Default'
    },

    {
      label: 'People Index',
      name: 'people-pages'
    },

   {
    name: 'contact-form-pages',
    label: 'Contact Form'
    },
    {
    name: 'studentcomments-page',
    label: 'Student comments'
     }



    // Add more page types here, but make sure you create a corresponding
    // template in lib/modules/apostrophe-pages/views/pages! An exception:
    // "pieces pages" like `event-pages` are rendered via the `views/index.html`
    // and `views/show.html` templates of those modules.
  ]
};
