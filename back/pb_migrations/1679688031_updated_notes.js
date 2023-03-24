migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k5h2dldeygdvzz9")

  // remove
  collection.schema.removeField("abbrruj8")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "a3nlbtpa",
    "name": "content",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k5h2dldeygdvzz9")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "abbrruj8",
    "name": "content",
    "type": "editor",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("a3nlbtpa")

  return dao.saveCollection(collection)
})
