import mongoose, { Schema } from "mongoose";


const transactionSchema = new Schema({
    valor: {type:Number, required:true},
    dataHora: {type:Date , required:true}
})


const transactionModel = mongoose.model("Transaction",transactionSchema)

export {transactionModel}