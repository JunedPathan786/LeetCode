SELECT today.id 
FROM Weather as today
where EXISTS
(SELECT 1 FROM Weather as yesterday
WHERE yesterday.temperature < today.temperature
AND 
DATEDIFF(today.recordDate, yesterday.recordDate) = 1)