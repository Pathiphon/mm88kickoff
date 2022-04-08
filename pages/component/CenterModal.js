import { Modal } from "react-bootstrap";
import bg12 from '../images/modal_img.jpg'

function CenterModal(props) {
  return (
    <div>
      <Modal
        animation={false}
        {...props}
        // size="lg"
        
        aria-labelledby="contained-modal-title-vcenter"
        // centered
      >

        <Modal.Header className="p-4 " closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-1" >
          <div className="w-100 p-0 ">
            <img src={bg12.src} className="w-100 mx-auto d-block" />
          </div>
        </Modal.Body>
  

      </Modal>
    </div>
  );
}
export default CenterModal;