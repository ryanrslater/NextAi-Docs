# AWS Rekognition

## Documentation

[https://docs.aws.amazon.com/rekognition/index.html](https://docs.aws.amazon.com/rekognition/index.html)

## Setup
In order to set up AWS Recognition, you'll need to create an access key id and secret access key as well as your region, then copy and paste that into the NextAi Provider.
`/api/ai/[nextai].ts`

```
import NextAi from 'nextai';

export default NextAi({
    Providers: {
        AWS: {
            region: process.env.REGION,
            accessKeyId: process.env.ACCESSKEYID
            secretAccessKey: process.env.SECRETACCESSKEY
        }
    }
})

```