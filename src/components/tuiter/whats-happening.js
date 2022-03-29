import React, {useState} from "react";
import {useDispatch} from "react-redux";


const WhatsHappening = () => {
  let [whatsHappening, setWhatsHappening] = useState('');
  const dispatch = useDispatch();
  const tuitClickHandler = () => {
    dispatch({type: 'create-tuit',
        tuit: whatsHappening
    });
  }
  return (
    <div>
      <textarea style={{postion: "relative", borderRadius: "15px", width: "85%"}} value={whatsHappening}
               onChange={(event) =>
        setWhatsHappening(event.target.value)}>
      </textarea>
      <button className={`btn btn-primary btn-block rounded-pill`} style={{position:'relative', bottom:'22px', left:'8px', width: "15%"}} onClick={tuitClickHandler}>
        Tuit
      </button>
    </div>
  );
}
export default WhatsHappening;