import React, { useRef, useEffect } from 'react'

const CustomModal = ({
	toggle,
	centered,
	backDropDismiss,
	onDimiss,
	header,
	body,
	footer,
}) => {
	const elementRef = useRef(null)

	useEffect(() => {
		elementRef.current.addEventListener('dimiss', event => onDimiss())
	}, [])

	return (
		<seb-modal
			id="modal"
			backdrop-dismiss={backDropDismiss}
			centered={centered}
			toggle={toggle}
			ref={elementRef}
		>
			<div slot="header">{header}</div>
			<div slot="body">{body}</div>
			<div slot="footer">{footer}</div>
		</seb-modal>
	)
}

export default CustomModal
