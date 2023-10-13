import {
  //   hp,
  //   Group1,
  image5,
  image6,
  image14,
  Mask1,
  Mask2,
  Mask3,
  Maskgroup,
  remimage1,
  remimage2,
  remimage3,
  remimage4,
  remimage5,
} from "@/assets";
import Image from "next/image";

const page = () => {
  return (
    <div className="rem">
      {/* <!-- Section for Remedies Image --> */}
      <section class="Remediesimage">
        <Image src={image14} alt="image" />
      </section>
      {/* <!-- Heading for Healthy Foods --> */}
      <h1 class="remediesheading">HEALTHY FOODS</h1>
      <section id="main">
        {/* <!-- Section for Remedies Header --> */}
        <section class="Remediesheaderheader">
          <div class="split">
            <div class="split1">
              <h2>Anti-inflammatory Beet & Avocado Wrap!</h2>
            </div>
            <div class="split2">
              <Image src={remimage1} alt="image" />
            </div>
          </div>
        </section>

        <section class="Ingredients">
          {/* <!-- Section for Ingredients --> */}
          <section class="ingredients1">
            <div class="firsthead">Prepare the Tahini-Lemon Mixture:</div>
            <div class="secondhead">
              <div>
                <h3>Combine the following ingredients in a bowl:</h3>
                <ul>
                  <li>1 tbsp lemon juice</li>
                  <li>1 tbsp tahini</li>
                  <li>1 tsp olive oil</li>
                  <li>⅛ tsp salt</li>
                  <li>⅛ tsp ground pepper</li>
                </ul>
              </div>
              <div>
                <h3>Julienne the Beets:</h3>
                <ul>
                  <li>Cut beets into thin rounds.</li>
                  <li>Slice the rounds into matchsticks.</li>
                </ul>
              </div>
              <div>
                <h3>Assemble the Wrap:</h3>
                <ul>
                  <li>
                    Spread 1 ½ tbsp hummus evenly onto a whole-wheat tortilla.
                  </li>
                  <li>
                    Place 2 leaves of butter lettuce on top of the hummus.
                  </li>
                  <li>Add the following ingredients on top of the lettuce:</li>
                  <li>Julienned red beets</li>
                  <li>½ medium sliced avocado</li>
                </ul>
              </div>
              <div>
                <h3>Drizzle with Tahini-Lemon Mixture:</h3>
                <ul>
                  <li>
                    Drizzle the tahini-lemon mixture over the ingredients.
                  </li>
                </ul>
              </div>
              <div>
                <h3>Wrap and Serve:</h3>
                <ul>
                  <li>Carefully fold and roll the tortilla to form a wrap.</li>
                  <li>Serve immediately and enjoy!</li>
                </ul>
              </div>
            </div>
          </section>

          {/* <!-- Section for Remedies Information --> */}
          <section class="remediesinformation">
            <section class="steps">
              <div class="inimage">
                <Image src={Maskgroup} alt="image" />
              </div>
              <div>
                <ul>
                  <li>Packed with fiber.</li>
                  <li>Rich in monounsaturated fats.</li>
                  <li>Helps fight inflammation.</li>
                </ul>
              </div>
            </section>
            <div className="remline" />
            <section class="steps">
              <div class="inimage">
                <Image src={Mask1} alt="image" />
              </div>
              <div>
                <ul>
                  <li>Anti-inflammation phytochemicals.</li>
                  <li>Adds health benefits to the wrap.</li>
                </ul>
              </div>
            </section>
            <div className="remline" />
            <section class="steps">
              <div class="inimage">
                <Image src={Mask2} alt="image" />
              </div>
              <div>
                <ul>
                  <li>Adds brightness to the wraps.</li>
                  <li>Imparts a nutty flavor.</li>
                </ul>
              </div>
            </section>
            <div className="remline" />
            <section class="steps">
              <div class="inimage">
                <Image src={image6} alt="image" />
              </div>
              <div>
                <ul>
                  <li>1 tbsp Lemon Juice</li>
                  <li>1 tbsp Tahini</li>
                  <li>1 tsp Extra-Virgin Olive Oil</li>
                  <li>⅛ tsp Kosher Salt</li>
                  <li>⅛ tsp Ground Pepper</li>
                </ul>
              </div>
            </section>
            <div className="remline" />
            <section class="steps1">
              <div class="inimage">
                <center>
                  <Image src={Mask3} alt="image" />
                </center>
              </div>
              <br />
              <div>
                <ol>
                  <li>
                    Slice beets by cutting into thin rounds, then slice rounds
                    into matchsticks.
                  </li>
                  <li>
                    Time-saving option: Grate beets on the largest holes of a
                    box grater.
                  </li>
                </ol>
              </div>
            </section>
          </section>
        </section>

        <section class="notesection">
          <div class="note">
            <div>
              <Image src={image5} alt="image" />
            </div>
            <div class="notetext">
              <ul>
                <li>Use fresh ingredients for the best taste.</li>
                <li>Experiment with seasoning for added flavor.</li>
              </ul>
            </div>
          </div>
        </section>
      </section>
      {/* <!--second Remedies--> */}
      <section id="main1">
        {/* <!-- Section for Remedies Header --> */}
        <section class="Remediesheaderheader">
          <div class="split">
            <div class="split1">
              <h2>Vegan Smoothie Bowl</h2>
            </div>
            <div class="split2">
              <Image src={remimage2} alt="image" />
            </div>
          </div>
        </section>

        <section class="Ingredients">
          {/* <!-- Section for Ingredients --> */}
          <section class="ingredients1">
            <div class="firsthead">Prepare the Vegan Smoothie Bowl:</div>
            <div class="secondhead">
              <div>
                <h3>Combine the following ingredients in a bowl:</h3>
                <ul>
                  <li>1 large banana</li>
                  <li>1 cup frozen mixed berries</li>
                  <li>
                    ½ cup unsweetened soymilk or other unsweetened non-dairy
                    milk
                  </li>
                  <li>¼ cup pineapple chunks</li>
                  <li>½ kiwi, sliced</li>
                  <li>1 tablespoon sliced almonds, toasted if desired</li>
                  <li>1 tablespoon sliced almonds, toasted if desired</li>
                  <li>1 teaspoon chia seeds</li>
                </ul>
              </div>
              <div>
                <h3>Direction</h3>
                <ul>
                  <li>
                    Combine banana, berries and soymilk (or almond milk) in a
                    blender. Blend until smooth
                  </li>
                  <li>
                    Pour the smoothie into a bowl and top with pineapple, kiwi,
                    almonds, coconut and chia seeds.
                  </li>
                </ul>
              </div>
              <div>
                <h3>Nutrition Profile</h3>
                <ul>
                  <li>High-Calcium Bone-Health</li>
                  <li>Dairy-Free Healthy Aging</li>
                  <li>Low-Sodium High-Blood Pressure</li>
                  <li>High-Fiber Heart-Healthy</li>
                  <li>Vegan Egg-Free</li>
                  <li>Gluten-Free, Low-Calorie</li>
                </ul>
              </div>
            </div>
          </section>

          {/* <!-- Section for Remedies Information --> */}
          <section class="remediesinformation">
            <section class="steps">
              <div class="inimage">
                <Image src={Maskgroup} alt="image" />
              </div>
              <div>
                <ul>
                  <li>Packed with fiber.</li>
                  <li>Rich in monounsaturated fats.</li>
                  <li>Helps fight inflammation.</li>
                </ul>
              </div>
            </section>
            <div className="remline" />
            <section class="steps">
              <div class="inimage">
                <Image src={Mask1} alt="image" />
              </div>
              <div>
                <ul>
                  <li>Anti-inflammation phytochemicals.</li>
                  <li>Adds health benefits to the wrap.</li>
                </ul>
              </div>
            </section>
            <div className="remline" />
            <section class="steps">
              <div class="inimage">
                <Image src={Mask2} alt="image" />
              </div>
              <div>
                <ul>
                  <li>Adds brightness to the wraps.</li>
                  <li>Imparts a nutty flavor.</li>
                </ul>
              </div>
            </section>
            <div className="remline" />
            <section class="steps">
              <div class="inimage">
                              <Image src={image6} alt="image" />
              </div>
              <div>
                <ul>
                  <li>1 tbsp Lemon Juice</li>
                  <li>1 tbsp Tahini</li>
                  <li>1 tsp Extra-Virgin Olive Oil</li>
                  <li>⅛ tsp Kosher Salt</li>
                  <li>⅛ tsp Ground Pepper</li>
                </ul>
              </div>
            </section>
            <div className="remline" />
            <section class="steps1">
              <div class="inimage">
                <center>
                  <Image src={Mask3} alt="image" />
                </center>
              </div>
              <br />
              <div>
                <ol>
                  <li>
                    Slice beets by cutting into thin rounds, then slice rounds
                    into matchsticks.
                  </li>
                  <li>
                    Time-saving option: Grate beets on the largest holes of a
                    box grater.
                  </li>
                </ol>
              </div>
            </section>
          </section>
        </section>

        <section class="notesection">
          <div class="note">
            <div>
              <Image src={image5} alt="image" />
            </div>
            <div class="notetext">
              <ul>
                <li>Use fresh ingredients for the best taste.</li>
                <li>Experiment with seasoning for added flavor.</li>
              </ul>
            </div>
          </div>
        </section>
      </section>
      {/* <!--3rd remedies--> */}
      <section id="main2">
        {/* <!-- Section for Remedies Header --> */}
        <section class="Remediesheaderheader">
          <div class="split">
            <div class="split1">
              <h2>Chickpea Salad Sandwich</h2>
            </div>
            <div class="split2">
              <Image src={remimage3} alt="image" />
            </div>
          </div>
        </section>

        <section class="Ingredients">
          {/* <!-- Section for Ingredients --> */}
          <section class="ingredients1">
            <div class="firsthead">Prepare the Chickpea Salad Sandwich:</div>
            <div class="secondhead">
              <div>
                <h3>Combine the following ingredients in a bowl:</h3>
                <ul>
                  <li>2 (15.5 ounce) cans no-salt-added chickpeas, rinsed</li>
                  <li>6 tablespoons extra-virgin olive oil</li>
                  <li>3 tablespoons lemon juice</li>
                  <li>2 teaspoons Dijon mustard</li>
                  <li>½ teaspoon garlic powder</li>
                  <li>½ cup finely chopped celery</li>
                  <li>¼ cup finely chopped fresh dill</li>
                  <li>⅛ teaspoon salt</li>
                  <li>⅛ teaspoon ground pepper</li>
                  <li>8 slices whole-grain bread, toasted</li>
                  <li>4 green lettuce leaves</li>
                  <li>4 thin slices red onion</li>
                  <li>4 tomato slices</li>
                </ul>
              </div>
              <div>
                <h3>Direction</h3>
                <ul>
                  <li>
                    Combine chickpeas, oil, lemon juice, mustard and garlic
                    powder in a large bowl. Using a fork or potato masher, crush
                    the chickpeas until most are mashed but some are still
                    whole. Stir in celery, dill, salt and pepper.
                  </li>
                  <li>
                    Spread 1 tablespoon mayonnaise on 1 side of each of 4 slices
                    of bread. Top evenly with lettuce, onion, tomato and
                    chickpea mixture. Top with the remaining 4 slices of bread.
                  </li>
                </ul>
              </div>
              <div>
                <h3>Nutrition Profile</h3>
                <ul>
                  <li>Nut-Free </li>
                  <li>Healthy Pregnancy High-Fiber</li>
                  <li> Vegan Vegetarian High-Protein Egg-Free</li>
                  <li>Dairy-Free</li>
                </ul>
              </div>
            </div>
          </section>

          {/* <!-- Section for Remedies Information --> */}
          <section class="remediesinformation">
            <section class="steps">
              <div class="inimage">
                <Image src={Maskgroup} alt="image" />
              </div>
              <div>
                <ul>
                  <li>Packed with fiber.</li>
                  <li>Rich in monounsaturated fats.</li>
                  <li>Helps fight inflammation.</li>
                </ul>
              </div>
            </section>
            <div className="remline" />
            <section class="steps">
              <div class="inimage">
                <Image src={Mask1} alt="image" />
              </div>
              <div>
                <ul>
                  <li>Anti-inflammation phytochemicals.</li>
                  <li>Adds health benefits to the wrap.</li>
                </ul>
              </div>
            </section>
            <div className="remline" />
            <section class="steps">
              <div class="inimage">
                <Image src={Mask2} alt="image" />
              </div>
              <div>
                <ul>
                  <li>Adds brightness to the wraps.</li>
                  <li>Imparts a nutty flavor.</li>
                </ul>
              </div>
            </section>
            <div className="remline" />
            <section class="steps">
              <div class="inimage">
                <Image src={image6} alt="image" />
              </div>
              <div>
                <ul>
                  <li>1 tbsp Lemon Juice</li>
                  <li>1 tbsp Tahini</li>
                  <li>1 tsp Extra-Virgin Olive Oil</li>
                  <li>⅛ tsp Kosher Salt</li>
                  <li>⅛ tsp Ground Pepper</li>
                </ul>
              </div>
            </section>
            <div className="remline" />
            <section class="steps1">
              <div class="inimage">
                <center>
                  <Image src={Mask3} alt="image" />
                </center>
              </div>
              <br />
              <div>
                <ol>
                  <li>
                    Slice beets by cutting into thin rounds, then slice rounds
                    into matchsticks.
                  </li>
                  <li>
                    Time-saving option: Grate beets on the largest holes of a
                    box grater.
                  </li>
                </ol>
              </div>
            </section>
          </section>
        </section>

        <section class="notesection">
          <div class="note">
            <div>
              <Image src={image5} alt="image" />
            </div>
            <div class="notetext">
              <ul>
                <li>Use fresh ingredients for the best taste.</li>
                <li>Experiment with seasoning for added flavor.</li>
              </ul>
            </div>
          </div>
        </section>
      </section>
      {/* <!--4th remedies--> */}
      <section id="main3">
        {/* <!-- Section for Remedies Header --> */}
        <section class="Remediesheaderheader">
          <div class="split">
            <div class="split1">
              <h2>Loaded Black Bean Dip</h2>
            </div>
            <div class="split2">
              <Image src={remimage4} alt="image" />
            </div>
          </div>
        </section>

        <section class="Ingredients">
          {/* <!-- Section for Ingredients --> */}
          <section class="ingredients1">
            <div class="firsthead">Prepare the Loaded Black Bean Dip:</div>
            <div class="secondhead">
              <div>
                <h3>Combine the following ingredients in a bowl:</h3>
                <ul>
                  <li>1 (15 ounce) can reduced-sodium refried black beans</li>
                  <li>1 tablespoon lime juice</li>
                  <li>1 clove garlic, grated</li>
                  <li>½ teaspoon chili powder</li>
                  <li>½ teaspoon ground cumin</li>
                  <li>⅛ teaspoon salt</li>
                  <li>1 medium avocado, diced</li>
                  <li>½ cup finely chopped tomato</li>
                  <li>¼ cup finely chopped red onion</li>
                  <li>¼ cup crumbled cotija cheese or queso fresco</li>
                  <li>2 tablespoons diced pickled jalapeño</li>
                  <li>2 tablespoons chopped fresh cilantro</li>
                </ul>
              </div>
              <div>
                <h3>Direction</h3>
                <ul>
                  <li>
                    Combine beans, lime juice, garlic, chili powder, cumin and
                    salt in a shallow bowl. Microwave on High until heated
                    through, about 1 minute. Spread the mixture into an even
                    layer and top with avocado, tomato, onion, cheese, pickled
                    jalapeño and cilantro.
                  </li>
                </ul>
              </div>
              <div>
                <h3>Nutrition Profile</h3>
                <ul>
                  <li>Low-Fat </li>
                  <li>Low-Calorie</li>
                  <li> Gluten-Free</li>
                </ul>
              </div>
            </div>
          </section>

          {/* <!-- Section for Remedies Information --> */}
          <section class="remediesinformation">
            <section class="steps">
              <div class="inimage">
                <Image src={Maskgroup} alt="image" />
              </div>
              <div>
                <ul>
                  <li>Packed with fiber.</li>
                  <li>Rich in monounsaturated fats.</li>
                  <li>Helps fight inflammation.</li>
                </ul>
              </div>
            </section>
            <div className="remline" />
            <section class="steps">
              <div class="inimage">
                <Image src={Mask1} alt="image" />
              </div>
              <div>
                <ul>
                  <li>Anti-inflammation phytochemicals.</li>
                  <li>Adds health benefits to the wrap.</li>
                </ul>
              </div>
            </section>
            <div className="remline" />
            <section class="steps">
              <div class="inimage">
                <Image src={Mask2} alt="image" />
              </div>
              <div>
                <ul>
                  <li>Adds brightness to the wraps.</li>
                  <li>Imparts a nutty flavor.</li>
                </ul>
              </div>
            </section>
            <div className="remline" />
            <section class="steps">
              <div class="inimage">
                <Image src={image6} alt="image" />
              </div>
              <div>
                <ul>
                  <li>1 tbsp Lemon Juice</li>
                  <li>1 tbsp Tahini</li>
                  <li>1 tsp Extra-Virgin Olive Oil</li>
                  <li>⅛ tsp Kosher Salt</li>
                  <li>⅛ tsp Ground Pepper</li>
                </ul>
              </div>
            </section>
            <div className="remline" />
            <section class="steps1">
              <div class="inimage">
                <center>
                  <Image src={Mask3} alt="image" />
                </center>
              </div>
              <br />
              <div>
                <ol>
                  <li>
                    Slice beets by cutting into thin rounds, then slice rounds
                    into matchsticks.
                  </li>
                  <li>
                    Time-saving option: Grate beets on the largest holes of a
                    box grater.
                  </li>
                </ol>
              </div>
            </section>
          </section>
        </section>

        <section class="notesection">
          <div class="note">
            <div>
              <Image src={image5} alt="image" />
            </div>
            <div class="notetext">
              <ul>
                <li>Use fresh ingredients for the best taste.</li>
                <li>Experiment with seasoning for added flavor.</li>
              </ul>
            </div>
          </div>
        </section>
      </section>
      {/* <!--5th remedies--> */}
      <section id="main4">
        {/* <!-- Section for Remedies Header --> */}
        <section class="Remediesheaderheader">
          <div class="split">
            <div class="split1">
              <h2>Cauliflower Chips</h2>
            </div>
            <div class="split2">
              <Image src={remimage5} alt="image" />
            </div>
          </div>
        </section>

        <section class="Ingredients">
          {/* <!-- Section for Ingredients --> */}
          <section class="ingredients1">
            <div class="firsthead">Prepare the Cauliflower Chips:</div>
            <div class="secondhead">
              <div>
                <h3>Combine the following ingredients in a bowl:</h3>
                <ul>
                  <li>2 cups riced cauliflower (12 ounces; see Tip)</li>
                  <li>1 ⅓ cups finely grated Parmesan cheese</li>
                  <li>½ teaspoon dried Italian seasoning</li>
                  <li>½ teaspoon ground pepper</li>
                  <li>¼ teaspoon salt</li>
                </ul>
              </div>
              <div>
                <h3>Direction</h3>
                <ul>
                  <li>
                    Position racks in top and bottom third of oven; preheat to
                    375°F. (Alternatively, see Air-Fryer Version below.) Line 2
                    large rimmed baking sheets with parchment paper; coat with
                    cooking spray.
                  </li>
                  <li>
                    Place cauliflower in a large microwave-safe bowl. Microwave
                    on High, uncovered and stirring halfway through, until
                    tender, about 2 minutes. Place the cauliflower in a clean
                    kitchen towel (or paper towels); squeeze out as much liquid
                    as possible. Place the cauliflower in a medium bowl; add
                    Parmesan, Italian seasoning, pepper and salt; stir until
                    combined.
                  </li>
                  <li>
                    Using a leveled tablespoon, portion mounds of cauliflower
                    mixture 2 inches apart on the prepared baking sheets. Using
                    a lightly greased bottom of a measuring cup or glass, press
                    each portion into a circle about 1/8 inch thick.
                  </li>
                  <li>
                    Bake both pans, rotating them halfway through, until the
                    chips are golden brown and crisp, about 20 minutes. Transfer
                    to a paper-towel-lined plate; let cool completely, about 20
                    minutes.
                  </li>
                </ul>
              </div>
              <div>
                <h3>Nutrition Profile</h3>
                <ul>
                  <li>Low-Carb </li>
                  <li> Nut-Free Soy-Free</li>
                  <li>Vegetarian Egg-Free</li>
                  <li>Gluten-Free</li>
                </ul>
              </div>
            </div>
          </section>

          {/* <!-- Section for Remedies Information --> */}
          <section class="remediesinformation">
            <section class="steps">
              <div class="inimage">
                <Image src={Maskgroup} alt="image" />
              </div>
              <div>
                <ul>
                  <li>Packed with fiber.</li>
                  <li>Rich in monounsaturated fats.</li>
                  <li>Helps fight inflammation.</li>
                </ul>
              </div>
            </section>
            <div className="remline" />
            <section class="steps">
              <div class="inimage">
                <Image src={Mask1} alt="image" />
              </div>
              <div>
                <ul>
                  <li>Anti-inflammation phytochemicals.</li>
                  <li>Adds health benefits to the wrap.</li>
                </ul>
              </div>
            </section>
            <div className="remline" />
            <section class="steps">
              <div class="inimage">
                <Image src={Mask2} alt="image" />
              </div>
              <div>
                <ul>
                  <li>Adds brightness to the wraps.</li>
                  <li>Imparts a nutty flavor.</li>
                </ul>
              </div>
            </section>
            <div className="remline" />
            <section class="steps">
              <div class="inimage">
                <Image src={image6} alt="image" />
              </div>
              <div>
                <ul>
                  <li>1 tbsp Lemon Juice</li>
                  <li>1 tbsp Tahini</li>
                  <li>1 tsp Extra-Virgin Olive Oil</li>
                  <li>⅛ tsp Kosher Salt</li>
                  <li>⅛ tsp Ground Pepper</li>
                </ul>
              </div>
            </section>
            <div className="remline" />
            <section class="steps1">
              <div class="inimage">
                <center>
                  <Image src={Mask3} alt="image" />
                </center>
              </div>
              <br />
              <div>
                <ol>
                  <li>
                    Slice beets by cutting into thin rounds, then slice rounds
                    into matchsticks.
                  </li>
                  <li>
                    Time-saving option: Grate beets on the largest holes of a
                    box grater.
                  </li>
                </ol>
              </div>
            </section>
          </section>
        </section>

        <section class="notesection">
          <div class="note">
            <div>
              <Image src={image5} alt="image" />
            </div>
            <div class="notetext">
              <ul>
                <li>Use fresh ingredients for the best taste.</li>
                <li>Experiment with seasoning for added flavor.</li>
              </ul>
            </div>
          </div>
        </section>
      </section>{" "}
    </div>
  );
};

export default page;
