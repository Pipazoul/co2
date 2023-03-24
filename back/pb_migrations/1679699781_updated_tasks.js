migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fya8oa0tpwqral1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2ilw0cri",
    "name": "project",
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
  collection.schema.removeField("2ilw0cri")

  return dao.saveCollection(collection)
})
