import React from 'react'

function Balance({balance}) {
  return (
    <div className='mt-4'>
        <h1 className=' text-xl font-bold'>Current Balance: {balance}</h1>
    </div>
  )
}

export default Balance
