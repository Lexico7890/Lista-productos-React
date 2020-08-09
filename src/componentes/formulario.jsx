import React from 'react';
import { useForm } from 'react-hook-form';


const Formulario = (props) => {


    console.log(props.currendProduct)
    const {register, errors, handleSubmit} = useForm(
        props.mostrarEdit === true ? {defaultValues: props.currendProduct} : ""
    );

    const onSubmit = (data, e) => {
        props.addproduct(data)
        e.target.reset()
    }


    return ( 
        <form className="row" onSubmit={handleSubmit(onSubmit)}>
                <div className="col-md-3 d-block">
                    <input
                        name="nombre"
                        placeholder="Nombre del producto"
                        className="form-control"
                        ref={
                            register({
                                required: {value: true, message: "Necesario"},
                                minLength: {value: true, message: "minimo 3 letras"}
                            })
                        }
                    />
                </div>
                <span className="text-danger text-small">
                        {errors?.nombre?.message || errors?.Precio?.message || errors?.descripcion?.message}
                </span>
                <div className="col-md-3 d-block">
                    <input
                        name="precio"
                        placeholder="Precio"
                        className="form-control"
                        type="number"
                        ref={
                            register({
                                required: {value: true, message: "Necesario"},
                                min: 10000, max: 1000000, 
                            })
                        }
                    />
                </div>
                <div className="col-md-3 d-block">
                    <input
                        name="descripcion"
                        placeholder="Descripcion"
                        className="form-control"
                        ref={
                            register({
                                required: {value: true, message: "Necesario"},
                                minLength: {value: true, message: "minimo 3 letras"}
                            })
                        }
                    />
                </div>
                <div className="col-md-3 d-block">
                    <button className="btn btn-info">Enviar</button>
                </div>
            </form>
     );
}
 
export default Formulario;