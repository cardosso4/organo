import './forms.css'
import Input from '../Input';
import SelectInput from "../SelectInput";
import Buttom from "../Buttom";
import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';

const Form = (props) => {

    const [name, setName] = useState('')
    const [skill, setKill] = useState('')
    const [level, setLevel] = useState('')
    const [image, setImage] = useState('')
    const [time, setTime] = useState('')
    const [color, setColorTIme] = useState('')

    const handleSubmitPersona = (event) => {
        event.preventDefault()
        props.addPersona({
            uuid: uuidv4(),
            name,
            skill,
            level,
            image
        })
        setName('')
        setKill('')
        setLevel('')
        setImage('')
    }

    const handleSubmitTime = (event) => {
        event.preventDefault()
        props.addTime({
            id: uuidv4(),
            name: time,
            color
        })
        setTime('')
        setColorTIme('')
    }

    return(
        <section className='forms'>
            <form onSubmit={handleSubmitPersona}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <Input
                    required={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    nameInput="name"
                    value={name}
                    changeValue={value => setName(value)}
                />
                <SelectInput
                    required={true}
                    placeholder="Selecione uma skill.."
                    label="Skill"
                    items={props.times}
                    value={skill}
                    changeValue={value => setKill(value)}
                />
                <Input
                    required={true}
                    label="Nivel"
                    placeholder="Digite o seu nivel"
                    nameInput="nivel"
                    value={level}
                    changeValue={value => setLevel(value)}
                />
                <Input
                    required={true}
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    nameInput="image"
                    value={image}
                    changeValue={value => setImage(value)}
                />
                <Buttom>
                    Criar Card
                </Buttom>
            </form>
            <form onSubmit={handleSubmitTime}>
                <h2>Cadastrar novo time</h2>
                <Input
                    required={true}
                    label="Time"
                    placeholder="Digite o nome do time"
                    nameInput="time"
                    value={time}
                    changeValue={value => setTime(value)}
                />
                <Input
                    required={true}
                    label="Cor do time"
                    nameInput="color"
                    value={color}
                    type='color'
                    changeValue={value => setColorTIme(value)}
                />
                <Buttom>
                    Criar Time
                </Buttom>
            </form>
        </section>
    )

}

export default Form