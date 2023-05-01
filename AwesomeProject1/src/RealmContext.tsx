import {createRealmContext} from '@realm/react';
import {program} from './schemas/ProgramSchema';

export const realmContext = createRealmContext({
  schema: [program],
});
