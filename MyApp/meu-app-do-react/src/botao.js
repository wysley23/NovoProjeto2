import EventoAlert from "./componente/EventoAlert"
import botao from './componente/OnClicarMouse/OnMouseEntra'
function Botao(props){
    return <button> type={props.tipo}{props.nome}</button>
}

export default Botao