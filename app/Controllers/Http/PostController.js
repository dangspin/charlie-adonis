'use strict'

class PostController {
  //GET
  index() {
    return 'List of ports, haha;'
  }

  //POST
  store() {
    return `Post has been created.`
  }

  //GET
  show ({params}) {
    return `You're watching post ${params.id}.`
  }

  //PUT || PATCH
  update ({params}) {
    return `Post ${params.id} has been updated.`
  }

  //DELETE
  destroy({params})  {
    return `Post ${params.id} has been removed.`
  }

  //GET
  create() {
    return `Create Post`
  }

  //GET
  edit ({params}) {
    return `Editing posts ${params.id}`
  }
}

module.exports = PostController
