import React from 'react'
import Login from './Login/Login'

const App = () => {
  return (
   <>
   <Login/>
   </>
  )
}

export default App
// import React from "react";
// import styles from './login.module.css'
// import Image from './assets/download.jpeg';
// import { FaUserAlt } from "react-icons/fa";
// const Login = ()=>{
//     return(
//         <>
//         <div className={styles.content}>
//         <div className={styles.main}>
//            <div className={styles.left}>
//             <div className={styles.leftImg}>
//             <img src={Image} />
//             </div>
//             </div>
//            <div className={styles.right}>
//             <h1>Sign In</h1>
//             <div className={styles.inputDiv}><span><FaUserAlt/></span><input type='text' className={styles.input} placeholder="John Doe"/></div>
//            </div>
//         </div>
//         </div>
        
//         </>
//     )
// }

// export default Login

// *{margin:0;padding:0;box-sizing: border-box;}

// .content{

// }

// .main{

// width:70vw;
// height: 70vh;
// border-radius: 14px;
// margin: auto;
// margin-top:40px;
// border:2px solid black;
// display: flex;
// }

// .left{border:2px solid blue; width:50%; height: 100%;}
// .leftImg{
//     margin-top:20%;
//     width:50%; margin:auto; border:2px solid red;
//     margin-top:20%;
// }
// .right{padding:40px;padding-top:100px;}
// .input {border:0; margin-left:5px}
// .inputDiv{border-bottom: 1px solid black; margin-top:20px;}