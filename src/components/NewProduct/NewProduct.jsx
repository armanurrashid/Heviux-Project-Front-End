// import React from 'react';
import { useEffect } from 'react';
import './NewProduct.css'
import { Link } from 'react-router-dom';
const categoryOptions = [
    { value: 'Men', label: 'Men' }, { value: 'Women', label: 'Women' }, { value: 'Kids', label: 'Kids' },
];
const subCategoryOptions = [
    { value: 'Shirt', label: 'Shirt' }, { value: 'Jeans', label: 'Jeans' }, { value: 'T-Shirt', label: 'T-Shirt' },
];
const fabricOptions = [
    { value: 'cotton', label: 'Cotton' }, { value: 'chiffon', label: 'Chiffon' }, { value: 'denim', label: 'Denim' },
    { value: 'linen', label: 'Linen' }, { value: 'silk', label: 'Silk' }, { value: 'wool', label: 'Wool' }, { value: 'polyester', label: 'Polyester' },
];
// const sizeOptions = [
//     { value: 'S', label: '14' }, { value: 'M', label: '15' }, { value: 'L', label: '16' }, { value: 'XL', label: '17' }, { value: 'XXL', label: '18' },
// ];
const gsmOptions = [
    { value: '140', label: '140' }, { value: '150', label: '150' }, { value: '160', label: '160' }, { value: '170', label: '170' },
    { value: '180', label: '180' }, { value: '190', label: '190' }, { value: '200', label: '200' }, { value: '210', label: '210' },
    { value: '220', label: '220' }, { value: '230', label: '230' }, { value: '240', label: '240' }, { value: '250', label: '250' },
];
const NewProduct = () => {
    useEffect(() => {
        const textarea = document.getElementById('exampleFormControlTextarea1');

        if (textarea) {
            textarea.addEventListener('input', () => {
                textarea.style.height = 'auto';
                textarea.style.height = textarea.scrollHeight + 'px';
            });
        }
    }, []);
    return (
        <div>
            <div className="container my-5">
                <div className="card" style={{ borderRadius: "1rem", }}>
                    <div className='text-center mb-5 mt-2'> <h2>Add New Product</h2> </div>
                    <form>
                        <div className="row row-cols-1 row-cols-xl-2 row-cols-lg-1 row-cols-md-1">
                            <div className="col">
                                <div className="form-group row mb-4">
                                    <label htmlFor="exampleFormControlFile1" className="col-sm-3 col-lg-2 col-form-label d-flex align-items-center fw-bold">Image1</label>
                                    <div className="col-sm-9 col-lg-10">
                                        <input type="file" className="form-control-file mx-0 productInput" id="exampleFormControlFile1" accept=".jpg, .jpeg, .png" />
                                    </div>
                                </div>
                                <div className="form-group row mb-4">
                                    <label htmlFor="exampleFormControlFile1" className="col-sm-3 col-lg-2 col-form-label d-flex align-items-center fw-bold">Image2</label>
                                    <div className="col-sm-9 col-lg-10">
                                        <input type="file" className="form-control-file mx-0 productInput" id="exampleFormControlFile1" accept=".jpg, .jpeg, .png" />
                                    </div>
                                </div>
                                <div className="form-group row mb-4">
                                    <label htmlFor="exampleFormControlFile1" className="col-sm-3 col-lg-2 col-form-label d-flex align-items-center fw-bold">Image3</label>
                                    <div className="col-sm-9 col-lg-10">
                                        <input type="file" className="form-control-file mx-0 productInput" id="exampleFormControlFile1" accept=".jpg, .jpeg, .png" />
                                    </div>
                                </div>
                                <div className="form-group row mb-4">
                                    <label htmlFor="exampleFormControlFile1" className="col-sm-3 col-lg-2 col-form-label d-flex align-items-center fw-bold">Image4</label>
                                    <div className="col-sm-9 col-lg-10">
                                        <input type="file" className="form-control-file mx-0 productInput" id="exampleFormControlFile1" accept=".jpg, .jpeg, .png" />
                                    </div>
                                </div>
                                <div className="form-group row my-4">
                                    <label htmlFor="title" className="col-sm-3 col-lg-2 col-form-label d-flex align-items-center fw-bold">Title</label>
                                    <div className="col-sm-9 col-lg-10">
                                        <input type="text" className="form-control mx-0 productInput" id="title" placeholder="Title" />
                                    </div>
                                </div>
                                <div className="form-group row my-4">
                                    <label htmlFor="inputState" className="col-sm-3 col-lg-2 col-form-label d-flex align-items-center fw-bold">Category</label>
                                    <div className="col-sm-9 col-lg-10">
                                        <select id="inputState" className="form-control productInput mx-0">
                                            {categoryOptions.map((option) => (
                                                <option key={option.value} value={option.value}> {option.label} </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group row my-4">
                                    <label htmlFor="inputState" className="col-sm-3 col-lg-2 col-form-label d-flex align-items-center fw-bold">Sub_Category</label>
                                    <div className="col-sm-9 col-lg-10">
                                        <select id="inputState" className="form-control productInput mx-0">
                                            {subCategoryOptions.map((option) => (
                                                <option key={option.value} value={option.value}> {option.label} </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-group row mb-4">
                                    <label htmlFor="inputState" className="col-sm-3 col-lg-2 col-form-label d-flex align-items-center fw-bold">Fabric</label>
                                    <div className="col-sm-9 col-lg-10">
                                        <select id="inputState" className="form-control productInput mx-0">
                                            {fabricOptions.map((option) => (
                                                <option key={option.value} value={option.value}> {option.label} </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group row my-4">
                                    <label htmlFor="inputState" className="col-sm-3 col-lg-2 col-form-label d-flex align-items-center fw-bold">GSM</label>
                                    <div className="col-sm-9 col-lg-10">
                                        <select id="inputState" className="form-control productInput mx-0">
                                            {gsmOptions.map((option) => (
                                                <option key={option.value} value={option.value}> {option.label} </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group row my-4">
                                    <label htmlFor="inputState" className="col-sm-3 col-lg-2 col-form-label d-flex align-items-center fw-bold">Size </label>
                                    <div className="col-sm-4 col-lg-5">
                                        {/* <select id="inputState" className="form-control productInput mx-0">
                                            {sizeOptions.map((option) => (
                                                <option key={option.value} value={option.value}> {option.value} : {option.label}</option>
                                            ))}
                                        </select> */}
                                        <fieldset className="form-group">
                                            <div className="row">
                                                {/* <legend className="col-form-label col-sm-2 pt-0">Radios</legend> */}
                                                <div className="col-sm-10">
                                                    <div className="form-check d-flex align-items-center  my-2">
                                                        <input className="form-check-input" type="checkbox" name="gridRadios" id="gridRadios1" value="option1" checked />
                                                        <label className="form-check-label productInput" htmlFor="gridRadios1">
                                                            S
                                                        </label>
                                                        
                                                    </div>
                                                    <div className="form-check d-flex align-items-center  my-2">
                                                        <input className="form-check-input" type="checkbox" name="gridRadios" id="gridRadios2" value="option2" />
                                                        <label className="form-check-label productInput" htmlFor="gridRadios2">
                                                            M
                                                        </label>
                                                    </div>
                                                    <div className="form-check d-flex align-items-center my-2">
                                                        <input className="form-check-input " type="checkbox" name="gridRadios" id="gridRadios2" value="option2" />
                                                        <label className="form-check-label productInput" htmlFor="gridRadios2">
                                                            L
                                                        </label>
                                                    </div>
                                                    <div className="form-check d-flex align-items-center my-2">
                                                        <input className="form-check-input " type="checkbox" name="gridRadios" id="gridRadios2" value="option2" />
                                                        <label className="form-check-label productInput" htmlFor="gridRadios2">
                                                            XL
                                                        </label>
                                                    </div>
                                                    <div className="form-check d-flex align-items-center  my-2">
                                                        <input className="form-check-input " type="checkbox" name="gridRadios" id="gridRadios2" value="option2" />
                                                        <label className="form-check-label productInput" htmlFor="gridRadios2">
                                                            XXL
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </div>
                                    <div className="col-sm-4 col-lg-5">
                                        <input type="text" className="form-control productInput mx-0" id="price" placeholder="Number" />
                                    </div>
                                </div>
                                <div className="form-group row my-4">
                                    <label htmlFor="price" className="col-sm-3 col-lg-2 col-form-label d-flex align-items-center fw-bold">Price</label>
                                    <div className="col-sm-9 col-lg-10">
                                        <input type="text" className="form-control productInput mx-0" id="price" placeholder="Price" />
                                    </div>
                                </div>
                                <div className="form-group row my-4">
                                    <label htmlFor="inputPassword" className="col-sm-3 col-lg-2 col-form-label d-flex align-items-center fw-bold">Description</label>
                                    <div className="col-sm-9 col-lg-10">
                                        <textarea className="form-control productInput mx-0" id="exampleFormControlTextarea1" placeholder="Product Description" rows="" style={{ overflow: 'hidden' }}></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-end'>
                            <div className='mx-2'>
                                <Link to="/productlist" className='btn saveButton'>
                                    Save
                                </Link>
                            </div>
                            <div>
                                <Link to="/productlist" className='btn cancelButton'>
                                    Save
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default NewProduct;