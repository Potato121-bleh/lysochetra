import CardT1 from "../component/CardT1/page";
import CardT2 from "../component/CardT2/page";
import CardT3 from "../component/CardT3/page";
import CardT4 from "../component/CardT4/page";

export default function project(){

    return(<>
    <div className="project-card-con1">
            <div className="project-card-con" >
                <div className="project-card-child"><CardT1></CardT1></div>
                <div className="project-card-child" ><CardT2></CardT2></div>
                <div className="project-card-child" ><CardT3></CardT3></div>
                <div className="project-invisible-block" ></div>
                {/*<CardT4></CardT4>*/}
            </div>
    </div>
    </>)

}