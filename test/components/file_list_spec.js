import React from 'react/addons'
import {FileList} from 'lib/components/file_list'

const TestUtils = React.addons.TestUtils

describe('FileList', function () {
  it('changes the text after click', function () {
    let files = [new File(['hey'], 'somefile')]

    var file_list = TestUtils.renderIntoDocument(
      <FileList files={files}/>
    )

    var list = TestUtils.findRenderedDOMComponentWithTag(file_list, 'ul')
    expect(list.getDOMNode().textContent).toEqual('somefile (3)')
  })
})
