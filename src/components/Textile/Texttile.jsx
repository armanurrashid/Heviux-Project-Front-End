import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import '../UserList/UserList.css'
import { Link } from 'react-router-dom';
// const fabricOptions = [
//     { value: 'cotton', label: 'Cotton' }, { value: 'chiffon', label: 'Chiffon' }, { value: 'denim', label: 'Denim' },
//     { value: 'linen', label: 'Linen' }, { value: 'silk', label: 'Silk' }, { value: 'wool', label: 'Wool' }, { value: 'polyester', label: 'Polyester' },
// ];
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
            <div className="container card my-5">
                <div className='mb-2 mx-3'>
                    <div className="user_table_header">
                        <div className="d-flex align-items-center" >
                            <h2>Fabric</h2>
                        </div>
                        <div>
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
                                <th className="min-w-100px text-center">SL No</th>
                                <th className="min-w-100px text-center" >Value</th>
                                <th className="min-w-100px text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {fabricOptions.map((fabric) => (
                                <tr key={fabric.id}>
                                    <td className="text-center">{fabric.id}</td>
                                    <td className="text-center">{fabric.value}</td>
                                    <td className="text-center"><FontAwesomeIcon className=' btn btn-danger' icon={faTimes} onClick={() => handleRemoveFabric(fabric.id)} /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="container card my-5">
                <div className='mb-2 mx-3'>
                    <div className="user_table_header">
                        <div className="d-flex align-items-center" >
                            <h2>GSM</h2>
                        </div>
                        <div>
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
                                <th className="min-w-100px text-center">SL No</th>
                                <th className="min-w-100px text-center" >Value</th>
                                <th className="min-w-100px text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {gsmOptions.map((gsm) => (
                                <tr key={gsm.id}>
                                    <td className="text-center">{gsm.id}</td>
                                    <td className="text-center">{gsm.value}</td>
                                    <td className="text-center"><FontAwesomeIcon className=' btn btn-danger' icon={faTimes} onClick={() => handleRemoveGSM(gsm.id)} /></td>
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