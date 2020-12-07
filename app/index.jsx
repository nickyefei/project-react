import React, { Component} from 'react'
import { render } from 'react-dom'
import Router from '../router/index'
import { Provider} from 'react-redux'
import store from '../store'

const aaa = 'path-to-regexp' // github

render(
  <Provider store={store}>
    <Router/>
  </Provider>,
  document.getElementById('app')
)