import React, { Component } from "react";
import Show from "./show";

class Shows extends Component {
  /* TODO: Shows tonen op basis van de movie die geselecteerd is.
    er moet duidelijk een dynamic link zijn die naar /movie/1 gaat bijv
    op basis van id of name movie/creed is mooier dan /movie/1.
    op die pagina zie je meer informatie en shows ook zijn het buttons voor bij de movie
    als je op de knop drukt dan komt daaronder te staan hoeveel tickets 
    er zijn.
  */
  state = {};
  render() {
    return <Show />;
  }
}

export default Shows;
