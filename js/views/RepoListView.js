var ViewRepo = Backbone.View.extend({
      el:'#modal-body',
      
        render:function(id){
         var that = this;
         //collection object
          var repo = new Repos([], { id: id });
          repo.fetch({
          success:function(repo){

           var source = $('#repo-list-template').html();
          var template = Handlebars.compile(source);
          var html = template(repo.toJSON());

         /*  var template = _.template($('#repo-list-template').html(),{repo:repo.models});*/
            that.$el.html(html);
            
            $('#myModal').modal('show');
        
            }
        
        });
          
       
       }
      }); 