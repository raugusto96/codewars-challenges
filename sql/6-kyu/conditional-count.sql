SELECT
    EXTRACT(MONTH FROM pay.payment_date::timestamp) AS month,
    COUNT(pay.payment_id) AS total_count,
    SUM(pay.amount) AS total_amount,
    SUM(CASE WHEN pay.staff_id = 1 THEN 1 ELSE 0 END) AS mike_count,
    SUM(CASE WHEN pay.staff_id = 1 THEN pay.amount ELSE 0 END) AS mike_amount,
    SUM(CASE WHEN pay.staff_id != 1 THEN 1 ELSE 0 END) AS jon_count,
    SUM(CASE WHEN pay.staff_id != 1 THEN pay.amount ELSE 0 END) AS jon_amount
FROM
    payment pay
GROUP BY EXTRACT(MONTH FROM pay.payment_date::timestamp)
ORDER BY month ASC
