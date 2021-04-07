SELECT
  w.common_name,
  mm.name,
  mm.description,
  mm.april,
  mm.may,
  mm.june,
  mm.july,
  mm.august,
  mm.september,
  mm.october,
  mm.november,
  mm.december_march
FROM
  user_management_method umm
  JOIN management_method mm ON mm.method_id = umm.method_id
  JOIN weed w ON w.weed_id = mm.weed_id
WHERE
  user_id = $1;

