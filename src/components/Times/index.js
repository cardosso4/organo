import './Times.css'
import Persona from "../Persona";
import hexToRgba from 'hex-to-rgba';

const Times = ({id,name,color,personas,deleteCard,changeColor,actionFavorite}) => {

    const colorTime = {backgroundColor: hexToRgba(color,0.38)}
    const h3Css = {borderColor:color}

    return(
        (personas.length > 0) && <section className="times" style={colorTime}>
            <input value={color} type='color' className='input-color' onChange={e => changeColor(e.target.value,id)}/>
            <h3 style={h3Css} key={id} >{name}</h3>
            <div className="colaborador">
                {personas.map(persona =>
                    <Persona
                        colorTIme={color}
                        persona={persona}
                        deleteCard={deleteCard}
                        actionFavorite={actionFavorite}
                    />
                )}
            </div>
        </section>
    )

}

export default Times