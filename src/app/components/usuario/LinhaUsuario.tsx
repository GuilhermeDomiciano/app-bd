import { Usuario } from "@/core/model/Usuario"
import Image from "next/image"

export interface LinhaUsuarioProps{
    usuario: Usuario
    onClick?: (usuario: Usuario) => void
}

export default function ListaUsuario(props: LinhaUsuarioProps){
    return(
        <div className="flex p-4 bg-zinc-900 gap-5 items-center rounded-md cursor-pointer" onClick={() =>  props.onClick?.(props.usuario)}>
            <Image 
                src="http://source.unsplash.com/random/80x80?avatar"
                width={80}
                height={80}
                className="rounded-full"
                alt="Avatar"
            />
            <div className="flex flex-col">
                <span className="text-xl font-black">{props.usuario.nome}</span>
                <span className="text-sm text-zinc-400">{props.usuario.email}</span>
            </div>
            
        </div>
    )
}