import { memo } from "react";

export const MainScreen = memo(({image, property1, property2}) => {
  return (
    <section className="screen bg-[#FFFFFF] flex">
      <div className="w-1/2 h-full border-solid border-r-[4pt] border-[#1C1D1E] box-border flex justify-center items-center">
        <img src={image} alt=""/>
      </div>
      <div className="w-1/2 h-full flex justify-center items-center">
        <div className="bg-[#F9F9F9] w-fit px-[10pt] h-fit">
          <div className="result-text">
            <p className="text-[70pt] font-bold leading-[70pt]">
              {property1 + property2}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
})