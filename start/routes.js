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

Route
  .resource('posts','PostController')

Route
  .get('/users', () => {return 'List of APPs'})
  .as('users.index')

Route.get('/users', ({request}) => {
  switch (request.format()) {
    case 'json':
      return [
        {name: 'Charlie'},
        {name: 'lele'}
      ]
    default:
      return `
        - Charlie
        - Lele
      `
  }
})
.formats(['json'])

Route.any('*', ({view}) => {return view.render('welcome')})
