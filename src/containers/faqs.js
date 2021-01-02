import faqsData from "../fixtures/faqs.json";
import { Accordion } from "../components";

export function FaqsContainer() {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      {faqsData.map(item => (
        <Accordion.Item key={item.key}>
          <Accordion.Header>{item.header}</Accordion.Header>
          <Accordion.Body>
            <span>{item.body}</span>
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}
