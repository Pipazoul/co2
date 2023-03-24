migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fya8oa0tpwqral1")

  collection.name = "tasks"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fya8oa0tpwqral1")

  collection.name = "timetrack"

  return dao.saveCollection(collection)
})
