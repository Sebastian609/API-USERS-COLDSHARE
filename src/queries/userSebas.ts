export const createUserQuery = `
INSERT INTO tbl_users
(name, lastname, password, admin, username)
VALUES(?, ?, ?, ?, ?);
`

export const authUserQuery = `
select 
tu.id as id,
tu.name as name,
tu.lastname as lastname,
tu.username as username,
tu.is_active as isActive,
tu.password  as password,
tu.admin  as isAdmin
from tbl_users tu 
where tu.password like ? and tu.username like ?
and tu.is_active = 1
`
export const updateUser = `
UPDATE tbl_users
SET name = ?, 
    lastname = ?, 
    password = ?, 
    admin = ?,  
    is_active = ?, 
    username = ?
WHERE id = ?;
`;

export const getAllUser = `select 
tu.id as id,
tu.name as name,
tu.lastname as lastname,
tu.username as username,
tu.is_active as isActive,
tu.password  as password,
tu.admin  as isAdmin
from tbl_users tu `


export const findUser = `select 
tu.id as id,
tu.name as name,
tu.lastname as lastname,
tu.username as username,
tu.is_active as isActive,
tu.password  as password,
tu.admin  as isAdmin
from tbl_users tu 
where tu.id = ?
`