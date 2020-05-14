/**
 * Parses queries in the input string, return them in an array
 * @param {String} migration Single String consists of multiple queries
 * @returns {Array.<String>} 
 */
function dbMigrationParser(migration) {
    try {
        return migration
            .toString()
            .split('-- ')
            .filter(sql => sql.length > 0)
            .map(sql => sql = '-- ' + sql)
    } catch (error) {
        console.log(error)
        return []
    }
}


module.exports = {
    dbMigrationParser
}