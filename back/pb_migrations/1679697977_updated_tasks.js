migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fya8oa0tpwqral1")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lrgd9ghv",
    "name": "name",
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lrgd9ghv",
    "name": "task",
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
})
