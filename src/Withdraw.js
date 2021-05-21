import React from 'react'
import { useState } from 'react'
import bank_service from './service/bank_service'


export const Withdraw = () => {
    
    const [accn, setAccount] = useState()
    const [password, setPass] = useState()
    const [amount, setAmount] = useState()

    const withdraw = (event) => {
        event.preventDefault();
        const data = {
            accn: accn,
            pwd: password,
            amt: amount
        }
    bank_service.withdraw(data).then((result)=>{
        alert(result.data.message)
    }).catch((err)=>{
        alert(err.response.data.message)
    })
    }

    return (
        <>
            <h3>Withdraw</h3>
            <hr />
            <form>
                <div className="mb-3">
                    <label htmlFor="kk" className="form-label">Account Number</label>
                    <input
                        type="text"
                        className="form-control round"
                        id="accn"
                        aria-describedby="emailHelp"

                        name="accn"
                        onChange={(event) => { setAccount(event.target.value) }}
                    />

                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label"
                    >Password</label>

                    <input
                        type="password"
                        className="form-control round"
                        id="pssw"
                        name="pass"
                        onChange={(event) => { setPass(event.target.value) }}
                    />

                </div>

                <div className="mb-3">
                    <label htmlFor="amt" className="form-label">Amount </label>
                    <input
                        type="text"
                        className="form-control round"
                        id="amdd"
                        name="amd"
                        aria-describedby="emailHelp"
                        onChange={(event) => { setAmount(event.target.value) }}
                    />
                </div >
                <button type="submit " onClick={withdraw} className="btn btn-primary round-button">
                    Withdraw
                </button>
            </form >
        </>
    )
}
