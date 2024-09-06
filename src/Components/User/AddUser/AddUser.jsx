import React from "react";
import { Form, Input, User, InnerDiv, H2, Img } from "./AddUser.style";
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import "./AddUser.scss";
//! testing image
import image from "../../../Assets/images/mustapha.jpg";

const AddUser = () => {

    return (
        <Form className="addUserForm">
            <H2>Add New User</H2>
            <InnerDiv>
                <div className="inputs-div___ profile_image">
                    <Img src={image} alt="" />
                    <div>
                        <label htmlFor="files"><span>upload profile image</span><FileUploadOutlinedIcon /></label>
                        <input 
                            type="file"
                            id="files"
                            accept="image/*"
                        />
                    </div>
                </div>
                
                <div className="inputs-div___">
                    <div className="input-not-file">
                        <label htmlFor="email">Email</label>
                        <Input 
                            type="email"
                            id="email"
                            autoComplete="off"
                        />
                    </div>
                    <div className="input-not-file">
                        <label htmlFor="city">City</label>
                        <Input 
                            type="text"
                            id="city"
                            autoComplete="off"
                        />
                    </div>
                    <div className="input-not-file">
                        <label htmlFor="password">Password</label>
                        <Input 
                            type="password"
                        />
                    </div>
                </div>

                <div className="inputs-div___">
                    <div className="input-not-file">
                        <label htmlFor="username">username</label>
                        <Input 
                            type="text"
                            id="username"
                            autoComplete="off"
                        />
                    </div>
                    <div className="input-not-file">
                        <label htmlFor="phone">Phone</label>
                        <Input 
                            type="tel"
                            id="phone"
                            autoComplete="off"
                        />
                    </div>
                    <div className="input-not-file">
                        <label htmlFor="country">Country</label>
                        <Input 
                            type="text"
                            id="country"
                            autoComplete="off"
                        />
                    </div>
                    <div className="AddUser_submitBtn">
                        <button>Send</button>
                    </div>
                </div> 

           </InnerDiv>
        </Form>
    )
};

export default React.memo(AddUser);