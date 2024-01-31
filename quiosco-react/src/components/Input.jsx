export default function Input({className, ...props}) {
  return (
    <input className={`w-full px-3 py-2 bg-gray-100 rounded-md ${className}`} {...props} />
  );
}
