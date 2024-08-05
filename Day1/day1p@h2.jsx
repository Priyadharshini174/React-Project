import React from "react"

  const Pah2 = () => {
   let age=18;
   let name="kiran";
   let setStatus=false;
   let userDefault=undefined;
   let responseValue=null;
   console.log(age+" ");
   console.log(name+" ");
   console.log(setStatus+" ");
   console.log(userDefault+" ");
   console.log(responseValue+" ");

   let oldage=age;
   age=25;
   let status=setStatus;
   console.log("Age : "+oldage);
   console.log("Status : "+status);

   alert("check the console output");
   return(
    <div>
        <button onClick={Pah2}>Submit</button>
    </div>
   )
}
export default Pah2