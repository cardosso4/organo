import './Persona.css'
import {IoIosCloseCircle} from "react-icons/io";
import { FaHeart,FaRegHeart  } from "react-icons/fa";

const Persona = ({id,persona,colorTIme,deleteCard,actionFavorite}) => {

    const colorTime = {backgroundColor: colorTIme}

    const propsFavorite = {
        size: 25,
        cursor: 'pointer',
        onClick: favorite
    }

    function favorite(){
        actionFavorite(persona.uuid)
    }

    return(
        <div className="persona">
            <IoIosCloseCircle
                size={25}
                className="delete-card"
                title="Excluir card"
                onClick={() => deleteCard(persona.uuid)}
            />
            <div className="cabecalho" style={colorTime}>
                <img src={persona.image} alt={persona.name}/>
            </div>
            <div className="rodape">
                <h4>{persona.name}</h4>
                <h5>{persona.level}</h5>
                <div className='favorite'>
                    {persona.favorite
                        ? <FaHeart  {...propsFavorite} color='FF0000' />
                        : <FaRegHeart {...propsFavorite} />
                    }
                </div>
            </div>
        </div>
    )

}

export default Persona