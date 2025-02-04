import React, { useState } from 'react'

function Staff({ Class, dostaff, nstaff }) {
    const [stfid, doid] = useState('')
    const [stfname, doname] = useState('')
    const [dept, dodept] = useState('')
    const [sub, dosub] = useState('')
    const [showAlert, setShowAlert] = useState(false);
    return (
        <div>
            {
                showAlert && (                    
                    <div class="alert alert-danger hide " role="alert">
                        enter details properly
                    </div>
                )
            }

            <h2>ADD STAFF</h2>
            <div className='staffform' style={{ display: "flex" }}>
                <div className='staffid m-2'>
                    <p>Enter staffid</p>
                    <input onChange={(e) => {
                        doid(e.target.value)
                    }} className='form-control'></input>
                </div>
                <div className='staffname m-2'>
                    <p>Enter staff name</p>
                    <input onChange={(e) => {
                        doname(e.target.value)
                    }} className='form-control'></input>

                </div>
                <div className='dept m-2'>
                    <p>select department</p>
                    <select className='form-control' name='class' onChange={(e) => {
                        dodept(e.target.value)
                    }}>
                        <option >select</option>
                        {
                            Class.map((item) => {
                                return (
                                    <option value={item.text}>{item.text}</option>
                                )

                            })

                        }

                    </select>

                </div>
                <div className='subject m-2'>
                    <p>Enter subject</p>
                    <input onChange={(e) => {
                        dosub(e.target.value)
                    }} className='form-control'></input>
                </div>
                <div className='addbutton m-2'>
                    <p>Click</p>
                    <button style={{ height: "50%" }} className='btn btn-success'
                        onClick={() => {
                            if (stfid && stfname && dept && sub) {
                                dostaff([...nstaff, { id: Date.now(), sid: stfid, sname: stfname, dept: dept, subject: sub }])
                                setShowAlert(false)
                            }
                            else {
                                setShowAlert(true)
                            }
                            console.log(nstaff)
                        }}
                    ><i class="bi bi-plus-square"></i></button>
                </div>
            </div>
            <div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Staff ID</th>
                            <th scope="col">Staff Name</th>
                            <th scope="col">Dept</th>
                            <th scope="col">subject</th>
                            <th scope="col">Trash</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            nstaff.map((item, key) => [
                                <tr>

                                    <td>{item.sid}</td>
                                    <td>{item.sname}</td>
                                    <td>{item.dept}</td>
                                    <td>{item.subject}</td>
                                    <td><button className='btn' onClick={() => {
                                        dostaff(nstaff.filter(item2 =>
                                            item2.id !== item.id
                                        ))
                                    }}><i class="bi bi-trash3 text-danger"
                                    ></i></button></td>
                                </tr>
                            ])
                        }

                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default Staff
