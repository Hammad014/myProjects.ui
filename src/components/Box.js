import React from "react";
import styles from "./Styles.scss";

const Box = (props) => {


  let badgeText
  if (props.status === "Alive") {
      badgeText = "Alive"
  } else if (props.status === "Dead") {
      badgeText = "Dead"
  }
  else {
    badgeText = "Unknown"
}

  // {
    
  //     if (props.Status === "Dead") {
  //       return (
  //         <div className={`${styles.badge} position-absolute badge bg-danger`}>
  //           {Status}
  //         </div>
  //       );
  //     } else if (props.Status === "Alive") {
  //       return (
  //         <div className={`${styles.badge} position-absolute badge bg-success`}>
  //           {Status}
  //         </div>
  //       );
  //     } else {
  //       return (
  //         <div
  //           className={`${styles.badge} position-absolute badge bg-secondary`}
  //         >
  //           {Status}
  //         </div>
  //       );
  //     }
  //   }

  return (
    
    <div class="card m-1 border border-success" style={{float:"left"}}>
      {badgeText && <div className="card--badge">{badgeText}</div>}
  <img src={props.image} class="card-img-top" style={{width: "327px", height: "200px"}} alt="..."/> 
  <div class="card-body">
    <h5 class="card-title">{props.Name}</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">{props.gender}</li>
    <li class="list-group-item">{props.origin}</li>
    <li class="list-group-item">{props.species}</li>
  </ul>
</div>


  );
};

export default Box;
