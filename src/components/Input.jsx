import {forwardRef} from "react"

const Input = forwardRef(function Input({textArea, label, classes, ...props}, ref){

	const classList = "w-full p-1 border-b-2  border-stone-300 bg-stone-150 text-stone-600 focus:outline-none focus:border-stone-500 " + classes

	return (
		<p className="flex flex-col gap-1 my-6">
			<label className="text-sm uppercase font-bold text-stone-500">{label}</label>
			{textArea ? <textarea className={classList} {...props} ref={ref} /> : <input ref={ref} className={classList} {...props} />}
		</p>
	)
})

export default Input