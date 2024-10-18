// create.js

//IMPORT
import { useState } from "react";

// Create Function
function Create() {
  //state: current state value. E.g. title, year, poster
  //setState: update the state value. E.g. setTitle, setYear, setPoster
  const [title, setTitle] = useState(''); //Movie Title
  const [year, setYear] = useState(''); //Movie Year
  const [poster, setPoster] = useState(''); //Movie Poster

  //handleSubmit Arrow Function after clicking the submit button for all 3 fields that has been input
  const handleSubmit = (e) => {
    //If any one of the input boxes hasn't been added
    if(title == "" || year == "" || poster == ""){
      e.preventDefault();
      console.log("Invalid, must input all three boxes");

    //All 3 input boxes has been added
    } else{
    e.preventDefault();
    console.log("Movie Title: " + title);
    console.log("Movie Year: " +year);
    console.log("Movie Poster: " +poster);
    }
  }
  
  //Add Movie Title(text), Movie Year(year) & Movie Poster(url) using input form
  //After you input all 3 boxes, click on the Submit button that says "Add Movie"
  return (
    <div>
      <h2>Hello from Create component!</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Add Movie Title: </label>
          <input type="text"
            className="form-control"
            value={title}
            onChange={(e) => { setTitle(e.target.value) }}
          />
          <label>Add Movie Year: </label>
          <input type="year"
            className="form-control"
            value={year}
            onChange={(e) => { setYear(e.target.value) }}
          />
          <label>Add Movie Poster: </label>
          <input type="url"
            className="form-control"
            value={poster}
            onChange={(e) => { setPoster(e.target.value) }}
          />
        </div>
        <input type="submit" value="Add Movie" />
      </form>
    </div>
  );
}

//

//Export to App.js
export default Create;