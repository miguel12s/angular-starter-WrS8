export interface Horario{
    id?:number
    id_facultad:number
    id_programa:number
    id_materia:number
    id_salon:number
    id_capacidad:number
    id_sede:number
    id_estado_tutoria?:string
    cupos:number
    tema:string
    fecha:string
    hora_inicial:string
    hora_final:string
}