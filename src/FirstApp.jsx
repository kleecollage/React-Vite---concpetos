import { PropTypes } from "prop-types"; // se instala con yarn add prop-types o si se usa npm npm intall prop-types

const newMessage = 'Soy la constante newMessage';
const num = 455;
const num2 = 333;
const bool = true;
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const obj = {
    message: 'Hola Mundo',
    title: 'Soy un objeto'
}

const suma = () => {
    let resultado = num + num2;
    return resultado
}

// export default function FirstApp(props) { // Lo comun es usar desestructuracion....
export default function FirstApp({
    title = 'Soy un default value property',
    subTitle,
    propValue,
    name}) {
    // if (!propValue) {
    //     throw new Error('porpValue no existe')
    // }
    // console.log(props) // props = properties
    return (
        // el atajo <> es l aabreviatura de fragment y nos evita el tener que importarlo
        <> 
            {/* <h1>{title}</h1>
            <h2>{subTitle + 1}</h2>
            <h1>FirstApp</h1>
            <h2>by Antonio Hernandez Santander</h2>
            <h3>{3 * 2}</h3>
            <h4>{newMessage}</h4>
            <h5>{num}</h5>
            <h6>{bool}</h6>
            <p>{arr}</p>
            <code>{JSON.stringify (obj)}</code>
            <div>{ suma() }</div> */}
            <h1>{title}</h1>
            <h2>{subTitle}</h2>
            <h3>{name}</h3>
            <p>{ propValue }</p>
        </>
  )
}

FirstApp.propTypes = {
    propValue: PropTypes.number.isRequired,
    subTitle: PropTypes.string.isRequired 
}

FirstApp.defaultProps = {
    subTitle:'valor default definido en los defaultProps',
    propValue:null,
    name:'Antonio Hernandez'
}