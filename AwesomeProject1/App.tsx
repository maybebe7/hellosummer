import React from 'react';
import App from './src';
import { Realm } from 'realm';
import { AppProvider, createRealmContext } from '@realm/react';

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
  const realmConfig = {
    schema: [Programs],
  };

  const { RealmProvider } = createRealmContext(realmConfig);

  return (
    <AppProvider id="realmapp-izgbd">
      <RealmProvider>
        <App />
      </RealmProvider>
    </AppProvider>
  );
};

export default MainApp;
