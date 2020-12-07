import React, { Component, createContext} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import form from './form'
import { Consumer } from './home'

// const HomeContext = React.createContext('light')

class Detail extends Component {
  constructor(props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render() {
    return (
      <Consumer>
        {/* Consumer里的内容必须是函数 */}
        {
          value => (
            <div className="home">
              这是详情页，嵌在主页中
              <div>内容是：{value}</div>
            </div>
          )
        }
      </Consumer>
    )
  }
}

export default Detail