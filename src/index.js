import "./style";
import { Info } from "./components/info";

export default function App() {
  return (
    <div class="container">
      <header class="hero">
        <h1 class="title">
          weather forecast
          <br />
          for the next 7 days
        </h1>
        <h2 class="subtitle">Lorem ipsum</h2>
        <div class="info">
          <Info title="Lorem #1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem ab a, accusantium autem blanditiis enim ipsa doloribus rerum sapiente esse velit vel laboriosam maxime voluptas error odio. Voluptatibus incidunt nesciunt adipisci iste, laboriosam ad eius dolorem labore doloremque at expedita facere exercitationem quaerat itaque, fugit vitae. Repellat velit quis, atque!
          </Info>
					<Info title="Lorem #1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit,
            tempora!
          </Info>
					<Info title="Lorem #1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit,
            tempora!
          </Info>
        </div>
      </header>
			<section class="search-bar">
				<input type="text"/>
			</section>
    </div>
  );
}
