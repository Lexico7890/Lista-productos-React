import React from 'react';


const Lista = (props) => {

    
    return ( 
        <table className="table">
                <thead>
                    <tr>
                        <th className="scope">Nombre</th>
                        <th className="scope">Precio</th>
                        <th className="scope">Descripcion</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.products.length > 0 ?
                        props.products.map((item, index) => 
                            <tr key={index}>
                                <td>{item.nombre}</td>
                                <td>{item.precio}</td> 
                                <td>{item.descripcion}</td>
                                <td>
                                    <button 
                                        className="btn btn-warning mx-2"
                                        onClick={props.editProducts(item)}
                                    >Modificar</button>
                                    <button 
                                        className="btn btn-danger my-2"
                                        onClick={() => {props.deleteProduct(item.id)}}
                                    >Eliminar</button>
                                </td>
                            </tr>
                            
                        ) : 
                            <tr colSpan={4}>
                                <td>
                                    <p>No hay datos</p>
                                </td>
                            </tr>
                        
                    }
                </tbody>
        </table>
     );
}
 
export default Lista;