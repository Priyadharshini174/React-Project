import React from 'react' ;

function Cy(){
   const name1="Kabil";
   const name2="Kabil";
 
 const object1={name: "Kabil"};
 const object2={name: "Kabil"};

 const p1=(name1 == name2);
    console.log(p1);
 
 const p2=(object1 == object2);
   console.log(p2);

}
function ph()
{
    return(
        <div>
            <button onclick={Cy}>check</button>
        </div>
    )
}
export default ph