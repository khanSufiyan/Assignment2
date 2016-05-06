var UserList = Backbone.View.extend({
    el:'.page',

    events: {
    'click #viewRepo' : "viewRepo",
    },


     viewRepo: function(e){
      var id = $(e.currentTarget).data('id');
                  //update url and pass true to execute route method
              var viewRepo = new ViewRepo();
               viewRepo.render(id);
               $('#myModal').modal('show');
              },

        
          render:function(){
            var that = this;
              var users = new Users();
              users.fetch({
              success:function(users){

            var source = $('#user-list-template').html();
            var template = Handlebars.compile(source);
            var html = template(users.toJSON());
              
              /*var template = _.template($('#user-list-template').html(),{users:users.models});*/
              
              that.$el.html(html);
               $('#userTable').dataTable();

              }
            });
            }
          });