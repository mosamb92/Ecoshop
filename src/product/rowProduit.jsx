/**
 * 
 * @param {*} param0 
 * @returns 
 */
export function RowProduct ({produit}){
    const style = produit.quantite_en_stock > 20 ? undefined : {color: 'red'}
    return <tr style={style}>
        <td> {produit.nom} </td>
        <td> {produit.prix} </td>
        <td> {produit.quantite_en_stock} </td>
        <td> {produit.description} </td>
    </tr>
}