import "./styles.css";
import React from "react";
import MovieBox from "./MovieBox.js";
import Display from "./Display";
import { file } from "./data.js";
import Footer from "./Footer.js";
import Popup from "./Popup";

export default function App() {
  const [show, setShow] = React.useState(0);

  const styles = {
    color: "white",
    fontFamily: "Helvetica",
    fontSize: "20px",
    padding: "20px"
  };

  return (
    <>
      <h1 className="h1">PAXIWOOD</h1>
      {/* text={file[show].text} */}
      {show === file[show].id && (
        <Popup
          video={file[show].video}
          heading={file[show].text}
          about={file[show].about}
          close={show}
          onclick={() => setShow("0")}
        />
      )}
      <Display
        video={file[show].video}
        heading={file[show].text}
        about={file[show].about}
      />
      {/* {console.log(file[show].text)} */}
      <h3 style={styles}>Latest Release</h3>
      <div className="App">
        {file
          .filter((file) => file.category === "latest")
          .map((f) => (
            <MovieBox
              id={f.id}
              onclick={() => setShow(f.id)}
              img={f.img}
              text={f.text}
              about={f.about}
            />
          ))}
      </div>
      <h3 style={styles}>Romantic Movies</h3>
      <div className="App">
        {file
          .filter((file) => file.category === "romance")
          .map((f) => (
            <MovieBox
              id={f.id}
              onclick={() => setShow((prev) => f.id)}
              img={f.img}
              text={f.text}
              about={f.about}
            />
          ))}
      </div>
      <h3 style={styles}>Stand-up Comedies</h3>
      <div className="App">
        {file
          .filter((file) => file.category === "stand-up comedies")
          .map((f) => (
            <MovieBox
              id={f.id}
              onclick={() => setShow((prev) => f.id)}
              img={f.img}
              text={f.text}
              about={f.about}
            />
          ))}
      </div>
      <h3 style={styles}>Horror Movies</h3>
      <div className="App">
        {file
          .filter((file) => file.category === "horror")
          .map((f) => (
            <MovieBox
              id={f.id}
              onclick={() => setShow((prev) => f.id)}
              img={f.img}
              text={f.text}
              about={f.about}
            />
          ))}
      </div>
      <h3 style={styles}>Nollywood Movies</h3>
      <div className="App">
        {file
          .filter((file) => file.category === "nollywood")
          .map((f) => (
            <MovieBox
              id={f.id}
              onclick={() => setShow((prev) => f.id)}
              img={f.img}
              text={f.text}
              about={f.about}
            />
          ))}
      </div>
      <h3 style={styles}>Goofy Movies</h3>
      <div className="App">
        {file
          .filter((file) => file.category === "goofy")
          .map((f) => (
            <MovieBox
              id={f.id}
              onclick={() => setShow((prev) => f.id)}
              img={f.img}
              text={f.text}
              about={f.about}
            />
          ))}
      </div>
      <h3 style={styles}>For Kids & Family</h3>
      <div className="App">
        {file
          .filter((file) => file.category === "for kids & family")
          .map((f) => (
            <MovieBox
              id={f.id}
              onclick={() => setShow((prev) => f.id)}
              img={f.img}
              text={f.text}
              about={f.about}
            />
          ))}
      </div>

      <Footer />
    </>
  );
}

// The main video when the trailer is clicked on to leading using a react router.
// The slider for the movies
//responsive design
// Clean up the code, use meaningful words
