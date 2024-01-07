import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import '../UserList/UserList.css'
import Modal from 'react-bootstrap/Modal';
// import React from 'react';
// import { Link } from 'react-router-dom';
const categoryData = [
    { id: 1, name: 'Men', action: 'remove' }, { id: 2, name: 'Women', action: 'remove' }, { id: 3, name: 'Kids', action: 'remove' },
];
const subCategoryData = [
    { id: 1, name: 'Shirt', action: 'remove' }, { id: 2, name: 'Jeans', action: 'remove' }, { id: 3, name: 'T-Shirt', action: 'remove' },
];

const Category = () => {
    const [categoryentriesPerPage, setCategoryEntriesPerPage] = useState(5);
    const [subcategoryentriesPerPage, setSubcategoryEntriesPerPage] = useState(5);
    const [showCategoryModal, setShowCategoryModal] = useState(false);
    const [showSubCategoryModal, setShowSubCategoryModal] = useState(false);

    const handleClose = () => {
        setShowCategoryModal(false);
        setShowSubCategoryModal(false);
    };

    const handleShow = (modalType) => {
        if (modalType === "category") {
            setShowCategoryModal(true);
        } else if (modalType === "subCategory") {
            setShowSubCategoryModal(true);
        }
    };

    const handleRemove = (id) => {
        const userToRemove = categoryData.find((user) => user.id === id);
        if (userToRemove) {
            console.log(`Removing user: ${userToRemove.name}`);
            console.log(`User ${userToRemove.name} removed successfully.`);
        }
    };
    return (
        <div>
            <div className="container my-3">
                <div className='mb-2 mx-3'>
                    <div className="user_table_header">
                        <div className="d-flex align-items-center" >
                            <h3>Category</h3>
                        </div>
                        <div className='d-flex'>
                            <div className='d-flex align-items-center mx-5'>
                                <h6 className='mb-0'>Show </h6>
                                <select
                                    className="form-select mx-2"
                                    onChange={(e) => setCategoryEntriesPerPage(parseInt(e.target.value))}
                                    value={categoryentriesPerPage}
                                    style={{ flex: '1', fontWeight: "bold" }}
                                >
                                    <option value={5}>5</option>
                                    <option value={10}>10</option>
                                    <option value={20}>20</option>
                                </select>
                                <h6 className='mb-0'>entries </h6>
                            </div>
                            <a className='btn add_new' onClick={() => handleShow("category")}>
                                +Add New
                            </a>
                            <Modal show={showCategoryModal} onHide={handleClose} backdrop="static" keyboard={false}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Add New Category</Modal.Title>
                                </Modal.Header>
                                <Modal.Body><input type="text" className="form-control productInput mx-0 mt-2" id="newCategory" placeholder="Add New Category" /></Modal.Body>
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
                            {categoryData.map((category) => (
                                <tr key={category.id}>
                                    <td className="text-center">{category.id}</td>
                                    <td className="text-center">{category.name}</td>
                                    <td className="text-center">
                                        <FontAwesomeIcon className='btn text-primary' icon={faEdit} onClick={() => handleRemove(category.id)} />
                                        <FontAwesomeIcon className='btn text-danger' icon={faTimes} onClick={() => handleRemove(category.id)} />
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
                            <h3>Sub_Category</h3>
                        </div>
                        <div className='d-flex'>
                            <div className='d-flex align-items-center mx-5'>
                                <h6 className='mb-0'>Show </h6>
                                <select
                                    className="form-select mx-2"
                                    onChange={(e) => setSubcategoryEntriesPerPage(parseInt(e.target.value))}
                                    value={subcategoryentriesPerPage}
                                    style={{ flex: '1', fontWeight: "bold" }}
                                >
                                    <option value={5}>5</option>
                                    <option value={10}>10</option>
                                    <option value={20}>20</option>
                                </select>
                                <h6 className='mb-0'>entries </h6>
                            </div>
                            <a className='btn add_new' onClick={() => handleShow("subCategory")} >
                                +Add New
                            </a>
                            <Modal show={showSubCategoryModal} onHide={handleClose} backdrop="static" keyboard={false}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Add New Sub_Category</Modal.Title>
                                </Modal.Header>
                                <Modal.Body><input type="text" className="form-control productInput mx-0 mt-2" id="newSubCategory" placeholder="Add New Sub_Category" /></Modal.Body>
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
                            {subCategoryData.map((subCategory) => (
                                <tr key={subCategory.id}>
                                    <td className="text-center">{subCategory.id}</td>
                                    <td className="text-center">{subCategory.name}</td>
                                    <td className="text-center">
                                        <FontAwesomeIcon className='btn text-primary' icon={faEdit} onClick={() => handleRemove(subCategory.id)} />
                                        <FontAwesomeIcon className='btn text-danger' icon={faTimes} onClick={() => handleRemove(subCategory.id)} />
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
export default Category;