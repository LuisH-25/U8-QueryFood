import React, {useEffect, useState}from 'react';
import Carousel from '../carousel/RestaurantCarousel';
import GreekSalad from '../../../assets/food/greek-salad.webp';
import Bruschetta from '../../../assets/food/bruschetta.jpeg';
import LemonDessert from '../../../assets/food/lemon-dessert.webp';
import PlatosCard from '../cardInfo/PlatosCard';
import { PlatosCardProps, Plate, nombreRestaurant} from '../../../interface/queryfood';


function saySomething(something: any) {
  console.log('ingreso el valor X');
}

const Platos: React.FC<PlatosCardProps> = () => {
  const url = "https://restaurantes-mu.vercel.app/platos"

  const [ todos, setTodos] = useState<Plate[]>()

  const fetchApi = async () => {
    const response = await fetch(url)
    const responseJSON = await response.json() as Plate[]
    setTodos(responseJSON)
    console.log(responseJSON)
    return responseJSON
  }

  useEffect(() => {
    fetchApi()
  }, [])

  const url_restaurante = "https://restaurantes-mu.vercel.app/restaurante/"
  const [ nombre, setNombre] = useState<nombreRestaurant[]>()

  let id: any = 0
  if (todos != undefined){
     id =  todos[0].idRestaurant
  }
  console.log("fuera del if",id)
  
  const getNombreRestaurant = async (id : any) => {
   const response = await fetch(`${url_restaurante}/${id}`)
   const responseJSON = await response.json() as nombreRestaurant[]
   
    setNombre(responseJSON)
    console.log(responseJSON)
    return responseJSON
  }
  useEffect(() => {
    getNombreRestaurant(id)
  }, [])

    return (
        <section className="specials">
            <article className="specials-topbar">
            <h1>{nombre && nombre[0].nombreRestaurante}</h1>
                {/* <a className="action-button" href={require('../../../assets/menu.webp')} target="_blank" rel="noreferrer">Lista de Restaurantes</a> */}
            </article>

            <section className="specials-cards">
            {!todos || !Array.isArray(todos) ? 'Cargando...' : todos.map(({ nombre_plato, imagen, precio, descripcion, disponibilidad }: Plate) => (
              <PlatosCard nombre_plato={nombre_plato} precio={precio} imagen={imagen} descripcion={descripcion}  disponibilidad={disponibilidad} />
          ))}
            </section>

            <section className="specials-carousel">
                <Carousel />
            </section>
        </section>
    );
}

export default Platos;