import React,{useState} from 'react';
import './App.css';

function App() {
   const [result,setResult]=useState('')
  return (
    <>
      <div className='container'>
        <div className='calculator'>
          <form action="">
          <div className="result">
            <input type="text" value={result}/>
          </div>
          <div>
            <input type="button"  value="7" onClick={e=>setResult(result +e.target.value)}/>
            <input type="button"  value="8" onClick={e=>setResult(result +e.target.value)}/>
            <input type="button"  value="9" onClick={e=>setResult(result +e.target.value)}/>
            <input type="button"  value="/" onClick={e=>setResult(result +e.target.value)}/>
            </div>
            <div>
            <input type="button" value="4" onClick={e=>setResult(result +e.target.value)}/>
            <input type="button" value="5" onClick={e=>setResult(result +e.target.value)}/>
            <input type="button" value="6" onClick={e=>setResult(result +e.target.value)}/>
            <input type="button" value="*" onClick={e=>setResult(result +e.target.value)}/>
            </div>
            <div>
            <input type="button" value="1" onClick={e=>setResult(result +e.target.value)}/>
            <input type="button" value="2" onClick={e=>setResult(result +e.target.value)}/>
            <input type="button" value="3" onClick={e=>setResult(result +e.target.value)}/>
            <input type="button" value="+" onClick={e=>setResult(result +e.target.value)}/>
            </div>
            <div>
            <input type="button" value="0" onClick={e=>setResult(result +e.target.value)}/>
            <input type="button" value="." onClick={e=>setResult(result +e.target.value)}/>
            <input type="button" value="=" onClick={e=>setResult(eval(result))}/>
            <input type="button" value="-" onClick={e=>setResult(result +e.target.value)}/>
            </div>
            <div className="clear">
            <input type="button" value="clear"  onClick={e=>setResult('')}/> 
            <input type="button" value="Del"  onClick={e=>setResult(result.slice(0,-1))}/>
            </div>
        
          

          </form>
        </div>
      </div>
    </>
  );
}

export default App;
