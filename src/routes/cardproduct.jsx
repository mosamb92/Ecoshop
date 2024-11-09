import { useParams } from "react-router-dom";

export default function Cardp() {
    const {id} = useParams();
    return (
    <div>
        <h1>Produit {id} </h1>
        <hr />
    </div>
    );
};