import React, { useState } from 'react'
import './Class.css'
function Class({ nclass, doclass, setShowStaff }) {
    const [str, dostr] = useState('')
    return (
        <div>
            <button className='btn'>Class :{nclass.length}</button>
            <div className='classdiv'>
                <div style={{display:"flex"}}>
                    <input style={{height:"100px"}} className='form-control' onChange={(e) => {
                        dostr(e.target.value.toUpperCase())
                    }}
                        value={str}></input>
                    <button style={{height:"100px"}} className='btn' onClick={() => {
                        if (str !== '')
                            doclass([...nclass, { id: Date.now(), text: str }])
                    }}><i class="bi bi-plus-square"></i></button>
                </div>
                <div className='classresult'>
                    <div className='p-2 m-2' style={{ minWidth: "-5px",overflow:"auto",height: '200px' }}>
                        {
                            nclass.map((item, key) => {
                                if (item.text !== '') {
                                    return (
                                        <>

                                            <div className="list-group classlist">
                                                <div className="list-group-item classitem m-1" style={{ width: "200px", wordWrap: "break-word", border: "1px solid black", padding: "10px" }}>{item.text}</div>
                                                <button className=' btn' onClick={() => {
                                                    doclass(nclass.filter(item2 => item2.id !== item.id))
                                                }} ><i class="bi bi-x-circle-fill text-danger"></i></button>

                                            </div>

                                        </>
                                    )
                                }

                            })
                        }
                    </div>
                </div>

                <button className='btn' onClick={() => {
                    setShowStaff(true)
                }}>Next</button>
            </div>
        </div>
    )
}

export default Class
