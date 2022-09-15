import React, {useState} from 'react'
import CardModule from "../modules/css/card.module.css"
import { sampleSize } from "lodash"
import { useDispatch } from 'react-redux'
import { addBulk, setOne  } from '../redux/slicers/game.slicer'
import { useEffect } from 'react'
import { allCards,  getOne } from '../redux'
import { useSelector } from 'react-redux'
export default function home() {

  const dispatch = useDispatch()
  const [puan, setPuan] = useState(70)
  const [openCards, setOpenCards] = useState([])
  const cards = useSelector(allCards)



  const handleClick = (id) => {
    if (openCards.length == 2) return 
    let cards = [...openCards, getOne(id)()]
    if (openCards.some(c => c.id == id)) return 
    dispatch(setOne({ id,  changes: {flip: true}}))
    if (cards.length == 2) {
      const isMatch = cards[0].logo == cards[1].logo
      if (!isMatch) {
        setTimeout(() => {
          dispatch(setOne({ id: cards[0].id, changes: { flip: false } }))
          dispatch(setOne({ id: cards[1].id, changes: { flip: false } }))
          setPuan(puan - 5)
          setOpenCards([])
        }, 2000)
      } 
      else { 
        setOpenCards([])
        setPuan(puan + 50)
        cards = []
      }
    }
    setOpenCards(cards)
  }

  useEffect(() => {
    if (puan <= 0) {
       
     }
  }, [puan, cards])

  return (
    <main className='flex flex-col items-center justify-center h-screen'>
      <ul className='w-160 font-semibold py-4'>
        <li><span>Her yanlis bilindiginde 5 puan duser ve actiklarin kapanir</span></li>
        <li><span>Her dogru bilindiginde 50 puan kazanirsin ve actiklarin acik kalir</span></li>
        <li><span>Hepsi acildiginda oyun biter</span></li>
        <li><span>Puan 0 a duserse oyunu kaybedersiniz</span></li>
      </ul>
      <h2 className='w-full bg-rose-500 text-white w-160 mb-5 p-6 font-extrabold text-3xl'>
        Puan: {puan}
      </h2>
      <div className='grid grid-cols-5 w-160  gap-5'>
        
 
        {
          cards.map( (card )=> 
                <div  key={card.id} className={[CardModule.cardContainer, (card.flip || card.pair) && CardModule.faceup].join(" ")} onClick={() => handleClick(card.id)}>
                <div  className={CardModule.card}>
                    <div className={CardModule.front}> <img className='w-full h-full object-contain p-4' src={card.logo} alt="" /> </div>
                    <div className={CardModule.back}> <img className='w-full h-full object-contain' src="/question.svg" alt="" /> </div>
                </div>
              </div>
           )
        }
        


       </div>
    </main>
  )
}
