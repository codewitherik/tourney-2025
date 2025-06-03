import { Client, Account, ID } from 'appwrite'

const client = new Client()

client
  .setEndpoint('"https://fra.cloud.appwrite.io/v1"') // z.B. http://localhost/v1
  .setProject("tourney-turnier1234")             // z.B. 66594...

export const account = new Account(client)
export { ID }
