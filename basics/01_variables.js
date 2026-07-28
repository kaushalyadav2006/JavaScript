const accountId = 1444553
let accountEmail = "xyz123@gmail.com"
var accontPassword = "12345"
accountCity = "Jaipur"
let accountState;

//accountId = 2 // not allowed

accountEmail = "hc@1231gmail.com"
accontPassword = "21232"
accountCity = "bengluru"

console.log(accountId);


/**
 Prefer not to use var
 because of the issue in blcok scope an functional scope
*/


console.table([accountId,accountEmail,accontPassword,accountCity, accountState]);
