import React, { Component } from 'react'
import { Link, NavLink } from 'react-route-dom'
// import { View, Text, Button } from '@tarojs/components'
import './index.scss'
import { createPortal } from 'react-dom' // 入口页面新增挂载点
import loadable from 'react-loadable' // 异步加载组件库
import createSeletor from 'reselect' // 缓存数据

// 返回新的component
const listPage = loadable({
  loader: () => import('./drag'),
  loading: () => <div className='is-active'>loading...</div>
})

// 返回缓存过的函数
const getItem = state => state.item
const getId = state => state.id
const reselect = createSeletor(getItem, getId, (item, id) => {
  console.log('result')
})

export default class Nav extends Component {
  state: any = {
    visiable: false
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  renderDialog() {
    return (
      <div>
        <NavLink exact to='/home' activeClassName='is-active'>菜单1</NavLink>
        <NavLink exact to='/home' activeClassName='is-active'>菜单2</NavLink>
        <NavLink exact to='/home' activeClassName='is-active'>菜单3</NavLink>
      </div>
    )
  }

  handleClick(e) {
    this.setState({
      visiable: !this.state.visiable
    })
  }

  reselectFunc = reselect

  render () {
    console.log(this.state.visiable)
    if (!this.state.visiable) {
      return (
        <button onClick={this.handleClick.bind(this)}>点击按钮弹出对话框</button>
      )
    }

    return createPortal(
      this.renderDialog(),
      document.getElementById('dialog-container')
    )
  }
}
