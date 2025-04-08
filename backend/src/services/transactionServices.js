import { transactionModel } from "../models/transactionModel.js";

class TransactionService{
    async createTransaction(transactionData){
    
    try{
        
        if(transactionData.valor <= 0){
            throw new Error("Value Should be greather than zero")
        }

        if(transactionData.dataHora >= new Date().toISOString()){
            throw new Error("dataHora Should not be greather than Now")
        }

        const newTransaction = new transactionModel(transactionData)

        await newTransaction.save()

        return newTransaction
    }catch(err){
        console.log(`Error validating transaction ${err}`)
    }
}
}



export {TransactionService}