function EventoAlert() {
    const handleClick =  (nome)  => {
        alert(`${nome}`);
    }
    return <button onClick={handleClick.bind(this, 'o campo cidade nao foi preenchido!')}>Salvar cadastro</button>;
}
export default EventoAlert
