import React, { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.scss'

function App() {
	const [toggle, setToggle] = useState({
		angular: undefined,
		svelte: undefined,
	})
	const modalRef = React.createRef()
	const sveltModalRef = React.createRef()

	useEffect(() => {
		sveltModalRef.current.addEventListener('dismiss', () => closeModal())
		modalRef.current.addEventListener('dismiss', () => closeModal())
	})
	const openModal = modal => {
		setToggle({
			[modal]: true,
		})
	}

	const closeModal = () => {
		setToggle({
			angular: undefined,
			svelte: undefined,
		})
	}

	return (
		<div className="App">
			<header className="App-header">
				<sebng-tooltip
					content="this is a tooltip"
					trigger="click"
				></sebng-tooltip>
				{/* <sebng-tooltip>Tooltip Reference in ng-content</sebng-tooltip> */}
				<button onClick={() => openModal('svelte')}>
					open Svelt modal
				</button>
				<button onClick={() => openModal('angular')}>
					open angular modal
				</button>
				<img src={logo} className="App-logo" alt="logo" />
			</header>

			<svelte-modal
				toggle={toggle.svelte}
				centered={true}
				ref={sveltModalRef}
			>
				<div slot="header">
					<h1>Im Svelte</h1>
				</div>
				<div slot="body">Look Closer</div>
				<div slot="footer">Footer</div>
			</svelte-modal>

			<sebng-modal
				id="modal"
				centered={true}
				toggle={toggle.angular}
				ref={modalRef}
			>
				<h1 header="">I'm Angular</h1>
				<p body="">Look Closer</p>
				<div footer="">
					<button onClick={closeModal}>close modal</button>
				</div>
			</sebng-modal>
		</div>
	)
}

export default App
