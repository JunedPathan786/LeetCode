# Write your MySQL query statement below

DELETE p1
FROM 
Person as p1
INNER JOIN
Person as p2
ON
p1.email = p2.email
AND
p1.id > p2.id