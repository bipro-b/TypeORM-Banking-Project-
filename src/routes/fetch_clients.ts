import express from "express";
import { Client } from "../entities/Client";
import {createQueryBuilder} from "typeorm"
const router = express.Router();

router.get('/api/clients',async(req,res)=>{
   const client = await createQueryBuilder(
      'client'
   )
   .select('client.first_name')
   .addSelect('client.last_name')
   .from(Client,'client')
   .leftJoinAndSelect(
      'client.transactions',
      'transaction'
   )
   .where('client.id = :clientId', {
      clientId: 1,
   })
   .getOne();


   return res.json(client)
})

export {router as fetchClientRouter}

/* 
const client = await Client.find() // for all clients

const client = await createQueryBuilder(
      'client'
   )
   .select('client')
   .from(Client,'client')
   .where('client.id= :clientId',{clientId:6})
   .getOne()

   fetch by id
   .select(client.first_name) // first name will be fetched

   .addSelect("SUM(transaction)","sum")

   .where('client.balance >= :balance',{balance:5000})
   .getMany()

	// const bankers = await createQueryBuilder(
	// 	'banker'
	// )
	// 	.where('id = :bankerId', { bankerId: 2 })
	// 	.getOne();

	// const clients = await createQueryBuilder(
	// 	'client'
	// )
	// 	.select('client')
	// 	.from(Client, 'client')
	// 	.leftJoinAndSelect(
	// 		'client.transactions',
	// 		'transaction'
	// 	)
	// 	.where('client.id = :clientId', {
	// 		clientId: 3,
	// 	})
	// 	.getOne();



*/