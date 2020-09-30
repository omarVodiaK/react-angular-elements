import React, { useRef, useEffect } from 'react'

const CustomModal = ({ toggle, centered, backDropDismiss, onDimiss }) => {
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
			<div slot="header">
				<h1>Im Stencil</h1>
			</div>
			<div slot="body">Look Closer</div>
			<div slot="footer">Footer</div>
		</seb-modal>
	)
}

export default CustomModal
