# Write your MySQL query statement below

(SELECT u.name as results      
FROM
Users as u
LEFT JOIN
MovieRating as mr
ON
u.user_id = mr.user_id 
GROUP BY u.user_id
ORDER BY COUNT(mr.user_id) DESC , u.name
LIMIT 1)
UNION ALL
(SELECT title as results      
FROM
Movies  as m
LEFT JOIN
MovieRating as mr
ON
m.movie_id = mr.movie_id
WHERE EXTRACT(year_month FROM CREATED_AT) = 202002
GROUP BY m.movie_id    
ORDER BY AVG(mr.rating) DESC , m.title
LIMIT 1)