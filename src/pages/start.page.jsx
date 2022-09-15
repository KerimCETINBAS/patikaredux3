import React, {useState, useEffect} from 'react'
import Input from "../components/common/input"
import Numarator from '../components/common/numarator'
import { useNavigate } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { addBulk } from '../redux/slicers/game.slicer'
import { shuffleDeck } from '../modules/js/deck'
export default function start() {
    const [name,setName] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleStartGame = (e) => {
        e.preventDefault()
        dispatch(addBulk(shuffleDeck()))
        navigate("/game")
    }

    return (
        <main className='w-full h-screen flex flex-col p-12 items-center justify-center'>
    
            <form
                action="#"
                onSubmit={handleStartGame}
                className='flex flex-col gap-4 bg-pink-200  border-1 border-rose-500 px-12 py-18'>
                <Input label="Adinizi giriniz" value={name} onChange={ (e) => setName(e.detail)} />
                
                <input
                    disabled={name == ""}
                    type="submit" value="Oyunu Baslat"
                    className='
                    px-4 py-2 bg-rose-500
                    cursor-pointer
                    disabled:(bg-rose-300 cursor-default)
                    text-white hover:bg-rose-400 transition duration-300' />
            

            </form>      
           
    </main>
    )
}
