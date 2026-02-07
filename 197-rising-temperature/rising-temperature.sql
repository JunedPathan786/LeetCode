SELECT today.id
FROM Weather today
WHERE EXISTS (
    SELECT 1
    FROM Weather yesterday
    WHERE yesterday.recordDate = DATE_SUB(today.recordDate, INTERVAL 1 DAY)
    AND yesterday.temperature < today.temperature
);
