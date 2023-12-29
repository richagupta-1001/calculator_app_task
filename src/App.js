import React,{useState} from 'react';
import './App.css';

function App() {
   const [result,setResult]=useState('')
   function handle(e){
    if(e.target.value === '.' && result.includes('.')) return;
    setResult(result +e.target.value) 
   }
  //  function calculate(){
  //   try{
  //     setResult(eval(result).toString())
  //   }
  //   catch{
  //     setResult("Error");
  //   }
   

  //  } 
   
   
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
            <input type="button" value="=" />
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
