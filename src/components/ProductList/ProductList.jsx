import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import img from '../../images/p1_product.png';
import './ProductList.css'
import { Link } from 'react-router-dom';
const UserData = [
    {
        id: 1,
        image: img,
        title: 'Women Skirt',
        category: 'Female',
        sub_category: 'Skirt',
        fabric: 'Cotton',
        gsm: '180',
        price: '230',
        description: 'Skirt styles can be figure-hugging or voluminous.'
    },
    {
        id: 2,
        image: img,
        title: 'Women Skirt',
        category: 'Female',
        sub_category: 'Skirt',
        fabric: 'Cotton',
        gsm: '180',
        price: '230',
        description: 'Skirt styles can be figure-hugging or voluminous.'
    },
    {
        id: 3,
        image: img,
        title: 'Women Skirt',
        category: 'Female',
        sub_category: 'Skirt',
        fabric: 'Cotton',
        gsm: '180',
        price: '230',
        description: 'Skirt styles can be figure-hugging or voluminous.'
    },
    {
        id: 4,
        image: img,
        title: 'Women Skirt',
        category: 'Female',
        sub_category: 'Skirt',
        fabric: 'Cotton',
        gsm: '180',
        price: '230',
        description: 'Skirt styles can be figure-hugging or voluminous.'
    },
    {
        id: 5,
        image: img,
        title: 'Women Skirt',
        category: 'Female',
        sub_category: 'Skirt',
        fabric: 'Cotton',
        gsm: '180',
        price: '230',
        description: 'Skirt styles can be figure-hugging or voluminous.'
    },
    {
        id: 6,
        image: img,
        title: 'Women Skirt',
        category: 'Female',
        sub_category: 'Skirt',
        fabric: 'Cotton',
        gsm: '180',
        price: '230',
        description: 'Skirt styles can be figure-hugging or voluminous.'
    },
    {
        id: 7,
        image: img,
        title: 'Women Skirt',
        category: 'Female',
        sub_category: 'Skirt',
        fabric: 'Cotton',
        gsm: '180',
        price: '230',
        description: 'Skirt styles can be figure-hugging or voluminous.'
    },
    {
        id: 8,
        image: img,
        title: 'Women Skirt',
        category: 'Female',
        sub_category: 'Skirt',
        fabric: 'Cotton',
        gsm: '180',
        price: '230',
        description: 'Skirt styles can be figure-hugging or voluminous.'
    },
];

const ProductList = () => {
    const [query, setQuery] = useState("");
    const [entriesPerPage, setEntriesPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(UserData.length / entriesPerPage);

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

                        <div>
                            <input placeholder='Search User' className='searchInput' onChange={(e) => setQuery(e.target.value)} />
                            <Link to="/newproduct" className='btn add_new'>
                                + Add New
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="table-responsive mt-2 mb-3">
                    <table className="table table-hover table-row-gray-300 align-middle gs-0 gy-4">
                        <thead>
                            <tr className="fw-bold text-muted">
                                <th className="min-w-100px text-center" style={{ width: '5%' }}>
                                    Image
                                </th>
                                <th className="min-w-100px text-center" style={{ width: '20%' }}>
                                    Title
                                </th>
                                <th className="min-w-100px text-center" style={{ width: '7%' }}>
                                    Category
                                </th>
                                <th className="min-w-100px text-center" style={{ width: '6%' }}>
                                    Sub_Category
                                </th>
                                <th className="min-w-100px text-center" style={{ width: '7%' }}>
                                    Fabric
                                </th>
                                <th className="min-w-100px text-center" style={{ width: '5%' }}>
                                    GSM
                                </th>
                                <th className="min-w-100px text-center" style={{ width: '10%' }}>
                                    Price
                                </th>
                                <th className="min-w-100px text-center" style={{ width: '30%' }}>
                                    Description
                                </th>
                                <th className="min-w-100px text-center" style={{ width: '10%' }}>
                                    Action
                                </th>
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
                                    <td className="text-center">
                                        <img src={order.image} width={'35px'} alt="" />
                                    </td>
                                    <td className="text-center">{order.title}</td>
                                    <td className="text-center">{order.category}</td>
                                    <td className="text-center">{order.sub_category}</td>
                                    <td className="text-center">{order.fabric}</td>
                                    <td className="text-center">{order.gsm}</td>
                                    <td className="text-center">{order.price}</td>
                                    <td>{order.description}</td>
                                    <td className="text-center">
                                        <FontAwesomeIcon className='btn text-primary' icon={faEdit} onClick={() => handleRemove(order.id)} />
                                        <FontAwesomeIcon className='btn text-danger' icon={faTimes} onClick={() => handleRemove(order.id)} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className='d-flex justify-content-end mb-2' >
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
                    </ul>
                </div>
            </div>
        </div>
        
    );
};

export default ProductList;
