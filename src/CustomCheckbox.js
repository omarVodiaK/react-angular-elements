import React, { useRef, useEffect } from 'react'

const CustomCheckbox = ({ label, id, name, disabled, onChange }) => {
	const elementRef = useRef(null)

	useEffect(() => {
		// elementRef.current.toggle = toggle
		elementRef.current.addEventListener('change', () => {
			console.log('here')
			onChange()
		})
	}, [])

	return (
		<seb-checkbox
			ref={elementRef}
			label={label}
			_id={id}
			name={name}
			disabled={disabled}
		></seb-checkbox>
	)
}

export default CustomCheckbox
