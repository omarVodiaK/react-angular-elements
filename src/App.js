import React, { useState, useEffect, useRef } from 'react'
// import CustomModal from './CustomModal'
// import CustomCheckbox from './CustomCheckbox'
// import CustomDatePicker from './CustomDatePicker'
import logo from './logo.svg'
import './App.scss'

import { WebCheckbox, WebDatepicker, WebModal } from 'react-components'

function App() {
	const modalRef = useRef(null)
	const [toggle, setToggle] = useState(undefined)

	useEffect(() => {
		modalRef.current.addEventListener('dismiss', () => {
			console.log('here')
		})
	}, [])

	const openModal = () => {
		setToggle(true)
	}

	const closeModal = () => {
		setToggle(false)
	}

	return (
		<div className="App">
			<header className="App-header">
				<WebCheckbox label={'label'} description={'description'}>
					checkbox
				</WebCheckbox>
				<WebDatepicker
					value={new Date()}
					monthPicker={false}
					forceCustom={true}
					localeCode={'sv-SV'}
					placeholder={'yyyy-mm-dd'}
					disabled={false}
				></WebDatepicker>
				<button onClick={() => openModal()}>open modal</button>
				<Logo />
			</header>

			<WebModal
				id="modal"
				backdropDismiss={true}
				toggle={toggle}
				centered={true}
				ref={modalRef}
				dismiss={closeModal}
			>
				<div slot="header">
					<h1>Im Stencil</h1>
				</div>
				<div slot="body">Look Closer</div>
				<div slot="footer">Footer</div>
			</WebModal>
		</div>
	)
}

const Logo = () => <img src={logo} className="App-logo" alt="logo" />

export default App
