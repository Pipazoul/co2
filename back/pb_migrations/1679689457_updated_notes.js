migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k5h2dldeygdvzz9")

  collection.listRule = "@request.auth.id != \"\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k5h2dldeygdvzz9")

  collection.listRule = null

  return dao.saveCollection(collection)
})
