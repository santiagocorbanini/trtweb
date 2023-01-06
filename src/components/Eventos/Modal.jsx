import { Modal, Button, Carousel } from "react-bootstrap"
import guasones from "../../assets/images/guasones.jpg"
import lostotora from "../../assets/images/lostotora2.jpg"

const ModalCustom = ({ title, body, show, handleClose }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={guasones}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={lostotora}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={guasones}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalCustom
