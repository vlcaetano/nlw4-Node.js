import { Connection, createConnection, getConnectionOptions } from "typeorm"

export default async (): Promise<Connection> => {
  // no Windows instalar 'yarn add cross-env -D'
  // alterar "test": "cross-env NODE_ENV=test jest"
  const defaultOptions = await getConnectionOptions()

  return createConnection(
    Object.assign(defaultOptions, {
      database: process.env.NODE_ENV === 'test' 
        ? "./src/database/database.test.sqlite" 
        : defaultOptions.database
    })
  )
}