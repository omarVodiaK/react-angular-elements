import React, { useRef, useEffect, useState } from 'react'

const CustomDatePicker = ({
	placeholder,
	className,
	monthPicker,
	forceCustom,
	min,
	max,
	disabled,
	value,
	localeCode,
}) => {
	const elementRef = useRef(null)
	const [_value, setValue] = useState(new Date())

	useEffect(() => {
		elementRef.current.value = _value
		elementRef.current.forceCustom = forceCustom
		elementRef.current.localeCode = localeCode
		elementRef.current.monthPicker = monthPicker
		elementRef.current.placeholder = placeholder

		elementRef.current.addEventListener('valueChange', event => {
			setValue(event.target.value)
		})

		setTimeout(() => {
			let x = 'en-US' ? 'fr-FR' : 'sv-SV'
			elementRef.current.localeCode = x
		}, 2000)

		// let datepicker = document.querySelector('web-datepicker');
		// datepicker.localeCode = 'fr-FR';
		// datepicker.forceCustom = true;
		// datepicker.monthPicker = false;
		// datepicker.value = new Date();
	}, [])

	return (
		<div>
			{_value.toString()}
			<web-datepicker
				ref={elementRef}
				class={className}
				min={min}
				max={max}
				disabled={disabled}
				// value={_value}
			></web-datepicker>
		</div>
	)
}

export default CustomDatePicker
