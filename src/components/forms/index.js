import { Fragment } from 'react';
import Genero from './campos/Genero'
import Animais from './campos/Animais'
import Bebidas from './campos/Bebidas'
import Fumantes from './campos/Fumantes'
import Visitas from './campos/Visitas'
import Festas from './campos/Festas'


const Form = () => {
    return (
        <Fragment>
            <Genero/>
            <Animais/>
            <Bebidas/>
            <Fumantes/>
            <Visitas/>
            <Festas/>
        </Fragment>
    )
}

export default Form;