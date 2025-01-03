SELECT
    p.*,
    c.name as company_name
FROM
    products p
    JOIN companies c ON c.id = p.company_id