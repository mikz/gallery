import React, {PropTypes} from 'react'

export class FileInput extends React.Component {
  static propTypes = {
    selectFiles: PropTypes.func.isRequired,
    accept: PropTypes.string
  }

  onSelectedFiles (event) {
    this.props.selectFiles(event.target.files)
  }

  render () {
    return <input type='file' accept={this.props.accept} multiple onChange={e => this.onSelectedFiles(e)}/>
  }
}

