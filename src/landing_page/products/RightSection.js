import React from "react";

export default function RightSection(
    {
        imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,  
    }
){
    return(
      <div className="container mt-5">
            <div className="row">
                  <div className="col-6 p-5 mt-5">
                   <h2>{productName}</h2>
                   <p>{productDescription}</p>
                   <div className="d-flex justify-content-between">
      
                      <a href={learnMore} style={{marginLeft :"50px"}}>Learn More</a>
               
                   </div>
                 
               </div>
            </div>
               <div className="col-6 ">
                   <img src={imageURL}  />
               </div>
             

        </div>
    )

}