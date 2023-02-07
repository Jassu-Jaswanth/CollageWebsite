import Home from "./Home";
import Regpage from "./Regpage";

function myrender(renderer,dis){
    var element = <h1> welcome aboard!!</h1>
    if (dis === "home"){
        element = <Home />;
    } else if (dis === "reg_page"){
        element = <Regpage />;
    }
    renderer.render(element);
}

export default myrender;