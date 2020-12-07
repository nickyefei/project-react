import React, { Component} from 'react'
import { BrowserRouter, Route, Switch, useParams, useLocation } from 'react-router-dom'

import Home from '../pages/home'
import Form from '../pages/form'
import List from '../pages/list'

const TagPage = function() {
  const params = useParams()
  const location = useLocation()
  console.log('params', params)
  console.log('location', location)
  return (
    <div>
      this is tag{params.id}
    </div>
  )
}

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/form" exact component={Form} sensitive={false}></Route>
          <Route path="/list/:id" render={(props) => {
            return true ? <List {...props} name="list"/> : <Form {...props} name="form"/>
          }}></Route>
          <Route path={'/tag/:id(\\d+)'}>
            <TagPage/>
          </Route>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Router