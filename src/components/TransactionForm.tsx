import { FC, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { Form, useLoaderData } from 'react-router-dom';
import { IResponseTransactionLoader } from '../types/types';
import CategoryModal from './CategoryModal';



const TransactionForm:FC = () => {
    const [visibleModal, setVisibleModal] = useState(false)
    const {categories} = useLoaderData() as IResponseTransactionLoader
      return <div className='rounded-md bg-slate-800 p-4'>
        <Form className='grid gap-2' method='post' action='/transactions'>
            <label className='grid' htmlFor="title">
                <span>Title</span>
                <input type="text" className='border:bg-slate-900 input' placeholder='Title...' name='title' required />
            </label>
            <label className='grid' htmlFor="title">
                <span>Amount</span>
                <input type="number" className='border:bg-slate-900 input' placeholder='Amount...' name='amount' required />
            </label>
            {categories.length ? <label htmlFor="category" className='grid'>
                <span>Category</span>
                <select className='input' name="category" required>
                {
                    categories.map((ctg, idx)=> (
                        <option key={idx} value={ctg.id}>{ctg.title}</option>
                    ))
                }
                </select>
            </label> : <h1 className='mt-1 text-red-300'>To continue create category</h1>}
            <button onClick={()=> setVisibleModal(true)} className="max-w-fit flex mt-2 items-center gap-2 text-white/50 hover:text-white">
                <FaPlus/>
                <span>Manage Categories:</span>
            </button>

            {/**radio btn */}
            <div className='flex gap-4 items-center'>
                <label className='flex cursor-pointer items-center gap-2'>
                    <input type="radio" name='type' value={'income'} className='form-radio text-blue-600' />
                    <span>Income</span>
                </label>
                <label className='flex cursor-pointer items-center gap-2'>
                    <input type="radio" name='type' value={'expense'} className='form-radio text-blue-600' />
                    <span>Expense</span>
                </label>
            </div>

            {/**submit btn */}
            <button className='btn max-w-fit bg-green-600 text-bold hover:bg-green-800 rounded-lg'>Submit</button>

        </Form>

        {visibleModal &&(
            <CategoryModal type='post' setVisibleModal={setVisibleModal}/>
        )}
      </div>

}

export default TransactionForm
