import React, { Component } from "react";
import Table from "./Table";

export default class BaiTapForm extends Component {
    state = {
        values: {
            id: "",
            phone: "",
            name: "",
            email: "",
        },

        errors: {
            id: "",
            phone: "",
            name: "",
            email: "",
        },

        isSubmit: true,

        arrSV: [
            {
                id: 1,
                phone: 123456789,
                name: "nguyen van a",
                email: "nguyenvana@gmail.com",
            },
            {
                id: 2,
                phone: 123321123,
                name: "nguyen van b",
                email: "nguyenvanb@gmail.com",
            },
        ],
        
    };

    handleChangeInput = (e) => {
        let { value, id } = e.target;
        let newValues = this.state.values;
        newValues[id] = value;
        let newErrors = this.state.errors;
        let messError = "";
        if (value.trim() == "") {
            messError = id + " không được bỏ trống !";
        } else {
            let dataType = e.target.getAttribute("data-type");
            if (dataType == "number") {
                let regexNumber = /^\d+$/;
                if (!regexNumber.test(value)) {
                    messError = id + " phải nhập số";
                }
            }
            if (dataType == "email") {
                let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
                if (!regexEmail.test(value)) {
                    messError = id + " không đúng định dạng";
                }
            }
        }
        newErrors[id] = messError;

        let submit = false;
        for (let key in newValues) {
            if (newValues[key].toString().trim() === "") {
                submit = true;
            } else {
                submit = false;
            }
        }

        this.setState({
            value: newValues,
            errors: newErrors,
            isSubmit: submit,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        let { errors } = this.state;
        for (let key in errors) {
            if (errors[key] !== "") {
                alert("Dữ liệu không hợp lệ");
                return;
            }
        }

        let newSV = { ...this.state.values };
        this.state.arrSV.push(newSV);
        this.setState(
            {
                arrSV: this.state.arrSV,
            },
            () => {
                this.saveLocalStorage();
            }
        );
    };

    searchSV = () => {
        let { values, arrSV } = this.state;
        let keyword = values;
        const svSearch = arrSV.filter(sv => sv.name.includes(keyword.search.trim()));
        this.setState({
            arrSV: svSearch
        }, () => {
            console.log(svSearch);
        })
    };

    delSV = (idClick) => {
        this.state.arrSV = this.state.arrSV.filter((prod) => prod.id !== idClick);
        this.setState(
            {
                arrSV: this.state.arrSV,
            },
            () => {
                this.saveLocalStorage();
            }
        );
    };

    editSV = (editClick) => {
        this.setState({
            values: editClick,
        });
    };

    handleUpdate = () => {
        let { values, arrSV } = this.state;
        let svUpdate = arrSV.find((prod) => prod.id === values.id);
        for (let key in svUpdate) {
            svUpdate[key] = values[key];
        }
        this.setState(
            {
                arrSV: arrSV,
            },
            () => {
                this.saveLocalStorage();
            }
        );
    };

    saveLocalStorage = () => {
        let stringArrSV = JSON.stringify(this.state.arrSV);
        localStorage.setItem("arrSV", stringArrSV);
    };
    getLocalStorage = () => {
        if (localStorage.getItem("arrSV")) {
            let arrSV = JSON.parse(localStorage.getItem("arrSV"));
            return arrSV;
        }
        return [];
    };

    render() {
        let { id, phone, name, email } = this.state.values;
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="card">
                        <div className="card-header bg-dark text-white">
                            <h3>Thông tin sinh viên</h3>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-6">
                                    <div className="form-group">
                                        <p>Mã SV</p>
                                        <input
                                            data-type="number"
                                            className="form-control"
                                            id="id"
                                            name="id"
                                            onInput={this.handleChangeInput}
                                            value={id}
                                        />
                                        <p className="text-danger">{this.state.errors.id}</p>
                                    </div>
                                    <div className="form-group">
                                        <p>Số điện thoại</p>
                                        <input
                                            data-type="number"
                                            className="form-control"
                                            id="phone"
                                            name="phone"
                                            onInput={this.handleChangeInput}
                                            value={phone}
                                        />
                                        <p className="text-danger">{this.state.errors.phone}</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <p>Họ tên</p>
                                        <input
                                            className="form-control"
                                            id="name"
                                            name="name"
                                            onInput={this.handleChangeInput}
                                            value={name}
                                        />
                                        <p className="text-danger">{this.state.errors.name}</p>
                                    </div>
                                    <div className="form-group">
                                        <p>Email</p>
                                        <input
                                            data-type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            onInput={this.handleChangeInput}
                                            value={email}
                                        />
                                        <p className="text-danger">{this.state.errors.email}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <div className="row">
                                <div className="col-3">
                                    <button
                                        className="btn btn-success"
                                        type="submit"
                                        disabled={this.state.isSubmit}
                                    >
                                        Thêm sinh viên
                                    </button>
                                    <button
                                        className="btn btn-primary mx-2"
                                        type="button"
                                        disabled={this.state.isSubmit}
                                        onClick={() => {
                                            this.handleUpdate();
                                        }}
                                    >
                                        Cập nhật
                                    </button>
                                </div>
                                <div className="col-6">
                                    <input
                                        className="form-control ms-3"
                                        id="search"
                                        name="search"
                                        onInput={this.handleChangeInput}
                                    />
                                </div>
                                <div className="col-3">
                                    <button
                                        className="btn btn-warning"
                                        type="button"
                                        onClick={() => {
                                            this.searchSV();
                                        }}
                                    >
                                        Tìm kiếm
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <Table
                    arrSV={this.state.arrSV}
                    delSV={this.delSV}
                    editSV={this.editSV}
                />
            </div>
        );
    }

    componentDidMount() {
        this.setState({
            arrSV: this.getLocalStorage(),
        });
    }
}
