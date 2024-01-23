import React from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/images/avatar.jpg";
import styles from "../styles/LeftCol.module.scss";

const LeftCol = () => {
    return (
        <div className={`col-xl-2 col-lg-3 col-md-3 d-none d-md-block ${styles.box}`}>
            <div className={`d-flex align-items-center p-2 ${styles.sticky} ${styles.bar}`}>
                <Link>
                    <img src={avatar} style={{width: 40, borderRadius:50}} alt="user profile"/>
                    <span className="px-2">USER USERNAME</span>
                </Link>
            </div>
        </div>
    )
}

export default LeftCol;