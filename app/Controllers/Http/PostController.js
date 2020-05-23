'use strict'

class PostController {
  index ({view}) {
    const pageTitle = "List of Posts";
    const user = {
      name:"Charlie Dang"
    }
    const entities = [
      {id:1, title: 'lemon',content:'ningmeng'},
      {id:2, title: 'Watermelon', content: 'xigua'}
    ]

    return view.render("posts.index", {pagett: pageTitle, user: user, entities:entities});
  }
}

module.exports = PostController
