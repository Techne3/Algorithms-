// You have deposited a specific amount of dollars into your bank account.
// Each year your balance increases at the same growth rate.
// Find out how long it would take for your balance to pass a specific threshold with teh assumption that you dont' make any additional deposits

//  EXAMPLE:
//// for deposit =100, rate = 20 and threshold =170, the output should be depositProfit(deposit, rate,threshold) = 3

/// year 0 =100
/// year 1 =120
/// year 2 = 144
/// year 3 = 172.8

function depositProfit(deposit, rate, threshold) {
  let year = 0;
  let account = deposit;

  while (threshold > account) {
    account += account * (rate / 100);
    year++;
  }

  return year;
}

console.log(depositProfit(100, 20, 170));
