import  React, {useState } from "react";
import Link from "next/link";
import Layout from "../components/layout/Layout";
import {  Amplify } from 'aws-amplify';
import { useRouter } from "next/router";
//import { useUser } from "../src/context/AuthContext";
//import { CognitoUser } from "@aws-amplify/auth";
import { withAuthenticator, Authenticator   } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from '../src/aws-exports';
Amplify.configure(awsExports);

// interface IFormInput {
//     username: string;
//     password: string;
//   }
function Login() {
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const [signInError, setSignInError] = useState<string>("");
    return <>
        <Layout>
        <div className="page-content pt-150 pb-150">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-10 col-md-12 m-auto">
                        <div className="row">
                            <div className="col-lg-6 pr-30 d-none d-lg-block">
                                <img className="border-radius-15" src="assets/imgs/page/login-1.png" alt="" />
                                </div>
                                
                            <div className="col-lg-6 col-md-8">
                                <div className="login_wrap widget-taber-content background-white">
                                    <div className="padding_eight_all bg-white">
                                        <div className="heading_s1">
                                            <h1 className="mb-5">Login</h1>
                                            <p className="mb-30">Don't have an account? <Link href="/page-register">Create here</Link></p>
                                        </div>
                                        
                                            
                                            <form method="post">
                                            <div className="form-group">
                                                <input type="email" required="" name="email" placeholder="Username or Email *" />
                                            </div>
                                            <div className="form-group">
                                                <input required="" type="password" name="password" placeholder="Your password *" />
                                            </div>
                                            
                                            <div className="login_footer form-group mb-50">
                                                <div className="chek-form">
                                                    <div className="custome-checkbox">
                                                        <input className="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox1" value="" />
                                                        <label className="form-check-label" htmlFor="exampleCheckbox1"><span>Remember me</span></label>
                                                    </div>
                                                </div>
                                                <a className="text-muted" href="#">Forgot password?</a>
                                            </div>
                                            <div className="form-group">
                                                <button type="submit" className="btn btn-heading btn-block hover-up" name="login">Log in</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </Layout>
    </>;
}

export default Login;
