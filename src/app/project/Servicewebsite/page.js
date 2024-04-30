

import Firstslide from "./firstslide/page"
import Secondslide from "./secondslide.js/page"
import Thirdslide from "./thirdslide.js/page"


export default function Servicewebsite(){
    return(<>
    <div class="container">
      {/*<section><div id="navbar"></div></section>*/}
      <section><Firstslide></Firstslide></section>
      <section><Secondslide></Secondslide></section>
      <section><Thirdslide></Thirdslide></section>
    </div>
    </>)
}