import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import './SignUp.css'
import { MdClose} from "react-icons/md";
import {  InputLabel, Typography, Container, TextField,
  FormControl, Select,MenuItem, Table, TableBody, TableCell, TableContainer, TableHead, 
  TableRow, Paper,Box } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { userRegisterAction, clearError } from "../../Redux/Actions/userAction";
import { useRef } from "react";
import { ImEnter } from "react-icons/im";
import Loader from "../../Components/Loader/Loader";

const SignUp = () => {
  const dispatch = useDispatch();
  const passwordToggle = useRef();
  const RegisterSuccess = useRef();
  const Navigate = useNavigate();
  const { error, success, loading } = useSelector((state) => state.register);
  
  document.title = `Register User`;
  const closeRegisterPop = () => {
    RegisterSuccess.current.style.display = "none";
  };
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [dob, setDob] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [smoke, setSmoke] = useState('');
  const [alcohol, setAlcohol] = useState('');
  const [family, setFamily] = useState('');
  const [gender, setGender] = useState('');
  const [familyDetails, setFamilyDetails] = useState([]);


  const handleSmokeChange = (event) => {
    setSmoke(event.target.value);
  };
  const handleAlcoholChange = (event) => {
    setAlcohol(event.target.value);
  };
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleFamilyChange = (event) => {
    const numberOfFamilyMembers = parseInt(event.target.value);
    setFamily(numberOfFamilyMembers);
    
    const details = Array.from({ length: numberOfFamilyMembers }, (_, index) => ({
      key: index,
      name: '',
      relation: '',
      age: '',
      sugar: '',
      bp: '',
      creatinine: '',
      glucose: '',
      skinthickness:'',
      insulin:'',
      bmi:'',
    }));
    
    setFamilyDetails(details);
  };
  
    const handleDetailChange = (index, field, value) => {
      const updatedDetails = [...familyDetails];
      updatedDetails[index][field] = value;
      setFamilyDetails(updatedDetails);
    };  
    const HandelRegisterUser = (e) => {
      e.preventDefault();
  
      const firstName = e.target.firstName.value;
      const lastName = e.target.lastName.value;
      const email = e.target.email.value;
      const password = e.target.password.value;
      const confirmPassword = e.target.cPassword.value;
      const dob = e.target.dob.value;
      const height = e.target.height.value;
      const weight = e.target.weight.value;
      const smoke = e.target.smoke.value;
      const alcohol = e.target.alcohol.value; 
      const gender = e.target.gender.value;
    
 
      if (firstName && lastName && email && password && confirmPassword && dob && height && weight && smoke && alcohol && gender && familyDetails.length > 0) {
        const userData = {
          firstName,
          lastName,
          email,
          password,
          confirmPassword,
          dob,
          height,
          weight,
          smoke,
          alcohol,
          gender,
          familyDetails,
        };
        dispatch(userRegisterAction(userData));
      }
    };

  if (error) {
    setTimeout(() => {
      // console.log("Time Up");
      dispatch(clearError());
      // console.log(error);
    }, 10000);
  }

  return (
    <>
      <Header />
      {loading ? (
        <Loader LoadingName={"Validating Data"} />
      ) : (
        <div className="signup-container">
          <h1 className="Heading" style={{paddingTop:'120px'}}>
            User <span>Register</span>
          </h1>
          {success ? (
            <div className="RegisterSuccess" ref={RegisterSuccess}>
              <div className="pop-card">
                <button id="close-btn" onClick={closeRegisterPop}>
                  <MdClose />
                </button>
                <div className="successLoader">
                  <h3 className="loader-text"></h3>
                </div>
                <h1>Register SuccessFully..!!</h1>
                <button
                  onClick={() => {
                    Navigate("/Login");
                  }}
                >
                  Login <ImEnter />
                </button>
              </div>
            </div>
          ) : (
            ""
          )}
      <Container>
            <div className="signup-box">
            <Box sx={{ minWidth: 120 }}>
              <form onSubmit={(e) => HandelRegisterUser(e)}>
              <TextField name="firstName" value={firstName} type="text" label="First Name"  onChange={(e) => setFirstName(e.target.value)} variant="filled" fullWidth  required  /> <br/><br/>
              <TextField name="lastName" value={lastName} type="text" label="Last Name" onChange={(e) => setLastName(e.target.value)} variant="filled" fullWidth  required  />  <br/><br/>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                <Select name ="gender"  value={gender} onChange={handleGenderChange} label="gender">
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="others">Others</MenuItem>
                </Select>
              </FormControl> <br/><br/>  
              <TextField name="dob"  value={dob} type="date" label="Dob" onChange={(e) => setDob(e.target.value)} variant="filled"  fullWidth required /><br/><br/> 
              <TextField name="email"  value={email} type="email" label="email" onChange={(e) => setEmail(e.target.value)}  variant="filled" fullWidth required /> <br/><br/>     
              <TextField name="password" value={password}  type="password" onChange={(e) => setPassword(e.target.value)} label="password" variant="filled" fullWidth ref={passwordToggle} required /> <br/><br/>
              <TextField name="cPassword" value={confirmPassword}  type="text" onChange={(e) => setConfirmPassword(e.target.value)}  label="Confirm Password" fullWidth variant="filled" required /><br/><br/>
              <TextField name="height" value={height}  type="text" label="Height" onChange={(e) => setHeight(e.target.value)} variant="filled" fullWidth required /> <br/><br/>
              <TextField name="weight" value={weight} type="text" label="Weight" onChange={(e) => setWeight(e.target.value)} variant="filled" fullWidth required /> <br/><br/>
              <FormControl fullWidth>
                <InputLabel >Do You Smoke? </InputLabel>
                <Select name="smoke" value={smoke} onChange={handleSmokeChange}   label="somke">
                  <MenuItem value="">Select an option</MenuItem>
                  <MenuItem value="yes">Yes</MenuItem>
                  <MenuItem value="No">No</MenuItem>
                </Select>
              </FormControl> <br/><br/>  
              <FormControl fullWidth>
                <InputLabel>Do You Alcohol? </InputLabel>
                <Select name="alcohol" value={alcohol} onChange={handleAlcoholChange} label="alcohol">
                <MenuItem value="">Select an option</MenuItem>
                  <MenuItem value="yes">Yes</MenuItem>
                  <MenuItem value="No">No</MenuItem>
                </Select>
              </FormControl> <br/><br/>  

              
              
            <Typography>Please fill out the following questions according to 
              the diseases in your family (multiple selection is possible).
              Mother, father, brother, sister, uncle, aunt, grandmother, grandfather, cousin, etc.</Typography><br/>
          
    <TextField name="family" type="number" value={family} fullWidth variant="outlined"  label="Family members"  onChange={handleFamilyChange}  required  />

      <TableContainer component={Paper}>
        <Table aria-label="family member details">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Relation</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Sugar Level</TableCell>
              <TableCell>BP</TableCell>
              <TableCell>Creatinine</TableCell>
              <TableCell>Glucose</TableCell>
              <TableCell>SkinThickness</TableCell>
              <TableCell>Insulin</TableCell>
              <TableCell>BMI</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {familyDetails.map((details, index) => (
              <TableRow key={index}>
                <TableCell>
                  <TextField
                    name="name"
                    type="text" 
                    value={details.name}
                    onChange={(e) => handleDetailChange(index, 'name', e.target.value)}
                  />
                </TableCell>
                <TableCell>
                  <Select
                    name="relation"
                    value={details.relation}
                    onChange={(e) => handleDetailChange(index, 'relation', e.target.value)}
                  >
                    <MenuItem value="father">Father</MenuItem>
                    <MenuItem value="mother">Mother</MenuItem>
                    <MenuItem value="elder-sister">Elder-Sister</MenuItem>
                    <MenuItem value="younger-sister">Younger-Sister</MenuItem>
                    <MenuItem value="elder-brother">Elder-Brother</MenuItem>
                    <MenuItem value="younger-brother">Younger-Brother</MenuItem>
                  </Select>
                </TableCell>
                <TableCell>
                  <TextField
                    name="age"
                    type="number" 
                    value={details.age}
                    onChange={(e) => handleDetailChange(index, 'age', e.target.value)}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                  name="sugar"
                  type="number" 
                    value={details.sugar}
                    onChange={(e) => handleDetailChange(index, 'sugar', e.target.value)}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                   name="bp"
                   type="number" 
                    value={details.bp}
                    onChange={(e) => handleDetailChange(index, 'bp', e.target.value)}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                   name="creatinine"
                   type="number" 
                    value={details.creatinine}
                    onChange={(e) => handleDetailChange(index, 'creatinine', e.target.value)}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                   name="glucose"
                   type="number" 
                    value={details.glucose}
                    onChange={(e) => handleDetailChange(index, 'glucose', e.target.value)}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                   name="skinthickness"
                   type="number" 
                    value={details.skinthickness}
                    onChange={(e) => handleDetailChange(index, 'skinthickness', e.target.value)}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                   name="insulin"
                   type="number" 
                    value={details.insulin}
                    onChange={(e) => handleDetailChange(index, 'insulin', e.target.value)}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                   name="bmi"
                   type="number" 
                    value={details.bmi}
                    onChange={(e) => handleDetailChange(index, 'bmi', e.target.value)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
                {error ? (
                  <div className="validError">
                    {error.map((err) => {
                      return (
                        <>
                          <span>{err}</span>
                          <br />
                        </>
                      );
                    })}
                  </div>
                ) : (
                  ""
                )}

                <div
                  className="user-links"
                  style={{ justifyContent: "center" }}
                >
                
                  <Link to="/Login">Already Register ? Login </Link>
                </div>
                <button>Register</button>
            
              </form>
              </Box>
            </div>
            </Container>
          </div>
      )}
      <Footer />
    </>
  );
};
export default SignUp;
