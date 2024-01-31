export default function Label({className, ...props}) {
  return (
    <label className={`text-slate-800 ${className}`} {...props}/>
  )
}
