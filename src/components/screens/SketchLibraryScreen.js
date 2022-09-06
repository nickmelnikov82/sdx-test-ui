import IconSearch from "../../assets/icons/Icon_Search.png"
import { Input } from "../ui-kit/Input";
import Sketch1 from '../../assets/sketches/sketch1.png'
import Sketch2 from '../../assets/sketches/sketch2.png'
import Sketch3 from '../../assets/sketches/sketch3.png'
import Sketch4 from '../../assets/sketches/sketch4.png'

export const SketchLibraryScreen = ({chooseImage}) => {
  return (
    <section className="screen p-[20pt]">
      <div className="flex">
        <img src={IconSearch} alt="" className="w-[30pt] mr-[10pt] "/>
        <Input className="w-[175pt]" background="bg-[#1C1D1E]"></Input>
      </div>
      <div className="px-[80pt] pt-[40pt] flex justify-between h-[80%]">
        <p className="text-[#FFFFFF] text-[18pt] text-center">
          Desktop <br/>
          Downloads <br/>
          ...
        </p>
        <div className="flex w-[70%] justify-center items-center">
          <div className="flex flex-wrap w-[480pt] h-[480pt] gap-[80pt]">
            <div className="relative w-[200pt] h-[200pt]">
              <img src={Sketch1}
                   alt=""
                   className="absolute left-0 bottom-0 hover:scale-105 cursor-pointer"
                   onClick={() => chooseImage(Sketch1)}
              />
            </div>
            <div className="relative w-[200pt] h-[200pt]">
              <img
                src={Sketch2}
                alt=""
                className="absolute right-0 bottom-0 hover:scale-105 cursor-pointer"
                onClick={() => chooseImage(Sketch2)}
              />
            </div>
            <div className="relative w-[200pt] h-[200pt]">
              <img
                src={Sketch3}
                alt=""
                className="absolute left-0 bottom-0 max-h-[100%] hover:scale-105 cursor-pointer"
                onClick={() => chooseImage(Sketch3)}
              />
            </div>
            <div className="relative w-[200pt] h-[200pt]">
              <img
                src={Sketch4}
                alt=""
                className="absolute right-0 bottom-0 hover:scale-105 cursor-pointer"
                onClick={() => chooseImage(Sketch4)}
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}