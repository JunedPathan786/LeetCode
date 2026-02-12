# Write your MySQL query statement below

SELECT category, accounts_count
FROM (
    SELECT 'High Salary' AS category,
           SUM(CASE WHEN income > 50000 THEN 1 ELSE 0 END) AS accounts_count,
           1 AS sort_order
    FROM Accounts

    UNION ALL

    SELECT 'Low Salary',
           SUM(CASE WHEN income < 20000 THEN 1 ELSE 0 END),
           2
    FROM Accounts

    UNION ALL

    SELECT 'Average Salary',
           SUM(CASE WHEN income BETWEEN 20000 AND 50000 THEN 1 ELSE 0 END),
           3
    FROM Accounts
) t
ORDER BY sort_order;
