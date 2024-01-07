import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

import '../UserList/UserList.css'

const fabricOptions = [
    { id: 1, value: 'Cotton', action: 'remove' }, { id: 2, value: 'Chiffon', action: 'remove' }, { id: 3, value: 'Denim', action: 'remove' },
    { id: 4, value: 'Linen', action: 'remove' }, { id: 5, value: 'Silk', action: 'remove' }, { id: 6, value: 'Wool', action: 'remove' },
    { id: 7, value: 'Polyester', action: 'remove' },
];
const gsmOptions = [
    { id: 1, value: '140', action: 'remove' }, { id: 2, value: '150', action: 'remove' }, { id: 3, value: '160', action: 'remove' },
    { id: 4, value: '170', action: 'remove' }, { id: 5, value: '180', action: 'remove' }, { id: 6, value: '190', action: 'remove' },
    { id: 7, value: '200', action: 'remove' }, { id: 8, value: '210', action: 'remove' }, { id: 9, value: '220', action: 'remove' },
    { id: 10, value: '230', action: 'remove' }, { id: 11, value: '240', action: 'remove' }, { id: 12, value: '250', action: 'remove' },
];

const Textile = () => {
    const [fabricentriesPerPage, setFabricEntriesPerPage] = useState(5);
    const [gsmentriesPerPage, setGsmEntriesPerPage] = useState(5);
    // const totalPages = Math.ceil(fabricOptions.length / entriesPerPage);
    const [fabricModal, setfabricModal] = useState(false);
    const [gsmModal, setgsmModal] = useState(false);

    const handleClose = () => {
        setfabricModal(false);
        setgsmModal(false);
    };

    const handleShow = (modalType) => {
        if (modalType === "fabric") {
            setfabricModal(true);
        } else if (modalType === "gsm") {
            setgsmModal(true);
        }
    };

    const handleRemoveFabric = (id) => {
        const fabricToRemove = fabricOptions.find((fabric) => fabric.id === id);
        if (fabricToRemove) {
            console.log(`Removing Fabric: ${fabricToRemove.value}`);
            console.log(`Fabric ${fabricToRemove.value} removed successfully.`);
        }
    };
    const handleRemoveGSM = (id) => {
        const gsmToRemove = gsmOptions.find((gsm) => gsm.id === id);
        if (gsmToRemove) {
            console.log(`Removing GSM: ${gsmToRemove.value}`);
            console.log(`GSM ${gsmToRemove.value} removed successfully.`);
        }
    };
    return (
        <div>
            <div className="container my-3">
                <div className='mb-2 mx-3'>
                    <div className="user_table_header">
                        <div className="d-flex align-items-center" >
                            <h3>Fabric</h3>
                        </div>
                        <div className='d-flex'>
                            <div className='d-flex align-items-center mx-5'>
                                <h6 className='mb-0'>Show </h6>
                                <select
                                    className="form-select mx-2"
                                    onChange={(e) => setFabricEntriesPerPage(parseInt(e.target.value))}
                                    value={fabricentriesPerPage}
                                    style={{ flex: '1', fontWeight: "bold" }}
                                >
                                    <option value={5}>5</option>
                                    <option value={10}>10</option>
                                    <option value={20}>20</option>
                                </select>
                                <h6 className='mb-0'>entries </h6>
                            </div>
                            <a className='btn add_new' onClick={() => handleShow("fabric")}>
                                +Add New
                            </a>
                            <Modal show={fabricModal} onHide={handleClose} backdrop="static" keyboard={false}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Add New Fabric</Modal.Title>
                                </Modal.Header>
                                <Modal.Body><input type="text" className="form-control productInput mx-0 mt-2" id="newFabric" placeholder="Add New Fabric" /></Modal.Body>
                                <Modal.Footer>
                                    <button type="button" className="btn btn-success" onClick={handleClose}>Save</button>
                                    <button type="button" className="btn btn-danger" onClick={handleClose}>Cancel</button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </div>
                </div>
                <div className="table-responsive mt-2 mb-3">
                    <table className="table table-hover table-row-gray-300 align-middle gs-0 gy-4">
                        <thead>
                            <tr className="fw-bold text-muted">
                                <th className="min-w-100px text-center">SL No</th>
                                <th className="min-w-100px text-center" >Value</th>
                                <th className="min-w-100px text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {fabricOptions.slice(0, fabricentriesPerPage).map((fabric) => (
                                <tr key={fabric.id}>
                                    <td className="text-center">{fabric.id}</td>
                                    <td className="text-center">{fabric.value}</td>
                                    {/* <td className="text-center"> */}
                                    <td className="text-center">
                                        <FontAwesomeIcon className='btn text-primary' icon={faEdit} onClick={() => handleRemoveFabric(fabric.id)} />
                                        <FontAwesomeIcon className='btn text-danger' icon={faTimes} onClick={() => handleRemoveFabric(fabric.id)} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="container my-5">
                <div className='mb-2 mx-3'>
                    <div className="user_table_header">
                    <div className="d-flex align-items-center" >
                            <h3>GSM</h3>
                        </div>
                        
                        <div className='d-flex'>
                        <div className='d-flex align-items-center mx-5'>
                            <h6 className='mb-0'>Show </h6>
                            <select
                                className="form-select mx-2"
                                onChange={(e) => setGsmEntriesPerPage(parseInt(e.target.value))}
                                value={gsmentriesPerPage}
                                style={{ flex: '1', fontWeight: "bold" }}
                            >
                                <option value={5}>5</option>
                                <option value={10}>10</option>
                                <option value={20}>20</option>
                            </select>
                            <h6 className='mb-0'>entries </h6>
                        </div>
                            <a className='btn add_new' onClick={() => handleShow("gsm")}>
                                +Add New
                            </a>
                            <Modal show={gsmModal} onHide={handleClose} backdrop="static" keyboard={false}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Add New GSM</Modal.Title>
                                </Modal.Header>
                                <Modal.Body><input type="number" className="form-control productInput mx-0 mt-2" id="newGSM" placeholder="Add New GSM" /></Modal.Body>
                                <Modal.Footer>
                                    <button type="button" className="btn btn-success" onClick={handleClose}>Save</button>
                                    <button type="button" className="btn btn-danger" onClick={handleClose}>Cancel</button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </div>
                </div>
                <div className="table-responsive mt-2 mb-3">
                    <table className="table table-hover table-row-gray-300 align-middle gs-0 gy-4">
                        <thead>
                            <tr className="fw-bold text-muted">
                                <th className="min-w-100px text-center">SL No</th>
                                <th className="min-w-100px text-center" >Value</th>
                                <th className="min-w-100px text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {gsmOptions.slice(0, gsmentriesPerPage).map((gsm) => (
                                <tr key={gsm.id}>
                                    <td className="text-center">{gsm.id}</td>
                                    <td className="text-center">{gsm.value}</td>
                                    <td className="text-center">
                                        <FontAwesomeIcon className='btn text-primary' icon={faEdit} onClick={() => handleRemoveGSM(gsm.id)} />
                                        <FontAwesomeIcon className='btn text-danger' icon={faTimes} onClick={() => handleRemoveGSM(gsm.id)} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
export default Textile;