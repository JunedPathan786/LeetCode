class Solution {
public:
    int findMaxConsecutiveOnes(vector<int>& nums) {
        int CurrCount = 0;
        int maxCount = 0;

        for(int i=0; i<nums.size(); i++){
            if(nums[i] == 1){
                CurrCount++;
            }else{
                CurrCount = 0;
            }
            maxCount = max(maxCount, CurrCount);
        }

        return maxCount;
    }
};