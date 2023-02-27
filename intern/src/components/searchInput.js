// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react';
// import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {TextField,Button} from '@mui/material';
import  Axios  from 'axios';
import '../styles/searchButton.css'
// import { useFormik } from 'formik';

const schema = yup.object().shape({
    // set project name restriction
    projectName: yup.string().min(3, "Project Name must be 3 characters or longer")
    .required('Project Name is required'),
    //set scanning mode restriction
    scanningMode: yup.string().oneOf(['GANTRY', 'CRAWLER', 'AUTO', 'MANUAL', 'ARM'], 'Invalid scanning mode'),
    //set dimension x restriction
    scanDimensionsX: yup.number("Scan Dimensions must be a number").moreThan(0,"scanDimensionsX must be more than 0")
    .required("scanDimensionsX is required"),
    //set dimension y restriction
    scanDimensionsY: yup.number("Scan Dimensions must be a number").moreThan(0, "scanDimensionsY must be more than 0")
    .required("scanDimensionsY is required"),
    //set scanner freq restriction
    scannerFrequency: yup.number("Scan Dimensions must be a number").test('decimal', 'Number must have only one decimal point', 
    (value) => {
      if (value === undefined || value === null) return true;
      return (/^\d+(\.\d{1})?\d*$/).test(String(value));
    })
})

// async function submitValues(values){
//     var url = "https://wavescan-internship.saurabhmudgal.repl.co/submitForm";
//     var para = {
//         projectName: values.projectName,
//         scanningMode: values.scanningMode,
//         scanDimensionsX: values.scanDimensionsX,
//         scanDimensionsY: values.scanDimensionsY,
//         scannerFrequency: values.scannerFrequency
//     };
//     await Axios.post(url, {params:para}).then(response => {
//             // process response.data object
//             console.log(response.data)
//         })
//         .catch(error => {
//             // process error object
//             console.log(error)
//     });
// }

function UseMaterial(props){
    const formvik = useFormik({
        initialValues:{
            projectName: '',
            scanningMode: '',
            
        },
        validationSchema: schema,
        onSubmit: (values) =>{
            alert(JSON.stringify(values))
            Axios({
                 method: 'POST',
                 url:"https://wavescan-internship.saurabhmudgal.repl.co/submitForm",
                 data: values
            }).then(response=>{
                console.log(response)
                if(response.status === 200){
                    console.log("yay")
                }
                else{
                    alert("Invalid scanner parameters. Please try again")
                }
            })
            .catch(error =>{
                console.log(error)
            })
        }
    });
    return (
    <div>
        <form onSubmit={formvik.handleSubmit} style={props.style} className={props.className}>
            <TextField 
            fullWidth id="projectName" name="projectName" label="Project Name"
            value={formvik.values.projectName}
            onChange={formvik.handleChange}
            error={formvik.touched.projectName && Boolean(formvik.errors.projectName)}
            helperText={formvik.touched.projectName && formvik.errors.projectName} 
            margin="normal"
            />
            <TextField 
      
            fullWidth id="scanningMode" name="scanningMode" label="Scanning Mode"
            value={formvik.values.scanningMode}
            onChange={formvik.handleChange}
            error={formvik.touched.scanningMode && Boolean(formvik.errors.scanningMode)}
            helperText={formvik.touched.scanningMode && formvik.errors.scanningMode} 
            margin="normal"
            />
            <TextField 
            type={'number'}
            fullWidth id="scanDimensionsX" name="scanDimensionsX" label="Scanning Dimension X"
            value={formvik.values.scanDimensionsX}
            onChange={formvik.handleChange}
            error={formvik.touched.scanDimensionsX && Boolean(formvik.errors.scanDimensionsX)}
            helperText={formvik.touched.scanDimensionsX && formvik.errors.scanDimensionsX} 
            margin="normal"
            />
            <TextField 
            type={'number'}
            fullWidth id="scanDimensionsY" name="scanDimensionsY" label="Scanning Dimension Y"
            value={formvik.values.scanDimensionsY}
            onChange={formvik.handleChange}
            error={formvik.touched.scanDimensionsY && Boolean(formvik.errors.scanDimensionsY)}
            helperText={formvik.touched.scanDimensionsY && formvik.errors.scanDimensionsY} 
            margin="normal"
            />
            <TextField 
            type={'number'}
            fullWidth id="scannerFrequency" name="scannerFrequency" label="Scanner Frequency"
            value={formvik.values.scannerFrequency}
            onChange={formvik.handleChange}
            error={formvik.touched.scannerFrequency && Boolean(formvik.errors.scannerFrequency)}
            helperText={formvik.touched.scannerFrequency && formvik.errors.scannerFrequency} 
            margin="normal"
            />
            <Button color="primary" variant="contained" fullWidth type="submit">
                Submit
            </Button>
        </form>
    </div>
    )
};
export default UseMaterial;

