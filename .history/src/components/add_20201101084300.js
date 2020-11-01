import React,{useState} from 'react'
import Button from 'react-bootstrap/Button'
export default function Add({value,onCheck})
{
    // const {value}=props;
    const [addValue,setAddValue]=useState('')
    function handleChange(e){
        setAddValue(e.target.value)
        // console.log(e.target.value)
    }
    function onClickHandle(){
        setAddValue('');
    }
    function handleSub(e){
        e.preventDefault();
        if(addValue!==""){
             onCheck && typeof onCheck === 'function' && onCheck(addValue)
        }
    }
    return(
        <form style={{display:'flex'}} className="mt-3 mb-3" onSubmit={handleSub}>
            <input style={{width:'100%'}} type="text" value={addValue} onChange={handleChange}/>
             <Button onClick={()=>{onClickHandle()}} className='ml-1' variant="danger">Clear</Button>
        </form>
    )
}