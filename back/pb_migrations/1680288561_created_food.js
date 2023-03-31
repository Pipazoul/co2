migrate((db) => {
  const collection = new Collection({
    "id": "818ez0hm39z8cen",
    "created": "2023-03-31 18:49:21.297Z",
    "updated": "2023-03-31 18:49:21.297Z",
    "name": "food",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "lmlrdruz",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
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
      },
      {
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
      },
      {
        "system": false,
        "id": "g62c6vl8",
        "name": "date",
        "type": "date",
        "required": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("818ez0hm39z8cen");

  return dao.deleteCollection(collection);
})
