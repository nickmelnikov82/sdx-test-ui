export const Input = (props) => {
  const {onChange, value, type = 'text', className = '', ...rest} = props
  const handleChange = (e) => {
    console.log(e)
    onChange(e.target.value)
  }
  return (
    <input type={type} onChange={handleChange} value={value} className={`${className} bg-[#242526] text-[#FFFFFF] rounded-[5pt] px-[5pt] py-[2pt] text-[14pt] hide-arrows`} {...rest} />
  )
}