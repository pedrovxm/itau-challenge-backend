import { TransactionService } from "../services/transactionServices.js";


class TransactionController{

    async createTransaction(req,res){
        try{

            const newTransactionService =  new TransactionService()

            const newTransaction = await newTransactionService.createTransaction(req.body)

            res.status(200).json(newTransaction)

        }catch(err){
            console.log(`Error creating transaction ${err}`)
            res.status(400)
        }
    }
}


export {TransactionController}