import { HoverableIcon } from "../ui-kit/HoverableIcon"
import IconUpload from "../../assets/icons/Icon_Upload.png"
import IconUploadBlue from "../../assets/icons/Icon_Upload_Blue.png"
import { useState } from "react"
import { Screens } from "../constants/screens";

export const InitialScreen = ({setScreen}) => {
  return (
    <section className="flex screen justify-center items-center">
      <div className="flex items-start">
        <SelectImageApproachButton>
          Drag or insert <br/>
          your image <br/>
          (JPG, JPEG, PNG, AI)
        </SelectImageApproachButton>
        <p className="text-[18pt] text-[#FFFFFF] mx-[80pt] h-[160pt] leading-[160pt]">
          OR
        </p>
        <SelectImageApproachButton onClick={() => setScreen(Screens.SketchLibrary)}>
          Select from <br/> sketch library
        </SelectImageApproachButton>
      </div>
    </section>
  )
}

const SelectImageApproachButton = ({children, onClick}) => {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="cursor-pointer flex flex-col justify-center items-center cursor-pointer text-[18pt] text-center text-[#FFFFFF] hover:text-[#3275F6]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      <HoverableIcon className="w-[80pt]" icon={IconUpload} hoverIcon={IconUploadBlue} hovered={hovered} />
      <p>
        {children}
      </p>
    </div>
  )
}