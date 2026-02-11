# Write your MySQL query statement below

SELECT ROUND(SUM(player_login) / COUNT(DISTINCT player_id ),2) AS fraction 
FROM
(SELECT player_id, 
datediff(event_date , MIN(event_date) over(partition by player_id ))=1 AS player_login
FROM 
Activity) as new_table