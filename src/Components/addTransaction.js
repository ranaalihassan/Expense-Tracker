import React,{useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
    const [description, setdescription]=useState('');
    const [transactionAmount, settransactionamount]=useState('');

    const {addTransaction}= useContext(GlobalContext);

    const onSubmit = (e)=>{
        e.preventDefault();
        const newTransaction = {
            id: new Date().getTime(),
            description,
            transactionAmount: +transactionAmount
        }

        addTransaction(newTransaction);
    }
    return (
        <div>
            <h3>Add New Transaction</h3>
            <form  onSubmit={onSubmit}>
                <div className="form-control">
               <label htmlFor="description">
                   Description</label>
                   <input type='text' id='description' 
                   placeholder='Detail of Transaction' required="required"
                    value={description} 
                    onChange={(e)=>setdescription(e.target.value)}/>
                </div>
                <div className="form-control">
                <label htmlFor="transactionAmount">
                   Transaction Amount</label>
                   <input type='number'
                    id='transactionAmount' 
                    placeholder='Dollar of Transaction' required="required"
                    value={transactionAmount}
                    onChange={(e)=>settransactionamount(e.target.value)} />     
                   
                </div>
                <button className='btn'>Add Transaction</button>
            </form>
        </div>
    )
}
