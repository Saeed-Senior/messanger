import { useState } from "react";




function Messanger() {
   const [message, setMessage] = useState ([
      {
         id: 1,
         text: 'Привет',
         author: 'Admin',
         side: false,
      },
      {
         id: 2,
         text: 'Привет',
         author: 'User',
         side: true,
      },
      {
         id: 3,
         text: 'Как дела?',
         author: 'Admin',
         side: false,
      },
   ])

   function removeMess(id) {
      setMessage(message.filter(item => {
         return item.id !== id;
      }))
   }

   function move(id){
      setMessage([
         ...message.map((item) => 
         item.id === id ? {...item, side: !item.side} : {...item}
      )
      ])
   }

   return(
      <div className="flex flex-col bg-slate-900 w-[1000px] h-screen mx-auto p-2 text-white">
         {
            message.map(item => {
               return (
                  <div key={item.id} className={`row  w-[400px] rounded p-2 my-2 ${item.side ? 'self-end' : ''} ${item.author == 'Admin' ? 'bg-slate-500' : 'bg-stone-500'}`}>
                  <div className={`flex flex-col`}>
                     {item.text}
                     <h2>{item.author}</h2>
                     <button className="self-end px-2 rounded bg-red-500" onClick={() => removeMess(item.id)}>Х</button>
                     <button className="p-2 rounded-full bg-blue-500 w-[100px]" onClick={() => move(item.id)}>В сторону</button>
                  </div>
               </div>
               )
            })
         }
      </div>
   )
}

export default Messanger;