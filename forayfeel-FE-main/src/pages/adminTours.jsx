import DataTable from "react-data-table-component";
import {
  FaEdit,
  FaEye,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import React, { useState,useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Formik } from "formik";
import { createTour,getTours } from "../apis/tour"
import { toast } from 'react-toastify';
import * as Yup from "yup";

const AdminTours = () => {
  const [show, setShow] = useState(false);
  const [tours,setTours] = useState([])
  const [temp,setTemp] = useState(false)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const initialValues = {
    tour_name: "",
    place_from: "",
    place_to: "",
    days: "",
    state: "",
    nights: "",
    price: 0,
    tour_descriptions: "",
    cover_image:null,
    is_featured: false,
  };
  const tourSchema = Yup.object().shape({
    tour_name: Yup.string().required("Tour Name is required"),
    place_from: Yup.string().required("From place is required"),
    state: Yup.string().required("state is required"),
    place_to: Yup.string().required("Destinantion Place is required"),
    days: Yup.number().required("Days is required"),
    nights: Yup.number().required("Nights is required"),
    tour_descriptions: Yup.string().required("Tour Description is required"),
    cover_image: Yup.mixed().required("Image is required"),
    is_featured: Yup.boolean().required("featured is required"),
    price: Yup.number().required("Price is required"),
  });

  useState(()=>{
    getTours().then((res)=>setTours(res.data))
      .catch(()=>setTours([]))
  },[temp])
  const columns = [
    // {
    //     name: "Cover Image",
    //     cell: (row) => <img src={'http://localhost:3000/'+row.cover_image} height={"50px"} width={"50px"} />,
    //     style: {
    //         height: "70px"
    //       },
    // },
    {
      name: "Id",
      selector: (row) => row._id,
    },
    {
      name: "Tour Name",
      selector: (row) => row.tour_name,
      style: {
        fontWeight: "bold",
      },
    },
    {
      name: "From",
      selector: (row) => row.place_from,
    },
    {
      name: "To",
      selector: (row) => row.place_to,
    },
    // {
    //   name: "Places",
    //   cell: (row) => {
    //     return (
    //       <>
    //         {
    //           <ul>
    //             {row.places_to_be.map((place) => (
    //               <li>{place}</li>
    //             ))}
    //           </ul>
    //         }
    //       </>
    //     );
    //   },
    // },
    {
      name: "Duratiom",
      cell: (row) => {
        return (
          <>
            <p>
              {row.days} D {row.nights}N
            </p>
          </>
        );
      },
    },
    {
      name: "Price",
      selector: (row) => row.price["$numberDecimal"],
    },
    {
      name: "Featured",
      cell: (row) => <p>{row.is_featured ? "YES" : "NO"}</p>,
    },
    {
      name: "Action",
      cell: () => {
        return (
          <>
            <span as="button">
              <FaEye />
            </span>
            <span as="button" className="p-2">
              <FaEdit />
            </span>
          </>
        );
      },
      style: {
        color: "red",
        fontSize: "20px",
      },
    },
  ];

  const data = [
    {
      _id: "6427ffb7c59a9192f93c3d2c",
      tour_name: "Manali expec",
      place_from: "surat",
      place_to: "manali",
      places_to_be: ["surat", "manali"],
      days: 7,
      nights: 6,
      tour_descriptions: "some desc",
      price: {
        $numberDecimal: "7999",
      },
      is_featured: true,
      cover_image: "uploads\\1680342967124image5.jpg",
      __v: 0,
    },
    {
      _id: "6427ffeec59a9192f93c3d31",
      tour_name: "Manali expec 2",
      place_from: "surat",
      place_to: "manali",
      places_to_be: ["surat", "manali"],
      days: 7,
      nights: 6,
      tour_descriptions: "some desc",
      price: {
        $numberDecimal: "7999",
      },
      is_featured: false,
      cover_image: "uploads\\1680343022399image4.jpg",
      __v: 0,
    },
    {
      _id: "642800511cca7627809c01bc",
      tour_name: "Manali expec 3",
      place_from: "surat",
      place_to: "manali",
      places_to_be: ["surat", "manali"],
      days: 7,
      nights: 6,
      tour_descriptions: "some desc",
      price: {
        $numberDecimal: "7999.00",
      },
      is_featured: false,
      cover_image: "uploads\\1680343121766image4.jpg",
      __v: 0,
    },
  ];
  const ExpandedComponent = ({ data }) => {
    console.log(data);
    return <p>{data.tour_descriptions}</p>;
  };

  const handleCreateTour=(data)=>{
    createTour(data).then(response => {
      toast.success('Tour created Sucessfully');
      setTemp(!temp)
      return response.data
  }).catch((error) => {
      toast.error(error?.response?.data?.message || 'Something went wrong.');
  })
  }

  return (
    <>
      <div className="table-main">
        <div className="table-headig mt-2">
          <h3 className="col-lg-6">Tours</h3>
          <div className="create-tour-btn col-lg-6 d-flex justify-content-end px-5">
            <>
              <button className="main-btn" onClick={handleShow}>
                Create Tour
              </button>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Create Tour</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Formik
                    initialValues={initialValues}
                    validationSchema={tourSchema}
                    onSubmit={(values) => {
                      handleCreateTour(values)
                      console.log(values);
                    }}
                  >
                    {(formik) => {
                      const {
                        values,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        errors,
                        touched,
                        isValid,
                        dirty,
                      } = formik;
                      return (
                        <div className="tour-form">
                          <div className="row">
                            <div className="col-md-12 form-input-group">
                              <label htmlFor="tour_name">Tour Name:</label>
                              <input
                                type="text"
                                placeholder="Enter Tour Name"
                                name="tour_name"
                                value={values.tour_name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                              {touched.tour_name && errors.tour_name && (
                                <span className="error-msg">
                                  {errors.tour_name}
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12 form-input-group">
                              <label htmlFor="place_from">Place From:</label>
                              <input
                                type="text"
                                placeholder="Enter Place From Tour Start"
                                name="place_from"
                                value={values.place_from}
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                              {touched.place_from && errors.place_from && (
                                <span className="error-msg">
                                  {errors.place_from}
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12 form-input-group">
                              <label htmlFor="place_to">Place To:</label>
                              <input
                                type="text"
                                placeholder="Enter Place From Tour Destination"
                                name="place_to"
                                value={values.place_to}
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                              {touched.place_to && errors.place_to && (
                                <span className="error-msg">
                                  {errors.place_to}
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12 form-input-group">
                              <label htmlFor="state">State:</label>
                              <input
                                type="text"
                                placeholder="Enter State"
                                name="state"
                                value={values.state}
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                              {touched.state && errors.state && (
                                <span className="error-msg">
                                  {errors.state}
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12 form-input-group">
                              <label htmlFor="days">Days:</label>
                              <input
                                type="number"
                                placeholder="Enter Tour Days"
                                name="days"
                                value={values.days}
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                              {touched.days && errors.days && (
                                <span className="error-msg">{errors.days}</span>
                              )}
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12 form-input-group">
                              <label htmlFor="nights">Nights:</label>
                              <input
                                type="number"
                                placeholder="Enter Tour Nights"
                                name="nights"
                                value={values.nights}
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                              {touched.nights && errors.nights && (
                                <span className="error-msg">
                                  {errors.nights}
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12 form-input-group">
                              <label htmlFor="price">Price:</label>
                              <input
                                type="number"
                                placeholder="Enter Price"
                                name="price"
                                value={values.price}
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                              {touched.nights && errors.price && (
                                <span className="error-msg">
                                  {errors.price}
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12 form-input-group">
                              <label htmlFor="tour_descriptions">
                                Tour Descrption:
                              </label>
                              <textarea
                                placeholder="Enter Tour Description"
                                name="tour_descriptions"
                                value={values.tour_descriptions}
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                              {touched.tour_descriptions &&
                                errors.tour_descriptions && (
                                  <span className="error-msg">
                                    {errors.tour_descriptions}
                                  </span>
                                )}
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12 form-input-group">
                              <label htmlFor="cover_image">Cover Image:</label>
                              <input
                                type="file"
                                placeholder="Upload Tour Cover Image"
                                name="cover_image"
                                onChange={(event) => {
                                  if (event.currentTarget.files) {
                                    formik.setFieldValue(
                                        "cover_image",
                                         event.currentTarget.files[0]
                                     );
                                }
                                }}
                                onBlur={handleBlur}
                              />
                              {touched.cover_image && errors.cover_image && (
                                <span className="error-msg">
                                  {errors.cover_image}
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12 form-input-group">
                              <label htmlFor="is_featured">Is_featurd:</label>
                              <input
                                type="checkbox"
                                name="is_featured"
                                value={values.is_featured}
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                              {touched.is_featured && errors.is_featured && (
                                <span className="error-msg">
                                  {errors.is_featured}
                                </span>
                              )}
                            </div>
                          </div>
                          <button
                            type="submit"
                            onClick={handleSubmit}
                            className={
                              !(dirty && isValid) ? "disabled-btn" : ""
                            }
                            disabled={!(dirty && isValid)}
                          >
                            Create Tour
                          </button>
                        </div>
                      );
                    }}
                    {/* tour_name: "",
                    place_from: "",
                    place_to: "",
                    days: "",
                    nights: "",
                    tour_descriptions: "",
                    cover_image: "" */}
                  </Formik>
                </Modal.Body>
                {/* <Modal.Footer className="create-tour-modal-footer">

                  <Button onClick={handleClose}>
                    Create Tour
                  </Button>
                </Modal.Footer> */}
              </Modal>
            </>
          </div>
        </div>
        <div className="table-content">
          <DataTable
            fixedHeader
            columns={columns}
            data={tours}
            pagination
            expandableRows
            expandableRowsComponent={ExpandedComponent}
          />
        </div>
      </div>
    </>
  );
};

export default AdminTours;
