export default function PrimaryButton({className, ...props}) {
  return (
    <button className={`w-full px-3 py-2 bg-slate-800 rounded-md text-white ${className}`} {...props} />
  )
}
