// import React from 'react'

// const App = () => {

//   const submitHandler =(e)=>{
//     e.preventDefault();
//     console.log("from submitted");
//   }



//   return (
//     <div className='min-h-full'>
//       <div className='h-screen w-screen'>
//      <form className='bg-black h-full w-full flex justify-between ' onSubmit={(e)=>{
//      submitHandler(e);
//      }} >
//       <div className="flex flex-col text-white text-3xl bg-black px-10 py-5  h-[70%] gap-10 w-[50%] " >
//       <h1 className='flex justify-center text-4xl text-white font-bold' >ADD NOTES</h1>
//         <input type="text" name="" id="" placeholder='Enter your task'className="px-10 py-5 text-red  w-full rounded-md outline-none border text-2xl"/>
//         <textarea  name="" id="" placeholder='write your note' className="px-10 py-5 text-red rounded-md w-full outline-none border h-1/2 text-2xl" ></textarea>
//         <button className=' font-bold px-5 py-5 w-full rounded-2xl text-black bg-white text-2xl'>Add Note</button>
//       </div>
//       <div className='h-full w-[50%] border px-10 py-5  '>
//         <h1 className='flex justify-center text-4xl text-white font-bold h-[5%]'>My Notes</h1>
//         <div className='flex flex-wrap gap-8 border border-black-700 h-[95%] m-5'>
//           <div className='border h-[40%] w-[30%] bg-white text-black'> </div>
//           <div className='border h-[40%] w-[30%] bg-white text-black'> </div>
//           <div className='border h-[40%] w-[30%] bg-white text-black'> </div>
//           <div className='border h-[40%] w-[30%] bg-white text-black'> </div>
//           <div className='border h-[40%] w-[30%] bg-white text-black'> </div>
//           <div className='border h-[40%] w-[30%] bg-white text-black'> </div>
        
          
//         </div>

//       </div>
//      </form>
//     </div> 
//     </div>
//   )
// }

// export default App

import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [myTextArea, setmyTextArea] = useState('')
  const [task, setfirst] = useState([])

  const submitHandler =(e)=>{
    e.preventDefault();
    // console.log("from submitted");
    console.log(title,myTextArea);
    const copyTask = [...task];
    copyTask.push({title , myTextArea})
    console.log(copyTask);
    setfirst(copyTask);
    
    setTitle('');
    setmyTextArea('');


  }
  const dltTbn =(idx)=>{
    const copyTaks = task.filter((item , i)=>{
    return  i!=idx;
    })

    setfirst(copyTaks);
  }


  return (
    <div className='min-h-screen w-full'>
      
      <form 
        className='bg-black min-h-screen w-full flex flex-col lg:flex-row'
        onSubmit={(e)=> submitHandler(e)}
      >

        {/* LEFT SECTION */}
        <div className="flex flex-col text-white text-2xl bg-black px-5 sm:px-10 py-5 gap-6 w-full lg:w-1/2">

          <h1 className='flex justify-center text-3xl sm:text-4xl font-bold'>
            ADD NOTES
          </h1>

          <input 
            type="text"
            placeholder='Enter your task'
            className="px-4 sm:px-10 py-3 sm:py-5 w-full rounded-md outline-none border text-lg sm:text-2xl"
            value={title}
            onChange={(e)=>{
              console.log(e.target.value);
             setTitle(e.target.value);
            }}

          />

          <textarea  
            placeholder='write your note'
            className="px-4 sm:px-10 py-3 sm:py-5 w-full rounded-md outline-none border h-40 sm:h-1/2 text-lg sm:text-2xl"
            onChange={(e)=>{
              console.log(e.target.value);
              setmyTextArea(e.target.value);
            }}
            value={myTextArea}
          />

          <button className='active:bg-gray-600  font-bold px-5 py-3 sm:py-5 w-full rounded-2xl text-black bg-white text-lg sm:text-2xl'>
            Add Note
          </button>

        </div>

        {/* RIGHT SECTION */}
        <div className='w-full lg:w-1/2 border px-5 sm:px-10 py-5 overflow-auto'>

          <h1 className='flex justify-center text-3xl sm:text-4xl font-bold text-white mb-4'>
            My Notes
          </h1>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6'>
            {
           
             task.map( (elem , idx)=>{
           return   ( <div key={idx} className='w-60 relative  px-5 py-10 border h-60 bg-white text-black bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfkqBPx2aQdW7W4igw1yHGwOU8Ve9KwXYnjR8cJm5kAA&s=10")] bg-cover '>
            <h1 className='text-2xl font-extrabold uppercase'>{elem.title}</h1>
            <p> {elem.myTextArea} </p>
            <button type='button' onClick={()=>{
              dltTbn(idx);
            }} className= 'absolute bg-red-500 text-white text-xsm font-bold rounded-xl uppercase px-5 py-2 w-40 bottom-5 '>
              delete
            </button>
            </div>
              
          )
            })
           
           }
            {/* <h1>hello</h1> */}

          </div>

        </div>

      </form>

    </div>
  )
}

export default App