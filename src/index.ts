import 'dotenv/config';

import { onDatabaseConnect } from './config/knex';

onDatabaseConnect()
  .then(() => console.log('Database connection successful'))
  .catch((e) => {
    console.log('Error with database connection');
    console.log(e);
  });
