import React from 'react';
import images from '../../utils/LoadImages';

export default function ChangeLanguage(props){
    function changeLanguage(){
        const selectElement = document.getElementById('change_language');
        const flagImgEle = document.getElementById('flagImg');
        var select = selectElement.selectedIndex;
        if (select === 1) flagImgEle.setAttribute("src", images.flagSpanish);
        else if (select === 2) flagImgEle.setAttribute("src", images.flagTurkish);
        else flagImgEle.setAttribute("src", images.flagUsa);
    }
    return(
        <div className={"change_language_container"}>
            <figure>
              <img
                src={images.flagUsa}
                alt={"usa flag"}
                id={"flagImg"}
              />
            </figure>
            {/* change language selection tag */}
            <select
              name={"change_language"}
              id={"change_language"}
              onChange={changeLanguage}
            >
              <option value={"english"}>{" ENG"}</option>
              <option value={"spannish"}>{"ESP"}</option>
              <option value={"turkish"}>{"TUR"}</option>
            </select>
          </div>
    );
}