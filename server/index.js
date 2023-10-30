const { Pool } = require('pg');

const connectionString =
  'postgres://rieenoee:yfHONFEzKgLWSq1GXjySh0U0jR8yEJ0c@bubble.db.elephantsql.com/rieenoee';

const pool = new Pool({
    connectionString,
});

module.exports = {
    query: (queryString, params, callback) => {
        console.log('executed query', queryString)
        return pool.query(queryString, params, callback);
    }
}