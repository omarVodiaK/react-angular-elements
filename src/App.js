import React, { useState, useEffect } from 'react'
import CustomModal from './CustomModal'
import CustomCheckbox from './CustomCheckbox'
import logo from './logo.svg'
import './App.scss'

function App() {
	const [toggle, setToggle] = useState(false)

	const openModal = modal => setToggle(true)

	const closeModal = () => setToggle(false)

	const doSomething = () => console.log('doSomething')

	const injectStyles = (shadowRootElement, insertBeforeSelector, styles) => {
		const root = shadowRootElement.shadowRoot

		if (root !== null) {
			const styleElements = root.querySelectorAll('style')

			if (
				!Array.from(styleElements).some(el => el.innerHTML === styles)
			) {
				const newStyleTag = document.createElement('style')
				newStyleTag.innerHTML = styles
				root.insertBefore(
					newStyleTag,
					root.querySelector(insertBeforeSelector)
				)
			}
		}
	}

	return (
		<div className="App">
			<header className="App-header">
				<CustomCheckbox
					label={'this is a label'}
					id={'id'}
					onChange={doSomething}
				></CustomCheckbox>

				<CustomModal
					centered={true}
					toggle={toggle}
					backDropDismiss={true}
					onDimiss={closeModal}
				/>
				<button onClick={() => openModal('svelte')}>
					open Svelt modal
				</button>
				<button onClick={() => openModal('angular')}>
					open angular modal
				</button>
				<img src={logo} className="App-logo" alt="logo" />
			</header>

			{/* <svelte-checkbox></svelte-checkbox> */}

			{/* <seb-modal
				id="modal"
				toggle={toggle}
				centered={true}
				ref={modalRef}
				onDismiss={closeModal()}
			>
				<div slot="header">
					<h1>Im Stencil</h1>
				</div>
				<div slot="body">Look Closer</div>
				<div slot="footer">Footer</div>
			</seb-modal> */}
			{/* <svelte-modal toggle={toggle} centered={true} ref={sveltModalRef}>
				<div slot="header">
					<h1>Im Svelte</h1>
				</div>
				<div slot="body">Look Closer</div>
				<div slot="footer">Footer</div>
			</svelte-modal> */}

			{/* <sebng-modal
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
			</sebng-modal> */}
		</div>
	)
}

export default App
