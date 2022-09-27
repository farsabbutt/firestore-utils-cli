🔥firestore-utils-cli
Google firebase firestore utility cli to export collections data.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)

# 🚀 Demo
![firestore utils cli demo](https://raw.githubusercontent.com/farsabbutt/firestore-utils-cli/master/demo.gif)

# 📜 Usage
1) Install package by running ``npm install -g firestore-utils-cli``
2) Inside any folder create a ``firebase-credentials.json`` file
3) Configure firebase credentials and firebase database URL in the file created in the last step. Your config should look like this:
```
{
  "firebaseCredentials": {
    "type": "service_account",
    "project_id": "YOUR_PROJECT_ID",
    "private_key_id": "YOUR_PRIVATE_KEY_ID",
    "private_key": "YOUR_PRIVATE_KEY",
    "client_email": "YOUR_CLIENT_EMAIL",
    "client_id": "YOUR_CLIENT_ID",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "YOUR_CLIENT_x509_CERT_URL"
  },
  "firestoreDatabaseUrl": "YOUR_DATABASE_URL"
}
```
4) Execute ``firestore-utils export-data`` to have an interactive CLI menu to export your firestore collections
5) Once exported successfully, the exported firebase collections will be listed under ``exports`` folder

# ❗ Important Notes
Please note that exporting firestore data means you will be performing reads on your firestore database, and you may get charged for it especially when you have a large amount of data in your collections!
