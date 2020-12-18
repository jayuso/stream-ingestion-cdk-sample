# Welcome to your CDK TypeScript project!

This is a blank project for TypeScript development with CDK.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template

## Blog

Rapid and flexible Infrastructure as Code using the AWS CDK with AWS Solutions Constructs
https://aws.amazon.com/blogs/devops/rapid-flexible-infrastructure-with-solutions-constructs-cdk/

## Feed the Stream

```
aws kinesis put-records \
--stream-name StreamIngestionStack-KinesisLambdaConstructKinesisStreamXXXXXXXX-XXXXXXXXXXXX \
--cli-binary-format raw-in-base64-out \
--records \
PartitionKey=1301,'Data=15.4|2020-08-22T01:16:36+00:00' \
PartitionKey=1503,'Data=39.1|2020-08-22T01:08:15+00:00'
```




