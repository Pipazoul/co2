migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("818ez0hm39z8cen")

  // remove
  collection.schema.removeField("gondvdhh")

  // remove
  collection.schema.removeField("jacostvu")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "j6jur7sn",
    "name": "items",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("818ez0hm39z8cen")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gondvdhh",
    "name": "ciqual_codes",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jacostvu",
    "name": "units",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("j6jur7sn")

  return dao.saveCollection(collection)
})
