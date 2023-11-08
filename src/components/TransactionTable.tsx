import { FC } from "react"
import { FaTrash } from "react-icons/fa"
import { useLoaderData } from "react-router-dom"
import { IResponseTransactionLoader } from "../types/types"
import { formDate } from "../helpers/data.helper"
import { formatToUSD } from "../helpers/currency.helper"

const TransactionTable:FC = () => {
    const {transactions} = useLoaderData() as IResponseTransactionLoader
    console.log(transactions);
    
  return <>
   <div className="bg-slate-800 px-4 py-3 mt-4 rounded-md">
    <table className="w-full">
        <thead>
            <tr>
                <td className="font-bold">N</td>
                <td className="font-bold">Title</td>
                <td className="font-bold">Amount</td>
                <td className="font-bold">Category</td>
                <td className="font-bold">Date</td>
                <td className="text-right">Action</td>

            </tr>
        </thead>
        <tbody>
            {transactions.map((transaction, idx) => (
            <tr key={idx}>
            <td>{idx+1}</td>
            <td>{transaction.title}</td>
            <td className={transaction.type === 'income' ? 'text-green-500' : 'text-red-500'}>{transaction.type === 'income' ? `+ ${formatToUSD.format(transaction.amount)}` : `- ${formatToUSD.format(transaction.amount)}`}</td>
            <td>{transaction.category.title}</td>
            <td>{formDate(transaction.createdAt)}</td>
            <td className="text-right">
                <button className="btn hover:btn-red ml-auto">
                    <FaTrash/>
                </button>
            </td>
        </tr>
            ))}
        </tbody>
    </table>
   </div>
  </>
}

export default TransactionTable
