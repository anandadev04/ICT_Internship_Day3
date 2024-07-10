import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';

function Add({person}) {
  // const [count,setCount]=useState(0)
  // let valueAdd=()=>{
  //   setCount(count+1)
  // }

  const [form,setForm]=useState(
    {
      fname:person.fname,
      department:person.department,
      semester:person.semester
    }
  )
  function valueCap(e){
    //console.log(e)
    setForm({...form,[e.target.name]:e.target.value})
  }

  function display(){
    console.log(form)
  }

  return (
    <div>
    <Stack spacing={2} direction="column" alignItems="flex-start">
      <TextField id="outlined-basic" label="Name"  name='fname' InputProps={{ sx: { backgroundColor: 'white' }}} onChange={valueCap} value={form.fname}/>
      <TextField id="outlined-basic" label="Department" name='department'  InputProps={{ sx: { backgroundColor: 'white' }}} onChange={valueCap} value={form.department}/>
      <TextField id="outlined-basic" label="Semester" name='semester' InputProps={{ sx: { backgroundColor: 'white' }}} onChange={valueCap} value={form.semester}/>
    </Stack><br/>
    <Stack spacing={2} direction="row">
      <Button variant="contained" onClick={display}>Submit</Button>
    
    </Stack>
    {/* <small>count is {count}</small> */}
    </div>
  );
}

export default Add;