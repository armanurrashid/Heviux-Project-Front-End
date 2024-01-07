import { useState, useEffect } from "react";
// import "./Login.css";
import img from '../../images/p1_product.png';
import { Link } from "react-router-dom";

function Registration() {
    const initialValues = { email: "", password: "", confirmpassword: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors]);
    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }
        if (!values.password) {
            errors.password = "Password is required!";
        } else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters";
        } else if (values.password.length > 50) {
            errors.password = "Password cannot exceed more than 50 characters";
        }
        if(!values.confirmpassword){
            errors.confirmpassword = "Confirm Password is required!";
        }else if (values.password!=values.confirmpassword) {
            errors.confirmpassword = "Password and Confirm Password not matched";
        } 
        return errors;
    };

    return (
        // <div className="">
        <div className="container">
            <div className="row row-cols-1 row-cols-xl-2 row-cols-lg-2 row-cols-md-1 bg-white p-5 my-4 d-flex align-items-center justify-content-center mx-auto"
            >
                <div className="col text-center">
                    <img src={img} alt="" style={{ width: "78%" }} />
                </div>
                <div className="col my-5 px-5">
                    {Object.keys(formErrors).length === 0 && isSubmit ? (
                        <div className="ui message success">Signed in successfully</div>
                    ) : ""}
                    <form onSubmit={handleSubmit}>
                        <h2 className="text-center">Registration</h2>
                        <div className="form-group my-3">
                            <label htmlFor="email" className=" col-form-label d-flex align-items-center fw-bold">Email</label>
                            <div>
                                <input type="email" name="email" className="form-control productInput mx-0" id="email" placeholder="Email" value={formValues.email} onChange={handleChange} />
                            </div>
                        </div>
                        <p className="text-danger" >{formErrors.email}</p>
                        <div className="form-group my-3">
                            <label htmlFor="password" className=" col-form-label d-flex align-items-center fw-bold">Password</label>
                            <div>
                                <input type="password" name="password" className="form-control productInput mx-0" id="password" placeholder="Password" value={formValues.password} onChange={handleChange} />
                            </div>
                        </div>
                        <p className="text-danger" >{formErrors.password}</p>
                        <div className="form-group my-3">
                            <label htmlFor="confirmpassword" className=" col-form-label d-flex align-items-center fw-bold">Confirm Password</label>
                            <div>
                                <input type="password" name="confirmpassword" className="form-control productInput mx-0" id="confirmpassword" placeholder="Confirm Password" value={formValues.confirmpassword} onChange={handleChange} />
                            </div>
                        </div>
                        <p className="text-danger" >{formErrors.confirmpassword}</p>
                        <div className="my-4">
                            <button className="btn btn-success w-100" style={{ height: "45px" }}>Submit</button>
                        </div>
                        <div className="mt-3 d-flex justify-content-center">
                            <div className="mx-1">Already have an account?</div>
                            <div><Link to="/login" className="mx-1" style={{ textDecoration: "none" }}>login</Link></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        // </div>
    );
}

export default Registration;