import React from "react";
import github from "./github.png";
import email from "./email.png";
import etsy from "./etsy.png";

const Contacts = props => (
  <div className = "contactContainer">
    <div className = "contactItem">
      <a href = "https://github.com/Kaidriver?tab=overview&from=2021-04-01&to=2021-04-11" target="_blank"><img src = {github}/></a>
    </div>
    <div className = "contactItem">
      <a href = "mailto:kaiwen.song3@gmail.com" target="_blank"><img src = {email}/></a>
    </div>
    <div className = "contactItem">
      <a href = "https://www.etsy.com/shop/LudicrousCreations" target="_blank"><img src = {etsy}/></a>
    </div>
  </div>
);

export default Contacts
