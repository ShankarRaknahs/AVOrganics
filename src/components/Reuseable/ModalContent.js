import React, { useState } from "react"
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"

const ModalContent = props => {
  const { buttonLabel, title, description } = props

  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)

  return (
    <div>
      <button className="mt-2 btn btn-outline-info text-dark" onClick={toggle}>
        {buttonLabel}
      </button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}> {title}</ModalHeader>
        <ModalBody>{description}</ModalBody>
        <ModalFooter>
          <a
            href="https://api.whatsapp.com/send?phone=919791607002&text=Hello.%20We%20would%20want%20to%20avail%20your%20services.%20Kindly%20get%20in%20touch%20with%20us&source=&data="
            className="btn btn-warning btn-block"
          >
            Buy now through whatsapp
          </a>
          <button color="secondary" onClick={toggle}>
            Not Now
          </button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default ModalContent
