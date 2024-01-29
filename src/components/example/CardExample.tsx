import Card from "@/components/neobruu/Card";
import { Button } from "@/components/neobruu/Button";

export default function CardExample() {
  return (
    <div className="flex gap-3">
      <Card rounded="none">
        <Card.Header imageUrl="/aiko.jpeg" />
        <Card.Body>
          <h1 className="text-2xl font-bold mb-2">Aiko 🐈</h1>
          <p className="line-clamp-4">
          Meet the orange cat, a charismatic furball with a coat as vibrant as a summer sunset. This feline fashionista proudly dons a luxurious fur ensemble in various shades of citrus, making every day a catwalk. With eyes that sparkle like the juiciest mandarin, this orange fluff-master struts through life, leaving a trail of paw prints and a lingering scent of sunshine. Known for stealing hearts faster than you can peel an orange, this cat is the ultimate blend of mischief and zest, making it the purrfect companion for anyone in need of a daily dose of Vitamin Cuteness. 🍊😺
          </p>
        </Card.Body>
        <Card.Footer>
          <Button>Read More</Button>
        </Card.Footer>
      </Card>

    </div>
  )
}