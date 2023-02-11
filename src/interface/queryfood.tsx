
export interface HeaderProps {
    device: string;
}

export interface NavbarProps {
    device: string;
}
 
export interface TestimonialCardProps {
    calificacion : number;
    comentario : string; 
}

export interface RestaurantCardProps {
    nombre: string;
    descripcion: string;
}

export interface AboutProps {
}

export interface FormValues {
    nombre: string;
    email: string;
    password: string;
}

export interface Comment {
    calificacion : number;
    comentario : string;
}

export interface Restaurant {
    nombre: string;
    descripcion: string;
}

export interface PlatosCardProps {
    imagen: string;
    nombre_plato: string;
    precio: number;
    descripcion:string;
    disponibilidad:boolean;
    
}


export interface Plate{
    nombre_plato: string;
    imagen:string;
    precio: number;
    descripcion:string;
    disponibilidad:boolean,
    idRestaurant : number;

}

export interface nombreRestaurant {
    nombreRestaurante : string;
}