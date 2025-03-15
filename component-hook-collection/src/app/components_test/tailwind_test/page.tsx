
import * as chance from '@/data/chance'


export default function Tailwndss() {
  return (
    <div className="bg-black/30">
      <p className="w-full p-4 text-3xl text-white">Tailwndcss</p>
      <p className="italic text-gray-50 line-clamp-3">{chance.randomParagraphs(10)}</p>
      <button className="btn btn-primary" style={{textTransform: 'none'}}>
        Button
      </button>
    </div>
  )
}