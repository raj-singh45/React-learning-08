import React, { useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom/client"

// Password: ABDBHJDVB , setPassword("ABDBHJDVB")
// length:19 , setLength(19)
// numberChanged = false , setnumberChanged(true)
// charChanged = true , setcharChanged(true)
 
// generatepassword function closure ki wajah se
// PasswordGenerator ke variables (length, numberChanged, charChanged)
// ko access kar sakta hai.

//imp point .. => setPassword , setLength , setnumberChanged , setcharChanged ek bar hi banega kyuki ye as a refrence store hote hai phir dubara ni bnega balki Password, length ,numberChanged , charChanged jitne bar function re-render hoga utni bar (bnega) or  change hote rahenge

//useCallback ka kam hai ki ye ensure kare ki ye functions ek bar hi bane or jab dependencies change ho tabhi ye dubara bane ..

// useCallback ka kaam hai function ka reference memoize karna.
// Component re-render hone par ye function dobara nahi banta
// jab tak dependency array ke values change na ho jaye.

// Jab dependency change hoti hai tab:
// - naya function banta hai
// - naya closure create hota hai
// - updated values use hoti hain
function PasswordGenerator(){

   const [Password, setPassword] = useState("");
   const [length ,setLength] = useState(10);
   const [numberChanged, setnumberChanged] = useState(false);
   const [charChanged, setcharChanged] = useState(false);
   
// PasswordGenerator ke code ko re-render hone se rokte hai ye useCallback .. aur previous code ko hi use karte hai jab tak dependencies change na ho jaye aur agr kuch dependencies change ho jaye to hi ye naya function banayega...

   const generatepassword = useCallback(()=>{
      let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      if(numberChanged)
         str+="0123456789"
      if(charChanged)
         str+="+-)(*&^%$#@!~`{}";

      let pass = ""
      
      for(let i=0;i<length;i++){
            pass+= str[Math.floor(Math.random()*str.length)]
      }
      
      setPassword(pass);

   },[length,charChanged,numberChanged]);//jab bhi length,charChanged,numberChanged change hoga tabhi ye function dubara bnega otherwise older wala hi use karega bindass kon bnaye bhai nya function 
   

  useEffect(()=>{
     generatepassword();
  },[generatepassword])


   return(
      <>
        <h1>{Password}</h1>
        <div className="second">
         <input type="range" min={5} max={50} value={length} onChange={(e)=>setLength(e.target.value)}></input>
         <label>Length({length})</label>

         <input type="checkbox" defaultChecked={numberChanged} onChange={()=>setnumberChanged(!numberChanged)}></input>
         <label>Number</label>

         <input type="checkbox" defaultChecked={charChanged} onChange={()=>setcharChanged(!charChanged)}></input>
         <label>Character</label>
        </div>
      </>
   )
}



ReactDOM.createRoot(document.getElementById('root')).render(<PasswordGenerator/>);