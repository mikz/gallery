import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { selectFiles } from 'lib/actions.js'
import { FileInput } from 'lib/components/file_input.js'
import { FileList } from 'lib/components/file_list.js'

@connect(
    state => ({ files: state.get('files') }))
export class App extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    files: PropTypes.array.isRequired
  }

  render () {
    const { dispatch, files } = this.props
    return (
      <div>
        <FileInput accept='image/*' selectFiles={files => dispatch(selectFiles(files)) }/>
        <FileList files={files.toJS()} />
      </div>
    )
  }
}
