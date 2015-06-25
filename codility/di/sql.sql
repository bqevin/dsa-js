-- write your code in SQLite 3.8.6
SELECT sensor_id, COUNT(DISTINCT event_type) as types
FROM events
GROUP BY (sensor_id)
ORDER BY sensor_id ASC