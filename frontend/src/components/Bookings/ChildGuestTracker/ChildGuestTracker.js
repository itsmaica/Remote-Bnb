import { useState } from "react";
import "./ChildGuestTracker.css";

function ChildGuestTracker({counter, setChildCounter}) {




    const add =()=>{ setChildCounter(counter+1) }
    const sub=()=>{ setChildCounter(counter-1) }


  return (
    <>
      {/* <p>Maica is the greatest of all time!</p> */}
      <div id="g-count">
        {counter === 0 ? (
        <div
        id="sub-grey"
        className="round">
            { counter === 0 ? (
                 <div id="sub-disable"className="fill">
                    <i id="dis-i"class="fa-solid fa-minus"></i>
                </div>
                ) :
                <div className="fill">
                <i class="fa-solid fa-minus"></i>
                </div>
                }
        </div>
        ) :
        <div
        onClick={sub}
        id="sub"
        className="round">
            { counter === 0 ? (
                 <div id="sub-disable"className="fill">
                    <i class="fa-solid fa-minus"></i>
                </div>
                ) :
                <div className="fill">
                <i class="fa-solid fa-minus"></i>
                </div>
                }
        </div>
        }

        <div id="g-ct-num">
          <p>{counter}</p>
        </div>

        <div
        onClick={add}
        id="add"
        className="round">
            <div className="fill">

          <i class="fa-solid fa-plus"></i>
            </div>
        </div>
      </div>
    </>
  );
}

export default ChildGuestTracker;
