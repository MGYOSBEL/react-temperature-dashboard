export function convertDatabaseObjectIntoArray(databaseObject) {
    const nodes = {};
    for (const key in databaseObject) {
      nodes[key] = [];
      for (const entry in databaseObject[key].history) {
        nodes[key].push(databaseObject[key].history[entry]);
      }
    }
    return nodes;
}