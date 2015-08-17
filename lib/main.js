import AWS from 'lib/aws'

AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: 'eu-west-1:ef0df6c4-308b-4938-9b4c-46178ece72e1'
})

AWS.config.credentials.get(error => {
  if (error) { throw new Error(error) }
  console.log(`Got identity: ${AWS.config.credentials.identityId}`)
})

let login = (event) => {
  console.warn('Attempting to login', event)

  const client_id = '995997974816-k9s306prskj5uj5edr1j5t2movh2abf9.apps.googleusercontent.com'
  const redirect_uri = 'http://localhost:3000/oauth2callback.html'
  const url = `https://accounts.google.com/o/oauth2/auth?response_type=token id_token&scope=openid&nonce=${AWS.config.credentials.identityId}&client_id=${client_id}&redirect_uri=${redirect_uri}`

  window.location.replace(url)
}

document.getElementById('login-google').addEventListener('click', login)
