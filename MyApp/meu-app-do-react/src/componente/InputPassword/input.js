function Input() {
    let tipo = 'text'
    let atributo = {

        myPlaceholder: 'seu texto aqui',
        id: 'meuid',
        className: 'minha classe'

    }

    return (
        <input
            type={tipo} id={atributo.id} placeholder={atributo.myPlaceholder} ></input>
    )


}