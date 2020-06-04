import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../axios-instance";
const Header = (props) => {
  const [form, setForm] = useState({
    Id: "",
    title: "",
    mrp: null,
    ratings: null,
  });
  const [avatar, setAvatar] = useState({
    avatar: "",
  });
  const [avatarId, setAvatarId] = useState({});
  const avatarHandler = (e) => {
    setAvatar(e.target.files[0]);
  };
  const formHandler = (e, name) => {
    const formData = { ...form };
    formData[name] = e.target.value.trim();
    setForm(formData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onUpdateCustomer(form);
  };
  const handleSubmitAvatar = (e) => {
    e.preventDefault();
    let data = {
      avatar: avatar,
    };
    console.log("avavtar", data);
    let formData = new FormData();

    formData.append("avatar", avatar);
    axios
      .post("/avatar", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response.data.id);
        setAvatarId(response.data.id);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <nav className="navbar navbar-expand-md bg-light navbar-light gmd-6">
        <Link className="navbar-brand" to="/home">
          Dashboard
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="collapsibleNavbar"
        >
          <ul className="navbar-nav">
            <li className="nav-item dropdown" style={{ marginRight: "110px" }}>
              <Link
                className="nav-link"
                to="#"
                data-toggle="modal"
                data-target="modal12"
              >
                <button
                  type="button"
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-target="#modal12"
                >
                  Add Items
                </button>
              </Link>

              <div className="dropdown-menu"></div>
            </li>
          </ul>
          <div className="modal fade" id="modal12">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Upload Avatar</h4>
                  <button type="button" className="close" data-dismiss="modal">
                    &times;
                  </button>
                </div>

                <div className="modal-body">
                  <form>
                    <div className="form-group">
                      <label>Name:</label>
                      <input
                        type="file"
                        className="form-control"
                        id="file-id"
                        // value={avatar}
                        onChange={avatarHandler}
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={handleSubmitAvatar}
                    >
                      Upload
                    </button>
                  </form>
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
