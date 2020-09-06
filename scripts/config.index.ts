import { writeFile } from 'fs';

import { name, version } from '../package.json';

const targetPath = './src/environments/environment.prod.ts';

const envConfigFile = `export const environment = {
   production: true,
   name: '${name}',
   version: '${version}',
   apiUrl: '${process.env.API_URL}',
   locations: '${process.env.LOCATIONS_ENDPOINT}',
   apartments: '${process.env.APARTMENTS_ENDPOINT}',
   restaurantRecommender: '${process.env.RECOMMENDER_RESTAURANT_ENDPOINT}'
};
`;

writeFile(targetPath, envConfigFile, 'utf8', (err) => {
  if (err) {
    return console.log(err);
  }
});
