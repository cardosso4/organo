import Banner from './components/Banner';
import Forms from './components/Forms';
import {useState} from "react";
import Times from "./components/Times";
import { v4 as uuidv4 } from 'uuid';

function App() {

    const [times,setTimes] = useState([
        {id:uuidv4(),name: 'Back-End',color:'#777BB4'},
        {id:uuidv4(),name: 'Front-End',color: '#F7DF1E'},
        {id:uuidv4(),name: 'DevOps',color: '#28A745'},
        {id:uuidv4(),name: 'UX/UI',color: '#6F42C1'},
        {id:uuidv4(),name: 'Product Manager',color: '#FF5733'},
        {id:uuidv4(),name: 'Quality Assurance',color: '#28A745'},
    ])

    const arrPersonas = [
        {
            name:  'Lucas Cardoso',
            image: 'https://media.licdn.com/dms/image/v2/C4D03AQFAiDa_c9GjRg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1583847666026?e=1735171200&v=beta&t=4ic4TZBzCDYorFJ3bvrymqkkZecx4JzlzfsV_xy_ieM',
            skill: 'Back-End',
            level: 'Senior',
            uuid:  uuidv4(),
            favorite: false
        },
        {
            name:  'Gabriel Renato',
            image: 'https://media.licdn.com/dms/image/v2/D4D03AQG3bpXZcvcoCg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1680546384870?e=1735171200&v=beta&t=qjf4KzpR_dLaw6rBWgxE2LVURPYhXxFusjWGB7f71po',
            skill: 'Back-End',
            level: 'Pleno',
            uuid:  uuidv4(),
            favorite: false
        },
        {
            name:  'Felipe Rodrigues',
            image: 'https://media.licdn.com/dms/image/v2/D4D03AQFk9O_cb2-tOg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1694701010224?e=1735171200&v=beta&t=vRRGxybTuChHe2ZB01wpilFTNhd8ignMFSnVdTLZicU',
            skill: 'Front-End',
            level: 'Pleno',
            uuid:  uuidv4(),
            favorite: false
        },
        {
            name:  'Breno Mariano',
            image: 'https://media.licdn.com/dms/image/v2/D4D03AQFWZsDYApPLxw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719005346805?e=1735171200&v=beta&t=muXEywZeLhnaJhp49JCnRFEB3ZmgL4235crXNYuvlDQ',
            skill: 'Back-End',
            level: 'Junior',
            uuid:  uuidv4(),
            favorite: false
        },
        {
            name:  'Lucas Cardoso',
            image: 'https://media.licdn.com/dms/image/v2/C4D03AQFAiDa_c9GjRg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1583847666026?e=1735171200&v=beta&t=4ic4TZBzCDYorFJ3bvrymqkkZecx4JzlzfsV_xy_ieM',
            skill: 'Front-End',
            level: 'Pleno',
            uuid:  uuidv4(),
            favorite: false
        },
    ]

    const [personas,setPersona] = useState(arrPersonas)


    const eventPersona = (persona) => {
        setPersona([...personas,persona])
    }

    const eventTime = (time) => {
        setTimes([...times,time])
        console.log(time)
        console.log(times)
    }

    function deletePersona(uuid){
       setPersona(personas.filter(persona => persona.uuid !== uuid))
    }

    function changeColorTimes(color,id){

        setTimes(times.map(time => {
            if(time.id === id){
                time.color = color
            }
            return time
        }))

    }

    function changeFavorite(uuid){
        setPersona(personas.map(persona => {
            if(persona.uuid === uuid){
                persona.favorite = !persona.favorite
            }
            return persona
        }))
    }

    return (
        <div className="App">
            <Banner />
            <Forms
                times={times}
                addPersona={personas => eventPersona(personas)}
                addTime={time => eventTime(time)}
            />
            {times.map(time =>
                <Times id={time.id}
                       name={time.name}
                       color={time.color}
                       personas={personas.filter(persona => persona.skill === time.name)}
                       deleteCard={deletePersona}
                       changeColor={changeColorTimes}
                       actionFavorite={changeFavorite}
                />
            )}
        </div>
    );
}

export default App;
