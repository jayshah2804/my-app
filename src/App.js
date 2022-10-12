import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from "react";
import axios from "axios";
var fs = require('fs');
var FormData = require('form-data');

let flag = false;
let file;
function App() {
  const fileRef = useRef();
  const [sendData, setSendData] = useState();
  var formData = new FormData();
  formData.append("avatar", file);

  useEffect(() => {
    console.log();
    if (flag) {
      async function func() {
        var data = {
          name: "shah"
        };
        formData.append('name', data.name);

        var config = {
          mode: 'no-cors',
          method: 'post',
          url: '/users',
          headers: {
            'Content-Type': 'application/json',
          },
          data: formData,
        };

        axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
          })
          .catch(function (error) {
            console.log(error);
          });
      }
      func();
    }
  }, [sendData])

  const fileUploadHandler = (e) => {
    console.log(e.target.files[0]);
    console.log(document.querySelector("input[name='sample_image']").files[0]);
    file = e.target.files[0];
    // console.log(file);
    flag = true;
    // setSendData(true);
  }

  const myHandler = (e) => {
    console.log(e.target.files[0]);
  }

  return (
    <div className="App">
      Hello
      <input type="file" name='sample_image' ref={fileRef} onChange={fileUploadHandler} />
      {/* <button onClick={fileUploadHandler}>Upload</button> */}
    </div>
  );
}

export default App;
