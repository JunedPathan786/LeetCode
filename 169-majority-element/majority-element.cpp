class Solution {
public:
    int majorityElement(vector<int>& nums) {
       int n = nums.size();
    
       //frequency
       int freq = 0, ans = 0; 
       for(int i=0; i< n; i++){
        if(freq == 0){
            ans = nums[i];
        }
        if(ans == nums[i]){
            freq++;
        }else{
            freq--;
        }
       }

       //count
       int count = 0;
       for(int val: nums){
        count++;
       }
       if(count == ans) ans;
       else -1;
        return ans;
    }
};