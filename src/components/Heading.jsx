export default function Heading({children, classes, ...props}){
	return <h2 className={`text-xl font-bold my-16 mb-2 text-stone-700 ${classes}`} {...props}>{children}</h2>
}