module.exports = function(grunt) {

  // config
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

     concat: {
        user:{
       dest:'js/user.js',
        src: [

   'js/models/RepoListModel.js',
  'js/models/UserListModel.js',
  'js/collections/RepoListCollection.js',
  'js/collections/UserListCollection.js',
  'js/views/RepoListView.js',
  'js/views/UserlistView.js',
   'js/router.js',

            
          ]
      }
     },
   });

  // task plugins
  grunt.loadNpmTasks('grunt-contrib-concat');
   // tasks
  grunt.registerTask('default', [ 'concat' ]);

};