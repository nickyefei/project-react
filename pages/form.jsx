import React, { Component } from 'react'
import PropTypes from 'prop-types';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { increment, reset } from '../store/rootAction'
import './assets/form.less'

class Form extends Component {
  constructor(props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  componentDidMount() {
    // console.log('form-props', this.props)
  }

  handleAdd(e) {
    this.props.increment(5)
  }

  handleRest(e) {
    this.props.reset()
  }

  render() {
    // console.log(this.props)
    const html = 'this is &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; html'
    return (
      <div className="form">
        <p dangerouslySetInnerHTML={{__html: html}}></p>
        <p>{this.props.name}</p>
        { this.props.count }
        <button onClick={this.handleAdd.bind(this)}>add</button>
        <button onClick={this.handleRest.bind(this)}>reset</button>
      </div>
    )
  }
}

Form.propTypes = {
  name: PropTypes.string
}

Form.defaultProps = {
  name: 'nick'
}

function mapStateToProps(state) {
  return {
    count: state.formReducer.count
  }
}

const mapDispatchToProps = {
  increment,
  reset
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)