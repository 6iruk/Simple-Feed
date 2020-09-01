import Cloud from '@google-cloud/storage';
import path from 'path';

const serviceKey from path.join(__dirname, '/real-service-account-file.json');
const { Storage } = Cloud
const storage = new Storage({
  keyFilename: serviceKey,
  projectId: 'simple-feed-704cd',
})

module.exports = storage;