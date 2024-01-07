import { useState } from 'react';
import '../ProductList/ProductList.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-bootstrap/Modal';
const UserData = [
    { id: 1, title: 'Summer', percentage: "10%" },
    { id: 2, title: 'Winter', percentage: "20%" },
    { id: 3, title: 'Flash Sale', percentage: "30%" },
    { id: 4, title: 'Eid Offer', percentage: "40%" },
    { id: 5, title: 'Christmas Offer', percentage: "50%" },
    { id: 6, title: 'Puja Offer', percentage: "60%" },
    { id: 7, title: 'Special Offer', percentage: "70%" },
];

const Discount = () => {
    // const [userData, setUserData] = useState(UserData);
    const [isStartActive, setIsStartActive] = useState(false);
    const [isEndActive, setIsEndActive] = useState(false);
    const [query, setQuery] = useState("");
    const [entriesPerPage, setEntriesPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(UserData.length / entriesPerPage);
    const [showDiscountModal, setShowDiscountModal] = useState(false);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            handlePageChange(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            handlePageChange(currentPage - 1);
        }
    };

    const handleRemove = (id) => {
        const userToRemove = UserData.find((user) => user.id === id);
        if (userToRemove) {
            console.log(`Removing user: ${userToRemove.name}`);
            console.log(`User ${userToRemove.name} removed successfully.`);
        }
    };
    const [activeStates, setActiveStates] = useState({});

    const handleStart = (id) => {
        setActiveStates((prevStates) => ({
            ...prevStates,
            [id]: { isStartActive: true, isEndActive: true }
        }));
    };

    const handleEnd = (id) => {
        setActiveStates((prevStates) => ({
            ...prevStates,
            [id]: { isStartActive: false, isEndActive: false }
        }));
    };

    const handleClose = () => {
        setShowDiscountModal(false);
    };

    const handleShow = (modalType) => {
        if (modalType === "category") {
            setShowDiscountModal(true);
        } else if (modalType === "discountType") {
            setShowDiscountModal(true);
        }
    };


    return (
        <div>
            <div className="container">
                <div className='mt-2'>
                    <div className="table_header">
                        <div className='d-flex align-items-center'>
                            <h6 className='mb-0'>Show </h6>
                            <select
                                className="form-select mx-2"
                                onChange={(e) => setEntriesPerPage(parseInt(e.target.value))}
                                value={entriesPerPage}
                                style={{ flex: '1', fontWeight: "bold" }}
                            >
                                <option value={5}>5</option>
                                <option value={10}>10</option>
                                <option value={20}>20</option>
                            </select>
                            <h6 className='mb-0'>entries </h6>
                        </div>
                        <div><h4>Discount Type</h4></div>

                        <div className='d-flex flex-row' >
                            <input placeholder='Search' className='searchInput' onChange={(e) => setQuery(e.target.value)} />
                            <a className='btn add_new' onClick={() => handleShow("discountType")}>
                                +Add New
                            </a>
                            <Modal show={showDiscountModal} onHide={handleClose} backdrop="static"
                                keyboard={false}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Add New Type</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <b>Enter Discount Type</b>
                                    <input type="text" className="form-control productInput mx-0 my-2" id="newDiscount" placeholder="Add New Type" />
                                    <b>Enter Percentage</b>
                                    <input type="text" className="form-control productInput mx-0 mt-2" id="newDiscount" placeholder="Add Percentage" />
                                </Modal.Body>
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
                                <th className="min-w-100px text-center">Type</th>
                                <th className="min-w-100px text-center">Percentage</th>
                                <th className="min-w-100px text-center">Action</th>
                                <th className="min-w-100px text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {UserData.slice((currentPage - 1) * entriesPerPage, currentPage * entriesPerPage).filter((user) =>
                                Object.values(user).some(
                                    (field) =>
                                        typeof field === 'string' && field.toLowerCase().includes(query.toLowerCase())
                                )
                            ).slice(0, entriesPerPage).map((order) => (
                                <tr key={order.id}>
                                    <td className="text-center">{order.id}</td>
                                    <td className="text-center">{order.title}</td>
                                    <td className="text-center">{order.percentage}</td>
                                    <td className="text-center">
                                        <FontAwesomeIcon className='btn text-primary' icon={faEdit} onClick={() => handleRemove(order.id)} />
                                        <FontAwesomeIcon className='btn text-danger' icon={faTimes} onClick={() => handleRemove(order.id)} />
                                    </td>
                                    <td className="text-center">
                                        <button
                                            type="button"
                                            className={`btn btn-success mx-2 ${activeStates[order.id]?.isStartActive ? 'disabled' : ''}`}
                                            onClick={() => handleStart(order.id)}
                                        >
                                            Start
                                        </button>
                                        <button
                                            type="button"
                                            className={`btn btn-danger mx-2 ${activeStates[order.id]?.isEndActive ? '' : 'disabled'}`}
                                            onClick={() => handleEnd(order.id)}
                                        >
                                            End
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className='d-flex justify-content-end mb-2' >
                    {totalPages > 1 ?
                        <ul className="pagination" >
                            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                <a className={`page-link px-3 py-2 ${currentPage === 1 ? 'text-secondary fw-bold' : 'text-success fw-bold'}`} href="#" tabIndex="-1" onClick={handlePrevPage}>{'Prev'}</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link px-3 py-2 text-success" href="#">{currentPage} of {totalPages} <span className="sr-only">(current)</span></a>
                            </li>
                            <li className={`page-item ${currentPage >= totalPages ? 'disabled' : ''}`}>
                                <a className={`page-link px-3 py-2 ${currentPage >= totalPages ? 'text-secondary fw-bold' : 'text-success fw-bold'}`} href="#" onClick={handleNextPage}>{'Next'}</a>
                            </li>
                        </ul> : null
                    }

                </div>
            </div>
        </div>

    );
};

export default Discount;
