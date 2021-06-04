import React from 'react';

export default function Logo(props){
    return(
        <figure>
          <a href={"#Home"}>
            <img
              className={"company_logo"}
              src={props.src}
              alt={"company logo"}
            />
          </a>
        </figure>
    );
}