import React from "react";

export default function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
    return(
        <div className="container mt-5">
            <div className="row">
               <div className="col-6 ">
                   <img src={imageURL} alt={productName} />
               </div>
               <div className="col-6 p-5 mt-5">
                   <h2>{productName}</h2>
                   <p>{productDescription}</p>
                   <div className="d-flex justify-content-between">
                      <a href={tryDemo} >Try Demo</a>
                      <a href={learnMore}>Learn More</a>
                     <div className="mt-3"> <a href={googlePlay}><img src="media/googlePlayBadge.svg" alt="Google Play" /></a>
                      <a href={appStore} ><img src="media/appStoreBadge.svg" alt="App Store"style={{marginLeft :"50px"}} /></a></div>
                   </div>
                 
               </div>
            </div>

        </div>
    )
}
