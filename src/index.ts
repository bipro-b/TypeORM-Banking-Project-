import { createConnection } from 'typeorm';
import { Client } from './entities/Client';
import express from "express"
import{Banker} from './entities/Banker';
import { Transaction } from './entities/Transaction';
import { createClientRouter } from './routes/create_client';
import {createBankerRouter} from './routes/create_banker'
import { createTransactionRouter } from './routes/create_transaction';
import { connectBankerToClientRouter } from './routes/connect_banker_to_client';
import { deleteClientRouter } from './routes/delete_client';
import { fetchClientRouter } from './routes/fetch_clients';
const app = express()
const main = async () => {
  try {
    const connection = await createConnection({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: "bipro",
        database: 'typeorm',
        entities:[Client,Banker,Transaction],
        synchronize:true
    })
    console.log("Connected to Postgress");
    
    app.use(express.json())

    app.use(createClientRouter);
    app.use(createBankerRouter);
    app.use(createTransactionRouter);
    app.use(connectBankerToClientRouter);
    app.use(deleteClientRouter);
    app.use(fetchClientRouter);
    
    app.listen(8080,()=>{
      console.log("Run on port 8080")
    })
    
  } catch (error) {
    console.error(error)
    throw new Error("Unable to conect db")
  }
   
}

main()