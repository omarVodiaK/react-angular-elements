import React, { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.scss'

function App() {
	const [toggle, setToggle] = useState()
	const modalRef = React.createRef()

	useEffect(() => {
		modalRef.current.addEventListener('dismiss', () => setToggle(undefined))
	})
	const openModal = () => {
		setToggle(true)
	}

	const closeModal = () => {
		setToggle(undefined)
	}

	return (
		<div className="App">
			<header className="App-header">
				<sebng-tooltip
					content="this is a tooltip"
					trigger="click"
				></sebng-tooltip>
				{/* <sebng-tooltip>Tooltip Reference in ng-content</sebng-tooltip> */}
				<button onClick={openModal}>open modal</button>
				<img src={logo} className="App-logo" alt="logo" />
			</header>

			<sebng-modal
				id="modal"
				centered={true}
				toggle={toggle}
				ref={modalRef}
			>
				<h1 header="">header</h1>
				<p body="">Modal Body</p>
				<div footer="">
					<button onClick={closeModal}>close modal</button>
				</div>
			</sebng-modal>
		</div>
	)
}

export default App
