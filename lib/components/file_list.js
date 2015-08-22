import React, {Component, PropTypes} from 'react'
import { Image } from 'lib/components/image'

export class FileList extends Component {
  static propTypes = {
    files: PropTypes.arrayOf(PropTypes.instanceOf(File)).required
  }
  render () {
    let { files } = this.props
    let items = files.map(file =>
      <li key={file}>
        <Image file={file}/>
        <span className='file-name'>{file.name}</span>
        <span className='file-size'>{file.size}</span>
    </li>)
    return (<ul>{items}</ul>)
  }
}
