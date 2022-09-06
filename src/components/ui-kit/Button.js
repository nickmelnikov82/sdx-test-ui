export const Button = ({children, active = false, onClick, classNames = ""}) => {
  return (
    <button className={`px-[5pt] py-[10pt] text-left text-[14pt] rounded-[5pt] ${active ? 'text-[#FFFFFF] bg-[#3275F6]' : 'text-[#8F8F8F]'} hover:text-[#FFFFFF] hover:bg-[#3275F6] ${classNames}`} onClick={onClick}>
      {children}
    </button>
  )
}