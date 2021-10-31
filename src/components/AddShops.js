import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addShop } from "../state/action";
import { useState } from "react";

const AddShops = () => {
  const [submitOrNot, setSubmitOrNot] = useState(false);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      shopName: "",
      area: "",
      category: "",
      openingDate: "",
      closingDate: "",
    },
    validationSchema: Yup.object({
      shopName: Yup.string()
        .required("Please enter the required field")
        .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
      area: Yup.string().required("Please enter the required field"),
      category: Yup.string().required("Please enter the required field"),
      openingDate: Yup.date().required("Please enter the required field"),
      closingDate: Yup.date()
        .min(Yup.ref("openingDate"))
        .required("Please enter the required field"),
    }),
    onSubmit: (values) => {
      dispatch(addShop(values));
      setSubmitOrNot(true);
      setTimeout(() => {
        formik.values = {
          shopName: "",
          area: "",
          category: "",
          openingDate: "",
          closingDate: "",
        };
        setSubmitOrNot(false);
      }, 1000);
    },
  });

  return (
    <div>
      <form className="form" onSubmit={formik.handleSubmit}>
        <header>Add Shop</header>
        <input
          className="textInput"
          type="text"
          name="shopName"
          value={formik.values.shopName}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          placeholder=" Shop Name"
        />
        {formik.touched.shopName && formik.errors.shopName && (
          <span className="errorMessage">{formik.errors.shopName}</span>
        )}
        <select
          className="dropdown"
          name="area"
          id="area"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.area}
        >
          <option value="">Select area</option>
          <option value="Thane">Thane</option>
          <option value="Pune">Pune</option>
          <option value="Mumbai Suburban">Mumbai Suburban</option>
          <option value="Nashik">Nashik</option>
          <option value="Nagpur">Nagpur</option>
          <option value="Ahmednagar">Ahmednagar</option>
          <option value="Solapur">Solapur</option>
        </select>
        {formik.touched.area && formik.errors.area && (
          <span className="errorMessage">{formik.errors.area}</span>
        )}
        <select
          className="dropdown"
          name="category"
          id="category"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.category}
        >
          <option value="">Select Category</option>
          <option value="Grocery">Grocery</option>
          <option value="Butcher">Butcher</option>
          <option value="Baker">Baker</option>
          <option value="Chemist">Chemist</option>
          <option value="Grocery">Stationery shop</option>
        </select>
        {formik.touched.category && formik.errors.category && (
          <span className="errorMessage">{formik.errors.category}</span>
        )}
        <div>
          <label className="openingDate" htmlFor="openingDate">
            Opening Date
          </label>
          <input
            className="openingInput"
            type="date"
            name="openingDate"
            id="openingDate"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.openingDate}
          />
          {formik.touched.openingDate && formik.errors.openingDate && (
            <span className="errorMessage">{formik.errors.openingDate}</span>
          )}
        </div>
        <div>
          <label className="closingDate" htmlFor="closingDate">
            Closing Date
          </label>
          <input
            className="closeingInput"
            type="date"
            name="closingDate"
            id="closingDate"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.closingDate}
          />
          {formik.touched.openingDate && formik.errors.openingDate && (
            <span className="errorMessage">{formik.errors.openingDate}</span>
          )}
        </div>
        <button type="submit">Submit</button>
        {submitOrNot && <h2 className="success">Shop Added</h2>}
      </form>
    </div>
  );
};

export default AddShops;
