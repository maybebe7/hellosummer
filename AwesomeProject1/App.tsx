import React from 'react';
import App from './src';
import Realm from 'realm';
import {createRealmContext} from '@realm/react';
//import Programs from './src/schema/ProgramsSchema.js'

class Programs extends Realm.Object {
  static schema = {
    name: 'Programs',
    properties: {
      _id: 'objectId',
      name: 'string',
    },
    primaryKey: '_id',
  };
}

const MainApp = () => {

// Create a configuration object
 const realmConfig = {
   schema: [Programs],
 };
// Create a realm context
 const {RealmProvider, useRealm, useObject, useQuery} =
   createRealmContext(realmConfig);


  return (
      <RealmProvider>
        <App />
      </RealmProvider>
    );

};


export default MainApp;
