import React from "react";

export default function Card(props) {
  function ifAvailable(data) {
    return data.map((data) => <div className={"cardData"}>{data}</div>);
  }
  return (
    <div className={props.class}>
      <h2 className={"cardTitle"}>{props.title}</h2>
      <div className={"demo"}>{ifAvailable(props.data)}</div>
      <a href={"#SeeAllArticles"}>{'See all articles'}</a>
    </div>
  );
}
