import {
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

const remedies_content = [
  {
    image: remimage1,
    name: "Anti-inflammatory Beet & Avocado Wrap!",
    firstheading: "Prepare the Tahini-Lemon Mixture:",
    ingredients: [
      "1 tbsp lemon juice",
      "1 tbsp tahini",
      "1 tsp olive oil",
      "⅛ tsp salt",
      "⅛ tsp ground pepper",
    ],
    directions: [
      `Cut beets into thin rounds then Slice the rounds into matchsticks.`,
      `Assemble the Wrap:Spread 1 ½ tbsp hummus evenly onto a whole-wheat tortilla.Place 2 leaves of butter lettuce on top of the hummus.Add the following ingredients on top of the lettuce,Julienned red beets,½ medium sliced avocado.`,
      `Drizzle with Tahini-Lemon Mixture: Drizzle the tahini-lemon mixture over the ingredients.`,
      `Wrap and Serve:Carefully fold and roll the tortilla to form a wrap.,Serve immediately and enjoy!.`,
    ],
    nutrition: [
      "Carbohydrates: 30-40 grams",
      "Protein: 5-10 grams",
      "Dietary Fiber: 8-12 grams",
      "Vitamins and Minerals: High in vitamins and minerals, particularly vitamin A, vitamin C, potassium, and folate from the beets and avocado.",
    ],
  },
  {
    image: remimage2,
    name: "Vegan Smoothie Bowl",
    firstheading: "Prepare the Vegan Smoothie Bowl:",
    ingredients: [
      "1 large banana",
      "cup frozen mixed berries",
      "½ cup unsweetened soymilk or other unsweetened non-dairy milk",
      "¼ cup pineapple chunks",
      "½ kiwi, sliced",
      "1 tablespoon sliced almonds, toasted if desired",
      "1 tablespoon sliced almonds, toasted if desired",
      "1 teaspoon chia seeds",
    ],
    directions: [
      "Combine banana, berries and soymilk (or almond milk) in a blender. Blend until smooth",
      "Pour the smoothie into a bowl and top with pineapple, kiwi, almonds, coconut and chia seeds.",
    ],
    nutrition: [
      "High-Calcium Bone-Health",
      "Dairy-Free Healthy Aging",
      "Low-Sodium High-Blood Pressure",
      "High-Fiber Heart-Healthy",
      "Vegan Egg-Free",
      "Gluten-Free, Low-Calorie",
    ],
  },
  {
    image: remimage3,
    name: "Chickpea Salad Sandwich",
    firstheading: "Prepare the Chickpea Salad Sandwich:",
    ingredients: [
      "2 (15.5 ounce) cans no-salt-added chickpeas, rinsed",
      "6 tablespoons extra-virgin olive oil",
      "3 tablespoons lemon juice",
      "2 teaspoons Dijon mustard",
      "½ teaspoon garlic powder",
      "½ cup finely chopped celery",
      "¼ cup finely chopped fresh dill",
      "⅛ teaspoon salt",
      "⅛ teaspoon ground pepper",
      "8 slices whole-grain bread, toasted",
      "4 green lettuce leaves",
      "4 thin slices red onion",
      "4 tomato slices",
    ],
    directions: [
      "Combine chickpeas, oil, lemon juice, mustard and garlic powder in a large bowl. Using a fork or potato masher, crush the chickpeas until most are mashed but some are still whole. Stir in celery, dill, salt and pepper.",
      "Spread 1 tablespoon mayonnaise on 1 side of each of 4 slices of bread. Top evenly with lettuce, onion, tomato and chickpea mixture. Top with the remaining 4 slices of bread.",
    ],
    nutrition: [
      "Nut-Free",
      "Healthy Pregnancy High-Fiber",
      "Vegan Vegetarian High-Protein Egg-Free",
      "Dairy-Free",
    ],
  },
  {
    image: remimage4,
    name: "Loaded Black Bean Dip",
    firstheading: "Prepare the Loaded Black Bean Dip:",
    ingredients: [
      "1 (15 ounce) can reduced-sodium refried black beans",
      "1 tablespoon lime juice",
      "1 clove garlic, grated",
      "½ teaspoon chili powder",
      "½ teaspoon ground cumin",
      "⅛ teaspoon salt",
      "1 medium avocado, diced",
      "½ cup finely chopped tomato",
      "¼ cup finely chopped red onion",
      "¼ cup crumbled cotija cheese or queso fresco",
      "2 tablespoons diced pickled jalapeño",
      "2 tablespoons chopped fresh cilantro",
    ],
    directions: [
      "Combine beans, lime juice, garlic, chili powder, cumin and salt in a shallow bowl. Microwave on High until heated through, about 1 minute. Spread the mixture into an even layer and top with avocado, tomato, onion, cheese, pickled jalapeño and cilantro.",
    ],
    nutrition: ["Low-Fat", "Low-Calorie", "Gluten-Free"],
  },
  {
    image: remimage5,
    name: "Cauliflower Chips",
    firstheading: "Prepare the Cauliflower Chips:",
    ingredients: [
      "2 cups riced cauliflower (12 ounces; see Tip)",
      "1 ⅓ cups finely grated Parmesan cheese",
      "½ teaspoon dried Italian seasoning",
      "½ teaspoon ground pepper",
      "¼ teaspoon salt",
    ],
    directions: [
      "Position racks in top and bottom third of oven; preheat to 375°F. (Alternatively, see Air-Fryer Version below.) Line 2 large rimmed baking sheets with parchment paper; coat with cooking spray.",
      "Place cauliflower in a large microwave-safe bowl. Microwave on High, uncovered and stirring halfway through, until tender, about 2 minutes. Place the cauliflower in a clean kitchen towel (or paper towels); squeeze out as much liquid as possible. Place the cauliflower in a medium bowl; add Parmesan, Italian seasoning, pepper and salt; stir until combined.",
      "Using a leveled tablespoon, portion mounds of cauliflower mixture 2 inches apart on the prepared baking sheets. Using a lightly greased bottom of a measuring cup or glass, press each portion into a circle about 1/8 inch thick.",
      "Bake both pans, rotating them halfway through, until the chips are golden brown and crisp, about 20 minutes. Transfer to a paper-towel-lined plate; let cool completely, about 20 minutes.",
    ],
    nutrition: [
      "Low-Carb",
      "Nut-Free Soy-Free",
      "Vegetarian Egg-Free",
      "Gluten-Free",
    ],
  },
];

const remediesInformation = [
  {
    image: Maskgroup,
    list: [
      "Packed with fiber.",
      "Rich in monounsaturated fats.",
      "Helps fight inflammation.",
    ],
    type: "ul",
  },
  {
    image: Mask1,
    list: [
      "Anti-inflammation phytochemicals.",
      "Adds health benefits to the wrap.",
    ],
    type: "ul",
  },
  {
    image: Mask2,
    list: ["Adds brightness to the wraps.", "Imparts a nutty flavor."],
    type: "ul",
  },
  {
    image: image6,
    list: [
      "1 tbsp Lemon Juice",
      "1 tbsp Tahini",
      "1 tsp Extra-Virgin Olive Oil",
      "⅛ tsp Kosher Salt",
      "⅛ tsp Ground Pepper",
    ],
    type: "ul",
  },
  {
    image: Mask3,
    list: [
      "Slice beets by cutting into thin rounds, then slice rounds into matchsticks.",
      "Time-saving option: Grate beets on the largest holes of a box grater.",
    ],
    type: "ol",
  },
];

const page = () => {
  return (
    <div className="mb-5">
      <section className="Remediesimage">
        <Image src={image14} alt="image" />
      </section>
      <h1 className="remediesheading">HEALTHY FOODS</h1>
      <section id="main-section">
        {" "}
        {remedies_content.map((remedy, index) => (
          <>
            <section key={index} id="main">
              <section className="Remediesheaderheader">
                <div className="split">
                  <div className="split1">
                    <h2>{remedy.name}</h2>
                  </div>
                  <div className="split2">
                    <Image
                      src={remedy.image}
                      alt="image"
                      width={500}
                      height={500}
                    />
                  </div>
                </div>
              </section>

              <section className="Ingredients">
                <section className="ingredients1">
                  <div className="firsthead">{remedy.firstheading}</div>
                  <div className="secondhead">
                    <div>
                      <h3>Combine the following ingredients in a bowl:</h3>
                      <ul className="ingredients-list">
                        {remedy.ingredients.map((ingredient, i) => (
                          <li key={i}>{ingredient}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3>Direction</h3>
                      <ul>
                        {remedy.directions.map((direction, i) => (
                          <li key={i}>{direction}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3>Nutrition Profile</h3>
                      <ul>
                        {remedy.nutrition.map((nutrition, i) => (
                          <li key={i}>{nutrition}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>
                {/* Remedies Information Section */}
                <section className="remediesinformation">
                  {remediesInformation.map((info, j) => (
                    <>
                      <section key={j} className="steps">
                        <div className="inimage">
                          <Image src={info.image} alt="image" />
                        </div>
                        <div className="stepin">
                          {info.type === "ul" ? (
                            <ul>
                              {info.list.map((item, k) => (
                                <li key={k}>{item}</li>
                              ))}
                            </ul>
                          ) : (
                            <ol>
                              {info.list.map((item, k) => (
                                <li key={k}>{item}</li>
                              ))}
                            </ol>
                          )}
                        </div>
                      </section>
                      <div className="remline" />
                    </>
                  ))}
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
          </>
        ))}
      </section>
    </div>
  );
};

export default page;
