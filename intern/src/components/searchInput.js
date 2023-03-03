import React from 'react';
import { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {TextField,Button, Select, MenuItem, FormControl, InputLabel,FormHelperText} from '@mui/material';
import  Axios  from 'axios';
import '../styles/searchButton.css';
import Swal from 'sweetalert2';
import withReactContent from "sweetalert2-react-content";
import LoadingSpinner from './LoadingSpinner';
const MySwal = withReactContent(Swal);
const schema = yup.object().shape({
    projectName: yup
      .string()
      .min(3, "Project Name must be 3 characters or longer")
      .required('Project Name is required'),
    scanningMode: yup
      .string()
      .oneOf(["GANTRY","CRAWLER","AUTO","MANUAL","ARM"])
      .required('Scanning Mode is required'),
    scanDimensionsX: yup
      .number()
      .moreThan(0, 'scanDimensionsX must be more than 0')
      .required('scanDimensionsX is required'),
    scanDimensionsY: yup
      .number()
      .moreThan(0, 'scanDimensionsY must be more than 0')
      .required('scanDimensionsY is required'),
    scannerFrequency: yup
      .number()
      .test(
        'decimal',
        'Number must have only one decimal point',
        (value) => {
          if (value === undefined || value === null) return true;
          return (/^\d+(\.\d{1})?$|^\d+\.$/).test(String(value));
        }
      )
      .required('scannerFrequency is required')
  });
  
function UseMaterial(props) {
    const navigate = useNavigate();
    const [isLoading, SetIsLoading] = useState(false);
    const formik = useFormik({
        initialValues: {
        projectName: '',
        scanningMode: '',
        scanDimensionsX: '',
        scanDimensionsY: '',
        scannerFrequency: '',
        },
        validationSchema: schema,
        onSubmit: async (values) => {
        try {
            SetIsLoading(true)
            values.scannerFrequency = parseFloat(values.scannerFrequency);
            console.log(values)
            const response = await Axios.post(
            'https://wavescan-internship.saurabhmudgal.repl.co/submitForm',
            values
            );
           
            
            if (response.status === 200) {
               
                const url = 'https://wavescan-internship.saurabhmudgal.repl.co/success';
                const successResponse = await Axios.get(url);
                if (successResponse.data.length > 0) {
                
                    MySwal.fire({
                    title: <p>Scanner Search Successful!</p>,
                    icon: 'success',
                    confirmButtonColor: '#228B22',
                
                    }).then(()=>{
                        navigate('/results', { state: successResponse.data });
                    })
                }
                //else statement for http get
                else {
                   
                    MySwal.fire({
                    title: <p>No Printers Available! Please Try Again Later</p>,
                    icon: 'error',
                    confirmButtonColor: '#DC143C'

                    })
                }       
            } 
        } 
        catch (error) {
            
            MySwal.fire({
                title: <p>Bad Request!</p>,
                text: "Please Try Again with other parameters",
                icon: 'error',
                confirmButtonColor: '#DC143C'
            })
        }
        finally{
            SetIsLoading(false)
        }
        }
    });
  

    return (
        <div>
        {isLoading && <LoadingSpinner></LoadingSpinner>}
        <form
            onKeyPress={(event) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                formik.handleSubmit();
            }
            }} 
            onSubmit={formik.handleSubmit}
            style={props.style}
            className={props.className}
        >
            <TextField
            fullWidth
            id="projectName"
            name="projectName"
            label="Project Name"
            value={formik.values.projectName}
            onChange={formik.handleChange}
            error={formik.touched.projectName && Boolean(formik.errors.projectName)}
            helperText={formik.touched.projectName && formik.errors.projectName}
            margin="normal"
            />

            <FormControl fullWidth>
            <InputLabel id="scanningMode-label">Scanning Mode</InputLabel>
            <Select
                fullWidth
                name="scanningMode"
                id="scanningMode"
                value={formik.values.scanningMode}
                labelId="scanningMode-label"
                onChange={formik.handleChange}
                error={formik.touched.scanningMode && Boolean(formik.errors.scanningMode)}
            >
                <MenuItem value="GANTRY">Gantry</MenuItem>
                <MenuItem value="CRAWLER">Crawler</MenuItem>
                <MenuItem value="AUTO">Auto</MenuItem>
                <MenuItem value="MANUAL">Manual</MenuItem>
                <MenuItem value="ARM">Arm</MenuItem>
            </Select>
            {formik.touched.scanningMode && formik.errors.scanningMode && (
            <FormHelperText error>
            {formik.errors.scanningMode}
            </FormHelperText>
        )}
            </FormControl>

            <TextField 
            type={'number'}
            fullWidth id="scanDimensionsX" name="scanDimensionsX" label="Scanning Dimension X"
            value={formik.values.scanDimensionsX}
            onChange={formik.handleChange}
            error={formik.touched.scanDimensionsX && Boolean(formik.errors.scanDimensionsX)}
            helperText={formik.touched.scanDimensionsX && formik.errors.scanDimensionsX} 
            margin="dense"
            />
            <TextField 
            type={'number'}
            fullWidth id="scanDimensionsY" name="scanDimensionsY" label="Scanning Dimension Y"
            value={formik.values.scanDimensionsY}
            onChange={formik.handleChange}
            error={formik.touched.scanDimensionsY && Boolean(formik.errors.scanDimensionsY)}
            helperText={formik.touched.scanDimensionsY && formik.errors.scanDimensionsY} 
            margin="dense"
            />
            <TextField 
            type={'text'}
            fullWidth id="scannerFrequency" name="scannerFrequency" label="Scanner Frequency"
            value={formik.values.scannerFrequency}
            onChange={formik.handleChange}
            error={formik.touched.scannerFrequency && Boolean(formik.errors.scannerFrequency)}
            helperText={formik.touched.scannerFrequency && formik.errors.scannerFrequency} 
            margin="dense"
            />
            <Button color="primary" variant="contained" fullWidth type="submit" onClick={formik.handleSubmit}>
                Submit
            </Button>
        </form>
    </div>
)
};
export default UseMaterial;

