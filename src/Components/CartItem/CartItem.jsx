import React, { useContext } from 'react'
import GlobalContextProvider, { GlobalContext } from '../../Context/GlobalContextProvider';


const CartItem = (data) => {

    console.log(data);
    const {eliminarProd} = useContext(GlobalContext);


    data = data.prods;

const handleClick = () => {
    eliminarProd(data.id);
}

  return (
    
<>
<tr>
    <td className="align-middle"><img src="img/product-1.jpg" alt="" style={{width: "50px;"}}/>{data.id}</td>
    <td className="align-middle">$ {data.precio}.-</td>
    <td className="align-middle">
        <div className="input-group quantity mx-auto" style={{width: "100px;"}}>
            <div className="input-group-btn">
                <button className="btn btn-sm btn-primary btn-minus" >
                <i className="fa fa-minus"></i>
                </button>
            </div>
            <input type="text" className="form-control form-control-sm bg-secondary text-center" value={data.cantidad}/>
            <div className="input-group-btn">
                <button className="btn btn-sm btn-primary btn-plus">
                    <i className="fa fa-plus"></i>
                </button>
            </div>
        </div>
    </td>
    <td className="align-middle">$ {data.precio * data.cantidad}</td>
    <td className="align-middle"><button className="btn btn-sm btn-primary" onClick={handleClick}><i className="fa fa-times"></i></button></td>
</tr>

</>

  )
}

export default CartItem