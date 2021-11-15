import Button from "@restart/ui/esm/Button";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import ReactPlayer from "react-player";

function VideoModal() {
    const [show, setShow] = useState(false);

    return (
        <>
            <Button variant="primary" onClick={() => setShow(true)} className="p-0 border shadow-sm">
                <div className="main-card shadow-sm border__">
                    <header className="main-card__header d-flex align-items-center border-bottom p-2">
                        <img className="main-car__header_icon ms-2 " src="/images/service.png" width="20" height="20" />
                        <p>عن أبشر أعمال</p>
                    </header>
                    <div className="main-card__body p-2">
                        <img src="/images/vthumbnail_0109_ar.png" className="w-100" />
                    </div>
                </div>
            </Button>

            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
                className="video-modal"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ReactPlayer url='https://youtu.be/4vYWBFaNmlE' playing={true} className="w-100" />

                </Modal.Body>
            </Modal>
        </>
    );
}

export default VideoModal;