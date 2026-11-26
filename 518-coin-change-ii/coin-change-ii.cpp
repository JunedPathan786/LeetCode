class Solution {
public:
    int dp[305][5005];
    int calculateCoin(int idx, int amount , vector<int>& coins){
        if(amount == 0) return 1;
        if(idx < 0) return 0;
        if(dp[idx][amount] != -1) return dp[idx][amount];
        int ways = 0;
        for(int coin_amount = 0; coin_amount <= amount; coin_amount += coins[idx] ){
            ways += calculateCoin(idx- 1, amount - coin_amount, coins);
        }
        return dp[idx][amount] = ways;
    }
    int change(int amount, vector<int>& coins) {
        memset(dp, -1, sizeof(dp));
        return calculateCoin(coins.size() - 1, amount, coins);
    }
};