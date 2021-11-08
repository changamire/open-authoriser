# Open Auth Authoriser
A NodeJS based OAuth authoriser function that can be used as the source for a [Lambda-based 
custom authoriser for AWS API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html)

The handler method of the single function expects an event that contains a valid
OAuth id token. 

The handler will validate this token.

Configuration parameters as environment variables

|Environment variable|Description|
|----|----|
|JWKS_URI|The URI of where the JSON Web Key Set can be located|
|AUDIENCE|The audience identifier the token is issued for|
|TOKEN_ISSUER|The token issuer|
