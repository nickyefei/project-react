import React, { Component, createContext} from 'react'
import { Link } from 'react-router-dom'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Detail from './detail'

export const { Provider, Consumer } = createContext('light')

const CheckboxComp = React.forwardRef((props, ref) => {
  return (
    <input type="checkbox" ref={ref} {...props}/>
  )
})

class Home extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
    this.checkboxRef = React.createRef()
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  handleClick(e) {
    this.props.history.push('/list/1') // 跳转的组件内需要通过this.props.match.params[参数名]获取参数
    // this.props.history.push('list', 1) // 跳转的组件内需要通过this.props.history.loaction.state获取参数
  }

  handleInputSetValue(e) {
    e.preventDefault()
    this.inputRef.current.value = '赋值成功啦~'
  }

  handleCheckBoxSetValue(e) {
    this.checkboxRef.current.checked = !this.checkboxRef.current.checked
  }

  render() {
    return (
      <Provider value="这是来自首页的数据">
        <div className="home">
          <Link to="/list/1">去列表页</Link>
          <br/>
          <Link to={{
            pathname: '/form',
            search: '?target=home',
            hash: '#form',
            state: {
              fromHome: true
            }
          }}>去表单页</Link>
          <br/>
          <Link to="/tag/666">去tag页面（函数组件）</Link>
          <button onClick={this.handleClick.bind(this)}>点击跳转列表页</button>
          <br/>
          <img src="about:blank" alt="ttt"/>
          <br/>
          <Detail/>
          <br/>
          <div>
            <input ref={this.inputRef}/>
            <button type="text" onClick={this.handleInputSetValue.bind(this)}>点击给输入框赋值</button>
          </div>
          <div>
            <label>复选框</label>
            <CheckboxComp ref={this.checkboxRef}/>
            <button type="text" onClick={this.handleCheckBoxSetValue.bind(this)}>点击改变复选框值</button>
          </div>
        </div>
      </Provider>
    )
  }
}

export default Home