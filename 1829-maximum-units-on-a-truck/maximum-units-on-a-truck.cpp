class Solution {
public:
    int maximumUnits(vector<vector<int>>& boxTypes, int truckSize) {
        sort(boxTypes.begin(), boxTypes.end(), [](const vector<int>& a, vector<int>& b){
            return a[1] > b[1];
        });

        int totalUnits = 0;
        for(const auto& box : boxTypes){
            if (truckSize == 0) break;
            int boxTotake = min(truckSize, box[0]);
            totalUnits += boxTotake * box[1];
            truckSize -= boxTotake;
        }

        return totalUnits;
    }
};