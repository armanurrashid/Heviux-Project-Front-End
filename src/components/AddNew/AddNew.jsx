import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import '../UserList/UserList.css'
import { Link } from 'react-router-dom';
const UserData = [
    { id: 1, name: 'Tamim Iqbal', action: 'remove' },
];

const AddNew = () => {
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
                    <h3>GSM</h3>
                    <div className="user_table_header">
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
                                <th className="min-w-100px text-center" style={{ width: '20%' }}>
                                    SL No
                                </th>
                                <th className="min-w-100px text-center" style={{ width: '20%' }}>
                                    Value
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
                                    <td className="text-center">{order.id}</td>
                                    <td className="text-center">{order.name}</td>
                                    <td className="text-center"><FontAwesomeIcon className=' btn btn-danger' icon={faTimes} onClick={() => handleRemove(order.id)} /></td>
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
export default AddNew;