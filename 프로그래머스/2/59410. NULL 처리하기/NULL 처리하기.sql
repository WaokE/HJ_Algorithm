SELECT
ANIMAL_TYPE,
CASE
    WHEN ISNULL(NAME) THEN 'No name'
    ELSE NAME
END AS NAME,
SEX_UPON_INTAKE

FROM ANIMAL_INS
ORDER BY ANIMAL_ID;