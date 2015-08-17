import AWS from 'aws-sdk'

console.log(`Loaded AWS SDK version ${AWS.VERSION}`)

AWS.config.region = 'eu-west-1'

export default AWS
