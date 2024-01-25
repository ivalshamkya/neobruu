import { Card } from "@/components/neobruu/Card";
import Button from "../neobruu/Button";

export default function CardExample() {
  return (
    <div className="flex gap-3">
      <Card rounded="none">
        <Card.Header imageUrl="https://picsum.photos/200.webp" />
        <Card.Body>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium rem cum nisi molestiae voluptatibus nemo eaque doloremque tempora incidunt laborum! Obcaecati ipsum ducimus ad aliquid cum delectus adipisci ratione dolores.
        </Card.Body>
        <Card.Footer>
          <Button>Read More</Button>
        </Card.Footer>
      </Card>

    </div>
  )
}