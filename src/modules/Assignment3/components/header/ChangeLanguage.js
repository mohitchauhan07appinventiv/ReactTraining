import React from 'react';

export default function ChangeLanguage(){
    return(
        <div className={"change_language_container"}>
            <figure>
              <img
                src={"assets/images/usa.svg"}
                alt={"usa flag"}
                id={"flagImg"}
              />
            </figure>
            {/* change language selection tag */}
            <select
              name={"change_language"}
              id={"change_language"}
              onchange={"changeLanguage()"}
            >
              <option value={"english"}>{" ENG"}</option>
              <option value={"hindi"}>{"HIN"}</option>
              <option value={"russian"}>{"RUS"}</option>
            </select>
          </div>
    );
}