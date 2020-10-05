import React, { useState, useEffect } from 'react'
import CustomModal from './CustomModal'
import CustomCheckbox from './CustomCheckbox'
import CustomDatePicker from './CustomDatePicker'
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
					label={<div>This is a custom label</div>}
					description={<a>This is a link description</a>}
					id={'id'}
					onChange={doSomething}
				></CustomCheckbox>
				<CustomDatePicker
					value={new Date()}
					monthPicker={false}
					forceCustom={true}
					localeCode={'sv-SV'}
					placeholder={'yyyy-mm-dd'}
					disabled={false}
				></CustomDatePicker>
				<CustomModal
					centered={true}
					toggle={toggle}
					backDropDismiss={true}
					onDimiss={closeModal}
					header={<h1>Im Stencil</h1>}
					body={<p>Look Closer </p>}
					footer={
						<button
							className="btn btn-primary"
							onClick={() => closeModal()}
						>
							close
						</button>
					}
				/>
				<button onClick={() => openModal('svelte')}>
					open Svelt modal
				</button>
				<button onClick={() => openModal('angular')}>
					open angular modal
				</button>
				<Logo />
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

const Logo = () => <img src={logo} className="App-logo" alt="logo" />

export default App
