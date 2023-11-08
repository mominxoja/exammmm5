import { FC } from "react"
import TransactionForm from "../components/TransactionForm"
import { instance } from '../api/axios.api';
import { ICategory } from '../types/types';
import { toast } from 'react-toastify';
import TransactionTable from "../components/TransactionTable";

export const transactionLoader = async () =>{
  const categories = await instance.get<ICategory[]>('/categories')
  const transactions = await instance.get('/transactions/')

  const data ={
      categories: categories.data,
      transactions: transactions.data
  }
  return data
}

export const transactionAction = async ({request}:any) =>{
  switch(request.method){
    case 'POST':{
      const formData = await request.formData()
      const newTransaction = {
        title: formData.get('title'),
        amount: +formData.get('amount'),
        category: formData.get('category'),
        type: formData.get('type')
      }
      await instance.post('/transactions', newTransaction)
      toast.success('Transaction added successfully')
      return null
    }
    case 'DELETE':{

    }
  }
}

const Transactions: FC = () => {
  return (
    <>
    <div className="grid grid-cols-3 gap-4 items-start">
      {/**add transaction form */}
      <div className="col-span-2 grid"><TransactionForm/></div>

      {/**static block */}
      <div className="rounded-md bg-slate-800 p-3">
        <div className="grid grid-cols-2 gap-3">
        <div>
          <p className="text-md uppercase font-bold">Total Income:</p>
          <p className="mt-2 rounded-sm bg-green-600 p-1 text-center">
            1000$
          </p>
        </div>
        <div>
          <p className="text-md uppercase font-bold">Total Expense:</p>
          <p className="mt-2 rounded-sm bg-red-500 p-1 text-center">
            1000$
          </p>
        </div>
      </div>
      <>Chart</>
      </div>
    </div>

    {/** Result table */}
    <h1 className="my-5"><TransactionTable/></h1>
    </>
  )
}

export default Transactions
