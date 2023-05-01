import {BSON} from 'realm';

export class programs extends Realm.Object<programs> {
  _id!: BSON.ObjectId;
  name!: string;
  description!: string;

  static schema: Realm.ObjectSchema = {
    name: 'programs',
    primaryKey: '_id',
    properties: {
      // This allows us to automatically generate a unique _id for each Item
      _id: {type: 'objectId', default: () => new BSON.ObjectId()},
      name: 'string',
      description: 'string',
    },
  };
}