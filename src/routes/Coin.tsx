import { useParams } from "react-router-dom";



interface RoutesParams {

    coindId : string;

}


function Coin(){
    const { coinId } = useParams();
    return <h1>Coin : {coinId} </h1>

}

export default Coin;