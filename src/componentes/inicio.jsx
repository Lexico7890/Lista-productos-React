import React,{Fragment, useState} from 'react';
import Lista from './lista';
import Formulario from './formulario';
import { v4 as uuidv4 } from 'uuid';

const Inicio = () => {

    const arrayProducts = [];

    const [products, setProduct] = useState(arrayProducts)


    const addProduct = (product) => {
        product.id = uuidv4();
        setProduct([
            ...products,
            product
        ])
    }

    const deleteProduct = (id) => {
        setProduct(products.filter(product => product.id !== id))
    }

    const editProducts = (product) => {
        setMostarEdit(true);
        setCurrendtProduct({
            id: product.id, 
            nombre: product.nombre, 
            precio: product.precio, 
            descripcion: product.descripcion
        })
    }

    const [currendProduct, setCurrendtProduct] = useState({
        id: '', nombre: '', precio: 0, descripcion: ''
    })

    const [mostrarEdit, setMostarEdit] = useState(false)


    return (
        <Fragment>
            <Formulario addproduct={addProduct} mostrarEdit={mostrarEdit} currendProduct={currendProduct}/>
            <Lista products={products} deleteProduct={deleteProduct} editProducts={editProducts}/>
        </Fragment>
    )
}

export default Inicio
