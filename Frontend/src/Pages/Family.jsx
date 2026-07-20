import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "./../Components/Header/Header";
import Loader from "./../Components/Loader/Loader";
import NotFoundCart from "./../Components/NotFoundCart/NotFoundCart";
import { getUserAction } from "./../Redux/Actions/userAction";

const UsersList = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const { user, loading, error, success } = useSelector((state) => state.user);

  useEffect(() => {
    if (userId) {
      document.title = "User Details";
      dispatch(getUserAction(userId));
    }
  }, [userId, dispatch]);

  if (loading) {
    return <Loader LoadingName={"Loading Users"} />;
  }

  if (!success || !user) {
    return <NotFoundCart msg={error} />;
  }
  const data = {
    labels: user.familyDetails.map((detail) => detail.name), // Use family member names as labels
    datasets: [{
      label: 'Health Details', // Label for the dataset
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)', // Adjust colors as needed
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)', // Adjust colors as needed
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1,
      data: user.familyDetails.map((detail) => detail.sugar) // Use sugar level as data for the pie chart
    }]
  };

  const suggestGrocery = (detail) => {
    let suggestions = [[], [], [],[],[],[],[]]; // Array of arrays for each health condition
    
    // Suggest groceries based on health conditions
    if (detail.sugar > 500) {
      suggestions[0].push("Berries");
      suggestions[0].push("Apples");
      suggestions[0].push("Citrus fruits");
      suggestions[0].push("Leafy Greens");
      suggestions[0].push("Bell Peppers");
  } else if (detail.sugar < 200) {
      suggestions[0].push("Bananas");
      suggestions[0].push("Apples");
      suggestions[0].push("Pineapples");
  } else {
      suggestions[0].push("Bananas");
      suggestions[0].push("Apples");
      suggestions[0].push("Pineapples");
  }
    // Repeat the same process for other health conditions (e.g., blood pressure and creatinine)
    
   // Suggest groceries based on health conditions
   if (detail.bp < 60) {
    suggestions[1].push("Berries (blueberries, strawberries)");
    suggestions[1].push("Apples");
    suggestions[1].push("Citrus fruits (oranges, grapefruits)");
} else if (detail.bp < 1) {
    suggestions[1].push("Cucumbers");
    suggestions[1].push("Apples");
    suggestions[1].push("Pineapples");
} else {
    suggestions[1].push("Bananas");
    suggestions[1].push("Mushrooms");
    suggestions[1].push("Pineapples");
}
    
   // Suggest groceries based on health conditions
   if (detail.creatinine < 60) {
    suggestions[2].push("Berries (blueberries, strawberries)");
    suggestions[2].push("Apples");
    suggestions[2].push("Citrus fruits (oranges, grapefruits)");
} else if (detail.creatinine < 1) {
    suggestions[2].push("Bananas");
    suggestions[2].push("Apples");
    suggestions[2].push("Pineapples");
} else {
    suggestions[2].push("Bananas");
    suggestions[2].push("Apples");
    suggestions[2].push("Tomatoes");
}

if (detail.glucose < 60) {
  suggestions[3].push("Berries (blueberries, strawberries)");
  suggestions[3].push("Apples");
  suggestions[3].push("Citrus fruits (oranges, grapefruits)");
} else if (detail.glucose < 10) {
  suggestions[3].push("Bananas");
  suggestions[3].push("Apples");
  suggestions[3].push("Pineapples");
} else {
  suggestions[3].push("Bananas");
  suggestions[3].push("Apples");
  suggestions[3].push("Pineapples");
}

if (detail.skinthickness < 60) {
  suggestions[4].push("Berries (blueberries, strawberries)");
  suggestions[4].push("Apples");
  suggestions[4].push("Citrus fruits (oranges, grapefruits)");
} else if (detail.skinthickness < 1) {
  suggestions[4].push("Bananas");
  suggestions[4].push("Apples");
  suggestions[4].push("Pineapples");
} else {
  suggestions[4].push("Bananas");
  suggestions[4].push("Apples");
  suggestions[4].push("Pineapples");
}

if (detail.insulin < 60) {
  suggestions[5].push("Berries (blueberries, strawberries)");
  suggestions[5].push("Apples");
  suggestions[5].push("Citrus fruits (oranges, grapefruits)");
} else if (detail.insulin < 1) {
  suggestions[5].push("Bananas");
  suggestions[5].push("Apples");
  suggestions[5].push("Pineapples");
} else {
  suggestions[5].push("Bananas");
  suggestions[5].push("Apples");
  suggestions[5].push("Pineapples");
}

if (detail.bmi < 29) {
  suggestions[6].push("Berries");
  suggestions[6].push("Apples");
  suggestions[6].push("Citrus fruits (oranges, grapefruits)");
} else if (detail.bmi < 10) {
  suggestions[6].push("Bananas");
  suggestions[6].push("Apples");
  suggestions[6].push("Pineapples");
} else {
  suggestions[6].push("Bananas");
  suggestions[6].push("Apples");
  suggestions[6].push("Pineapples");
}



    return suggestions;
};
  return (
    <>
      <Header />
      <div>
        <h1>User Details</h1>
        <div className="products-table">
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Height</th>
                <th>Weight</th>
                <th>Smoke</th>
                <th>Alcohol</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{user._id}</td>
                <td>{`${user.firstName} ${user.lastName}`}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>{user.height}</td>
                <td>{user.weight}</td>
                <td>{user.smoke}</td>
                <td>{user.alcohol}</td>
              </tr>
            </tbody>
          </table>
          <h2 align="center">Family Details</h2><hr/>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Relation</th>
                <th>Age</th>
                <th>Sugar</th>
                <th>Blood Pressure</th>
                <th>Creatinine</th>
                <th>Glucose</th>
                <th>Skinthickness</th>
                <th>Insulin</th>
                <th>BMI</th>
              </tr>
            </thead>
            <tbody>
              {user.familyDetails.map((detail) => (
                <tr key={detail._id}>
                  <td>{detail.name}</td>
                  <td>{detail.relation}</td>
                  <td>{detail.age}</td>
                  <td>{detail.sugar}</td>
                  <td>{detail.bp}</td>
                  <td>{detail.creatinine}</td>
                  <td>{detail.glucose}</td>
                  <td>{detail.skinthickness}</td>
                  <td>{detail.insulin}</td>
                  <td>{detail.bmi}</td>
                </tr>
              ))}
            </tbody>
          </table>
          

          <h2 align="center">Family Grocery Suggestions</h2><br/>
          <p align="center"><b>It is only for the suggestions Only</b> </p>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Sugar</th>
                <th>Blood Pressure</th>
                <th>Creatinine</th>
                <th>Glucose</th>
                <th>Skinthickness</th>
                <th>Insulin</th>
                <th>BMI</th>
              </tr>
            </thead>
            <tbody>
              {user.familyDetails.map((detail) => (
                <tr key={detail._id}>
                  <td>{detail.name}</td>
                <td>{suggestGrocery(detail)[0].join(", ")}</td>
                <td>{suggestGrocery(detail)[1].join(", ")}</td>
                <td>{suggestGrocery(detail)[2].join(", ")}</td>
                <td>{suggestGrocery(detail)[3].join(", ")}</td>
                <td>{suggestGrocery(detail)[4].join(", ")}</td>
                <td>{suggestGrocery(detail)[5].join(", ")}</td>
                <td>{suggestGrocery(detail)[6].join(", ")}</td>
                </tr>
              ))}
            </tbody>
          </table>

         
        </div>
      </div>
    </>
  );
};

export default UsersList;
