import React, {Component, PropTypes} from 'react'

export class Image extends Component {
  static propTypes = {
    file: PropTypes.instanceOf(File).required
  }

  constructor (props) {
    super(props)
    this.file_reader = new FileReader()
    this.state = {}
  }

  componentDidMount () {
    let reader = this.file_reader
    let image = this

    let reset = event => image.setState({result: null})
    let progress = event => console.log(event)
    let success = event => image.setState({result: event.target.result})

    reader.addEventListener('progress', progress)
    reader.addEventListener('load', success)
    reader.addEventListener('loadstart',reset)
    reader.addEventListener('error', reset)

    this.loadFile(this.props.file)
  }

  componentWillReceiveProps (props) {
    this.loadFile(props.file)
  }

  loadFile (file) {
    this.file_reader.readAsDataURL(file)
  }

  render () {
    let { file } = this.props
    let { result } = this.state

    return (
      <img file={file} style={{display: result ? 'inline' : 'none'}} src={result}/>
    )
  }
}
