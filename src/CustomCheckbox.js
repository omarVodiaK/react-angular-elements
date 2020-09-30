import React, { useRef, useEffect } from 'react'

const CustomCheckbox = ({
	label,
	description,
	id,
	name,
	disabled,
	onChange,
}) => {
	const elementRef = useRef(null)

	useEffect(() => {
		// elementRef.current.toggle = toggle
		elementRef.current.addEventListener('change', () => {
			console.log('here')
			onChange()
		})
		console.log(description)
		// elementRef.current.label = label
		// elementRef.current.description = description
	}, [])

	return (
		<seb-checkbox
			ref={elementRef}
			_id={id}
			label={label.props.children}
			description={description.props.children}
			name={name}
			disabled={disabled}
		></seb-checkbox>
	)
}

export default CustomCheckbox
