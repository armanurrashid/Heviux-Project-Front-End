import { useState } from 'react';
import img from '../../images/p1_product.png';
import './UserList.css'
const UserData = [
    { id: 1, image: img, name: 'Tamim Iqbal', email: 'tamim@gmail.com', mobile: '019348235457', address: 'Bangladesh', action: 'remove' },
    { id: 2, image: img, name: 'Soumya Sarkar', email: 'souyma@gmail.com', mobile: '012348235457', address: 'India', action: 'remove' },
    { id: 3, image: img, name: 'Shakib Al Hasan', email: 'shakib@gmail.com', mobile: '013348235457', address: 'Japan', action: 'remove' },
    { id: 4, image: img, name: 'Nazmul Hasan', email: 'nazmul@gmail.com', mobile: '014348235457', address: 'French', action: 'remove' },
    { id: 5, image: img, name: 'Mushfiqur Rahim', email: 'mushfiq@gmail.com', mobile: '015348235457', address: 'Pakistan', action: 'remove' },
    { id: 6, image: img, name: 'Mahmudullah', email: 'mahmudullah@gmail.com', mobile: '016348235457', address: 'Australia', action: 'remove' },
    { id: 7, image: img, name: 'Mehedi Hasan', email: 'mehedi@gmail.com', mobile: '017348235457', address: 'SriLanka', action: 'remove' },
    { id: 8, image: img, name: 'Mashrafe Mortaza', email: 'mashrafe@gmail.com', mobile: '018348235457', address: 'Russia', action: 'remove' },
    { id: 9, image: img, name: 'Tamim Iqbal', email: 'tamim@gmail.com', mobile: '019348235457', address: 'Bangladesh', action: 'remove' },
    { id: 10, image: img, name: 'Soumya Sarkar', email: 'souyma@gmail.com', mobile: '012348235457', address: 'India', action: 'remove' },
    { id: 11, image: img, name: 'Shakib Al Hasan', email: 'shakib@gmail.com', mobile: '013348235457', address: 'Japan', action: 'remove' },
    { id: 12, image: img, name: 'Nazmul Hasan', email: 'nazmul@gmail.com', mobile: '014348235457', address: 'French', action: 'remove' },
];

const UserList = () => {
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
    return (
        <div>
            <div className="container">

                <div className='mt-2'>
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
                            <input placeholder='Search User' onChange={(e) => setQuery(e.target.value)} />
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
                                    Name
                                </th>
                                <th className="min-w-100px text-center" style={{ width: '20%' }}>
                                    Email
                                </th>
                                <th className="min-w-100px text-center" style={{ width: '15%' }}>
                                    Mobile
                                </th>
                                <th className="min-w-100px text-center" style={{ width: '30%' }}>
                                    Address
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
                                    <td className="text-center">{order.name}</td>
                                    <td className="text-center">{order.email}</td>
                                    <td className="text-center">{order.mobile}</td>
                                    <td className="text-center">{order.address}</td>
                                    <td className="text-center">{order.action}</td>
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

export default UserList;
