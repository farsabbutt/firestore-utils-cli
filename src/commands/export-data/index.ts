import { Command } from '@oclif/core';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import * as admin from 'firebase-admin';
import * as inquirer from 'inquirer';
import * as path from 'path';
import { FirestoreUtilsCliConfig } from '../../types';

const logSymbols = require('log-symbols');

interface FirestoreCollection {
  name: string
}

type FirestoreCollectionList = FirestoreCollection[]

export default class Export extends Command {
  static description = 'Export data from firebase firestore database';

  static examples = [
    `firestore-utils-cli export-data`,
  ];

  async run(): Promise<void> {

    const collections = await this.getFirestoreCollectionsList();
    if (!collections) {
      this.log('Failed to get firestore collections');
      return;
    }

    const response: any = await inquirer.prompt([{
      name: 'collection',
      message: 'Select a collection to export',
      type: 'list',
      choices: collections,
    }]);
    const collectionToExport = response.collection;
    this.log(logSymbols.info, `Exporting collection: ${collectionToExport}`);
    await this.exportFirestoreCollection(collectionToExport);
  }

  private async exportFirestoreCollection(collectionName: string) {
    const database = admin.firestore();
    const collectionReference = database.collection(collectionName);
    const collection: Record<string, any> = {};

    await collectionReference.get().then((querySnapshot) => {
      querySnapshot.forEach(function(doc) {
        collection[doc.id] = doc.data();
      });
    }).catch((error) => {
      this.log('Error getting documents: ', error);
    });

    this.createExportFile(collectionName, JSON.stringify(collection))
  }

  private createExportFile(collectionName: string, data: string) {
    this.log(logSymbols.info, `Creating export file`);
    const currentDate = new Date()
    const dateFolderName = `${currentDate.getDate()}-${currentDate.getMonth()}-${currentDate.getFullYear()}`
    this.createDirectory(`exports/${dateFolderName}`)
    const exportFilePath = `./exports/${dateFolderName}/${collectionName}.json`
    writeFileSync(exportFilePath, data, { encoding: 'utf8' });
    this.log(logSymbols.info, `Collection export successful in path: (${exportFilePath})`);
  }

  private createDirectory(filepath:string) {
    var dirname = path.dirname(filepath);

    if (!existsSync(dirname)) {
      this.createDirectory(dirname);
    }
    mkdirSync(filepath, { recursive: true });
  }

  private async getFirestoreCollectionsList(): Promise<FirestoreCollectionList | null> {
    let credentials = null;
    const collectionsList: FirestoreCollectionList = [];
    try {
      credentials = readFileSync('./firebase-credentials.json', { encoding: 'utf8', flag: 'r' });
    } catch (e) {
      this.error('Failed to load firebase credentials. Make sure "firebase-credentials.json" file exists in the root directory!');
      return null;
    }

    if (!credentials) {
      return null;
    }
    const parsedCredentials: FirestoreUtilsCliConfig = JSON.parse(credentials);
    const firebaseCredentials = parsedCredentials?.firebaseCredentials;
    const firebaseProjectId = firebaseCredentials?.project_id;
    const firebaseDatabaseURL = parsedCredentials?.firestoreDatabaseUrl;

    if (!firebaseCredentials) {
      this.log(logSymbols.error, `Could not find: firebase credentials, Have you configured it in "firebase-credentials.json" file?`);
      return null
    }
    if (!firebaseDatabaseURL) {
      this.log(logSymbols.error, `Could not find: firebase database URL. Have you configured it in "firebase-credentials.json" file?`);
      return null
    }

    this.log(logSymbols.info, `Using firebase project: ${firebaseProjectId}`);

    admin.initializeApp({
      credential: admin.credential.cert(firebaseCredentials),
      databaseURL: firebaseDatabaseURL,
    });
    const firestore = admin.firestore();
    const collections = await firestore.listCollections();
    collections.forEach((collection) => {
      collectionsList.push({ name: collection.path });
    });
    return collectionsList;
  }
}
