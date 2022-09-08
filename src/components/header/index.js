import "./index.scss"
import IconUpload from '../../assets/icons/Icon_Upload.png'
import IconUploadBlue from '../../assets/icons/Icon_Upload_Blue.png'
import IconMeasurement from '../../assets/icons/Icon_Unit_Measurement.png'
import IconMeasurementBlue from '../../assets/icons/Icon_Unit_Measurement_Blue.png'
import IconManipulateGarment from '../../assets/icons/Icon_Manipulate_Garment.png'
import IconManipulateGarmentBlue from '../../assets/icons/Icon_Manipulate_Garment_Blue.png'
import IconManipulateFabric from '../../assets/icons/Icon_Manipulate_Fabric.png'
import IconManipulateFabricBlue from '../../assets/icons/Icon_Manipulate_Fabric_Blue.png'
import IconExport from '../../assets/icons/Icon_Export.png'
import IconExportBlue from '../../assets/icons/Icon_Export_Blue.png'
import { IconPopup } from "../ui-kit/IconPopup";
import { Button } from "../ui-kit/Button";
import { Input } from "../ui-kit/Input";

export const Header = (
  {
    setMeasurement, measurement, parameter1, setParameter1, parameter2, setParameter2, isManipulateFabricActive
  }
) => {
  return (
    <header className="header">
      <div className="flex">
        <IconPopup icon={IconUpload} activeIcon={IconUploadBlue} iconClassNames="mr-[8pt]">
          <span className="text-[14pt] w-full text-center inline-block mb-[8pt]">
            Add Image
          </span>
          <Button onClick={() => ({})} classNames="w-[200pt]">
            Upload
          </Button>
          <Button onClick={() => ({})} classNames="w-[200pt]">
            Select from Library
          </Button>
        </IconPopup>
        <IconPopup icon={IconMeasurement} activeIcon={IconMeasurementBlue} iconClassNames="mr-[12pt]">
          <span className="text-[14pt] w-full text-center inline-block mb-[8pt]">
            Unit of Measurement
          </span>
          <Button onClick={() => setMeasurement("in")} active={measurement === "in"} classNames="w-[200pt]">
            in
          </Button>
          <Button onClick={() => setMeasurement("cm")} active={measurement === "cm"} classNames="w-[200pt]">
            cm
          </Button>
        </IconPopup>
        <IconPopup icon={IconManipulateGarment} activeIcon={IconManipulateGarmentBlue}>
          <span className="text-[14pt] w-full text-center inline-block mb-[8pt]">
            change parameters
          </span>
          <div className="flex">
            <span className="w-[100pt] items-center">
              parameter 1
            </span>
            <Input
              className="w-[30pt] mr-[3pt]"
              type="number"
              onChange={(val) => setParameter1(+val)}
              value={parameter1} name="parameter1"
            />
            <span>{measurement}</span>
            <span onClick={() => setParameter1(parameter1 + 1)} className="cursor-pointer ml-[3pt] mr-[2pt]">+</span>
            <span onClick={() => setParameter1(parameter1 - 1)} className="cursor-pointer">-</span>
          </div>
          <div className="flex mt-[4pt] items-center">
            <span className="w-[100pt]">
              parameter 2
            </span>
            <Input
              className="w-[30pt] mr-[3pt]"
              type="number"
              onChange={(val) => setParameter2(+val)}
              value={parameter2} name="parameter2"
            />
            <span>{measurement}</span>
            <span onClick={() => setParameter2(parameter2 + 1)} className="cursor-pointer ml-[3pt] mr-[2pt]">+</span>
            <span onClick={() => setParameter2(parameter2 - 1)} className="cursor-pointer">-</span>
          </div>
        </IconPopup>
      </div>
      <div className="flex">
        <img
          src={isManipulateFabricActive ? IconManipulateFabricBlue : IconManipulateFabric}
          alt=""
          className={`w-[40pt] mr-[8pt]`}
        />
        <IconPopup icon={IconExport} activeIcon={IconExportBlue} iconClassNames="" alignSide="right">
          <span className="text-[14pt] w-full text-center inline-block mb-[8pt]">
            Export
          </span>
          <Button onClick={() => ({})} classNames="w-[200pt]">
            Export PNG
          </Button>
          <Button onClick={() => ({})} classNames="w-[200pt]">
            Export PDF
          </Button>
        </IconPopup>
      </div>
    </header>
  )
}