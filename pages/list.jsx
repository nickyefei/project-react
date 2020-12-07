import React, { Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'

class List extends Component {
  constructor(props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render() {
    console.log(this.props)
    return (
      <div className="home">这是列表页，id参数为：{this.props.match.params.id}
      计算结果为：{ this.props.count }
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {
    count: state.formReducer.count
  }
}

// const mapDispatchToProps = {
//   increment,
//   reset
// }

export default connect(mapStateToProps)(List)

