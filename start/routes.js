'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.get('/posts', "PostController.index")

Route.post('/posts', () => {
  return 'Post has been created';
})

Route.get('/posts/:id', ({params}) => {
  return `You are watching id: ${params.id}`
})

Route.patch('/posts/:id',({params})=> {
  return `Post ${params.id} has been updated.`
})

Route.delete('/posts/:id',({params})=> {
  return `Post ${params.id} has been removed.`
})
