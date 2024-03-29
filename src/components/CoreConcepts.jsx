import { CORE_CONCEPTS } from "../data.js";
import CoreConcept from "./CoreConcept.jsx";
import Section from "./section.jsx";

export default function CoreConcepts() {
  return (
    <Section title="Core Concepts" id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept key={conceptItem.title} {...conceptItem} />
        ))}

        {/* <CoreConcept
    image={CORE_CONCEPTS[0].image}
    title={CORE_CONCEPTS[0].title}
    description={CORE_CONCEPTS[0].description}
  />
  <CoreConcept {...CORE_CONCEPTS[1]} />
  <CoreConcept {...CORE_CONCEPTS[2]} />
  <CoreConcept {...CORE_CONCEPTS[3]} /> */}
      </ul>
    </Section>
  );
}
