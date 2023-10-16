import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset, incrementByAmount } from '../redux/counterSlice'

function Counter() {
  const [amount, setAmount] = useState("")
  const dispatch = useDispatch()
  const count = useSelector((state) => state.counter.count)
  const handleIncrement = () => {
    if (amount=="") {
      alert("Please provide amount")
    } else {
      dispatch(incrementByAmount(Number(amount)))
    }
  }
  return (
    <div style={{ height: '100vh' }} className='w-100 d-flex justify-content-center
    align-items-center'>
      <div className='d-flex justify-content-center align-items-center border
        rounded p-5 w-25 flex-column'>
        <h1 style={{ fontSize: '100px' }}>{count}</h1>
        <div className='d-flex justify-content-between w-100 mt-5'>
          <button onClick={() => dispatch(decrement())} className='btn btn-warning '>Decrement</button>
          <button onClick={() => dispatch(reset())} className='btn btn-danger'>Reset</button>
          <button onClick={() => dispatch(increment())} className='btn btn-success'>Increment</button>
        </div>
        <div className="d-flex mt-5">
          <input type="text" className='form-control' placeholder='Enter the amount of incerement!!!!!!'
            onChange={e => setAmount(e.target.value)} />
          <button onClick={handleIncrement} className='btn btn-success ms-3'>Increment By Amount</button>
        </div>
      </div>
    </div>
  )
}

export default Counter