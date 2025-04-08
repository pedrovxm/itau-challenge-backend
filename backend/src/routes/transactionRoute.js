import {Router} from "express"
import { TransactionController } from "../controllers/transactionController.js"



const transactionRouter = Router()

const transactionController = new TransactionController()


transactionRouter.post("/transactions",transactionController.createTransaction)
transactionRouter.get("/transactions",transactionController.findManyTransactions)


export{transactionRouter}