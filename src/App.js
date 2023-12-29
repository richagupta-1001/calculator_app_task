import React,{useState} from 'react';
import * as math from 'mathjs'
import './App.css';

function App() {
   const [result,setResult]=useState('');
   const operations=['/','*','+','-','.']
   const handle = e=>{
    if((operations.includes(e.target.value) && result ==='' )||
    (operations.includes(e.target.value) && operations.includes(result.slice(-1))
    )
    ){
      return;
    }

    setResult(result + e.target.value) 
   }
   function calculate(){
    try{
      setResult(math.evaluate(result).toString());
   } 
   catch{
    setResult('Error');
   }
  }
   
   
  return (
    <>
      <div className='container'>
        <div className='calculator'>
          <form action="">
          <div className="result">
            <input type="text" value={result}/>
          </div>
          <div>
            <input type="button"  value="7" onClick={handle}/>
            <input type="button"  value="8" onClick={handle}/>
            <input type="button"  value="9" onClick={handle}/>
            <input type="button"  value="/" onClick={handle}/>
            </div>
            <div>
            <input type="button" value="4" onClick={handle}/>
            <input type="button" value="5" onClick={handle}/>
            <input type="button" value="6" onClick={handle}/>
            <input type="button" value="*" onClick={handle}/>
            </div>
            <div>
            <input type="button" value="1" onClick={handle}/>
            <input type="button" value="2" onClick={handle}/>
            <input type="button" value="3" onClick={handle}/>
            <input type="button" value="+" onClick={handle}/>
            </div>
            <div>
            <input type="button" value="0" onClick={handle}/>
            <input type="button" value="." onClick={handle}/>
            <input type="button" value="=" onClick={calculate}/>
            <input type="button" value="-" onClick={handle}/>
            </div>
            <div className="clear">
            <input type="button" value="clear"  onClick={e=>setResult('')}/> 
            <input type="button" value="Del"  onClick={e=>setResult(String(result).slice(0,-1))}/>
            </div>
        
          

          </form>
        </div>
      </div>
    </>
  );
}

export default App;
