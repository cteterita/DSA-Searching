// 7. Max profit
// The share price for a company over a week's trading is as follows: [128, 97, 121, 123, 98, 97, 105]. If you had to buy shares in the company on a particular day, and sell the shares on a subsequent day, write an algorithm to work out what the maximum profit you could make would be.

let prices = [128, 97, 121, 123, 98, 97, 105];

function maxProfit(prices, max=0) {
    if (prices.length === 1) return max;
    max = Math.max(max, prices[1] - prices[0]);
    return maxProfit(prices.slice(1), max);
}

console.log(maxProfit(prices));