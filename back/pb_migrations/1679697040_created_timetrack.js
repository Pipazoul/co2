migrate((db) => {
  const collection = new Collection({
    "id": "fya8oa0tpwqral1",
    "created": "2023-03-24 22:30:40.431Z",
    "updated": "2023-03-24 22:30:40.431Z",
    "name": "timetrack",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      },
      {
        "system": false,
        "id": "a8zx3gwr",
        "name": "start",
        "type": "date",
        "required": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "ptac2iro",
        "name": "end",
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
  const collection = dao.findCollectionByNameOrId("fya8oa0tpwqral1");

  return dao.deleteCollection(collection);
})
