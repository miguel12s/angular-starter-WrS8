export interface Estudiante{
    id?:number,
    id_rol:number
    id_estado:number
    nombres:string
    apellidos:string
    id_tipo_documento:number,
    numero_documento:number
    celular:string
    id_facultad:number
    id_programa:number
    correo:string
    contraseña:string
    foto?:string
}