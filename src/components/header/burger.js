import React from "react"
import  { useState } from "react"

const Burger = (props) => {

    const [checkboxChecked, setCheckboxChecked] = useState(false)

    const handler = () => {
        if(!checkboxChecked){
        setCheckboxChecked(true)
        console.log('works')
    } else{
        setCheckboxChecked(false)
    }
    }
    return(
        <div onClick={handler} onKeyDown={handler} className="handler d-flex justify-content-end mt-2" role="button" tabIndex={0}>
        <div className="Burger neu-btn" onClick={props.click} onKeyDown={props.click} role="button" tabIndex={0}>
        <label className="menut" onClick={handler} onKeyDown={handler}>
        <input type="checkbox"  checked={checkboxChecked ? "checked" : ''} onClick={handler} readOnly />
        <div></div>
        <div></div>
        <div></div>
        </label>
   
        </div>
        </div>
      
        )
    }
    
    export default Burger