import AWS from 'lib/aws'
import querystring from 'querystring'
import React from 'react'

import { App } from 'lib/components/app.js'

import store from 'lib/store'

import { Provider } from 'react-redux'
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react'

let hash = window.location.hash.substr(1, window.location.hash.length)
let response = querystring.parse(hash)
let id_token = response.id_token

console.log('Got auth response:', response)

AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: 'eu-west-1:ef0df6c4-308b-4938-9b4c-46178ece72e1',
  Logins: { 'accounts.google.com': id_token }
})

AWS.config.credentials.get(error => {
  if (error) {
    throw new Error(error)
  } else {
    console.warn(AWS.config.credentials.identityId)
  }
})

React.render(<div>
  <Provider store={store}>
    {() => <App />}
  </Provider>
  <DebugPanel top right bottom>
    <DevTools store={store}
            monitor={LogMonitor} />
  </DebugPanel>
</div>, document.body)
