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

    async findManyTransactions(req,res){
        try{
            
            const newTransactionService = new TransactionService()
            
            const transactions = await newTransactionService.findManyTransactions()

            res.status(200).json(transactions)
        }catch(err){
            res.status(400).json({error: err})
        }
    }
}


export {TransactionController}