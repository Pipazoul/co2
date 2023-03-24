migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fya8oa0tpwqral1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gazyadx0",
    "name": "cat",
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
  const collection = dao.findCollectionByNameOrId("fya8oa0tpwqral1")

  // remove
  collection.schema.removeField("gazyadx0")

  return dao.saveCollection(collection)
})
