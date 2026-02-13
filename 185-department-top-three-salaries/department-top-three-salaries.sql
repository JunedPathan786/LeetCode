# Write your MySQL query statement below
SELECT Department,Employee,Salary
FROM
(SELECT d.name as Department , e.name as Employee  , e.salary  AS Salary,
DENSE_RANK() OVER(PARTITION BY d.name ORDER BY e.salary DESC) AS ranks
FROM 
Employee AS e
LEFT JOIN
Department AS d
ON
e.departmentId  = d.id
) AS NEW_TABLE
WHERE ranks <= 3