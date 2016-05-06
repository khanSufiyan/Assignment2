var Users = Backbone.Collection.extend({
    model: UserListModel,
    
    url:'https://api.github.com/users'

      });