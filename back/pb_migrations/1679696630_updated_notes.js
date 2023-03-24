migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k5h2dldeygdvzz9")

  // remove
  collection.schema.removeField("a3nlbtpa")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "l4ever98",
    "name": "content",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k5h2dldeygdvzz9")

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

  // remove
  collection.schema.removeField("l4ever98")

  return dao.saveCollection(collection)
})
