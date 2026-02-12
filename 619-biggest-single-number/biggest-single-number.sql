# Write your MySQL query statement below

SELECT MAX(num) as num
FROM
(SELECT num
FROM 
MYnumbers
GROUP BY num
HAVING COUNT(num) = 1) as new_table
