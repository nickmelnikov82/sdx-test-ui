import { useEffect, useRef, useState } from "react";

export const IconPopup = ({ icon, activeIcon, children, disabled = false, iconClassNames = '', alignSide = 'left' }) => {
  const [opened, setOpened] = useState(false)
  const ref = useRef(null)

  const toogle = (value) => {
    if (!disabled) {
      setOpened(value)
    }
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!opened) {
        return
      }

      if (ref.current && !ref.current.contains(event.target)) {
        setOpened(false)
      }
    }
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    };
  }, [opened]);

  return (
    <div className="relative" ref={ref}>
      <img
        src={opened ? activeIcon : icon}
        alt=""
        className={`w-[40pt] ${disabled ? '' : 'cursor-pointer'} ${iconClassNames}`}
        onClick={() => toogle(!opened)}
      />
      {opened &&
        <div className={`absolute px-[10pt] py-[20pt] bg-[#000000] text-[#FFFFFF] rounded-[18pt] ${alignSide === 'left' ? 'left-0' : 'right-0'}`}>
          {children}
        </div>
      }
    </div>
  )
}