import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "ap-south-1_WZspkunsg",
  ClientId: "21c1rhl4ml3ukddnv82htvje7f",
};

export default new CognitoUserPool(poolData);
