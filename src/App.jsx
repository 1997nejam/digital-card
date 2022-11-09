import Card from "./Components/Card/Card";
import jocker from "./assets/jocker.jpg";

function App() {
  return (
    <div className="App p-12">
      <Card
        image={jocker}
        name="The joker"
        job="Professional joker"
        website="joker.com"
        email="joker@joker.com"
        linkedIn="linkedin.com/joker"
        about="Joker is a 2019 American psychological thriller film directed by Todd Phillips, who also co-wrote the screenplay with Scott Silver."
        intrests="The film, based on DC Comics characters, stars Joaquin Phoenix as the Joker and serves as a standalone origin story for the character."
      />
    </div>
  );
}

export default App;
