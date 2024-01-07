import { useState } from 'react';
import '../ProductList/ProductList.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-bootstrap/Modal';
const UserData = [
    { id: 1, title: 'Men', percentage: "10%" },
    { id: 2, title: 'Women', percentage: "20%" },
    { id: 3, title: 'Kids', percentage: "30%" },
    { id: 4, title: 'All', percentage: "40%" },
];

const CategoryDiscount = () => {
    const [showDiscountCategoryModal, setShowDiscountCategoryModal] = useState(false);

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
        setShowDiscountCategoryModal(false);
    };

    const handleShow = (modalType) => {
        if (modalType === "discountcategory") {
            setShowDiscountCategoryModal(true);
        } 
    };


    return (
        <div>
            <div className="container">
                <div className='mt-2'>
                    <div className="table_header">
                        <div></div>
                        <div><h4>Discount Category</h4></div>

                        <div className='d-flex flex-row' >
                            <a className='btn add_new' onClick={() => handleShow("discountcategory")}>
                                +Add New
                            </a>
                            <Modal show={showDiscountCategoryModal} onHide={handleClose} backdrop="static"
                                keyboard={false}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Add New Category</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <b>Enter Discount Category</b>
                                    <input type="text" className="form-control productInput mx-0 my-2" id="newDiscount" placeholder="Add New Category" />
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
                                <th className="min-w-100px text-center" style={{width:"20%"}}>SL No</th>
                                <th className="min-w-100px text-center" style={{width:"20%"}}>Type</th>
                                <th className="min-w-100px text-center" style={{width:"20%"}}>Percentage</th>
                                <th className="min-w-100px text-center" style={{width:"20%"}}>Action</th>
                                <th className="min-w-100px text-center" style={{width:"20%"}}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {UserData.map((order) => (
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
                                            className={`btn btn-success mx-2 my-2 ${activeStates[order.id]?.isStartActive ? 'disabled' : ''}`}
                                            onClick={() => handleStart(order.id)}
                                        >
                                            Start
                                        </button>
                                        <button
                                            type="button"
                                            className={`btn btn-danger mx-2 my-2 ${activeStates[order.id]?.isEndActive ? '' : 'disabled'}`}
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
                {/* <div className='d-flex justify-content-end mb-2' >
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
                </div> */}
            </div>
        </div>
    );
};

export default CategoryDiscount;
