
import { useState } from 'react';
import './App.css';
import Class from './Components/Class/Class';
import Staff from './Components/Staff/Staff';

function App() {
  const [ShowClass, setShowClass] = useState(false);
  const [ShowStaff, setShowStaff] = useState(false);
  const [nclass, doclass] = useState([])
  const [nstaff, dostaff] = useState([])
  return (
    <>
      <div className='container'>
        <div className="left">


          <div className="card m-5" style={{ width: "18rem" }}>
            <img src="https://img.freepik.com/premium-vector/school-timetable-template-designvector-illustration_635979-361.jpg?uid=R141817324&ga=GA1.1.1195849178.1737740341&semt=ais_hybrid" class="card-img-top" alt="..." />
            <div className="card-body">
              <p>
                <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                  Toggle width collapse
                </button>
              </p>
              <div style={{ minHeight: "10px" }}>
                <div className="collapse collapse-horizontal" id="collapseWidthExample">
                  <div className="card card-body" style={{ width: "250px" }}>
                    This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered.
                  </div>
                </div>
              </div>
              <button onClick={() => {
                setShowClass(true)
                console.log(ShowClass)
              }
              } className='btn btn-success'>Create Time Table</button>
            </div>
          </div>
        </div>
        <div className="right">
          {
            ShowClass && (
              <>
                <Class nclass={nclass} setShowStaff={setShowStaff}  doclass={doclass}/>
                {
                  ShowStaff && <Staff Class={nclass} dostaff={dostaff} nstaff={nstaff}></Staff>  
                }   
              </>
            )
          }
        </div>
      </div>
    </>
  );
}

export default App;
