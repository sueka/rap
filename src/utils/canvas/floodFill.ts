import { shouldBePresent } from '~/asserters/commonAsserters'
import delay from '~/delay'
import Color from '~/domain/vo/Color'

export /* for testing */ function getColor({ x, y }: Canvas.Point, context: CanvasRenderingContext2D): Color {
  const { data: [red, green, blue, alpha] } = context.getImageData(x, y, 1, 1)

  // NOTE: getImageData の仕様上必ず存在する。 cf. https://html.spec.whatwg.org/multipage/canvas.html#dom-context-2d-getimagedata and https://html.spec.whatwg.org/multipage/canvas.html#initialize-an-imagedata-object
  shouldBePresent(red)
  shouldBePresent(green)
  shouldBePresent(blue)
  shouldBePresent(alpha)

  return new Color({
    red,
    green,
    blue,
    alpha,
  })
}

export default async function floodFill(targetPoint: Canvas.Point, width: number, height: number, context: CanvasRenderingContext2D) {
  shouldBePresent(context)

  const queue: Canvas.Point[] = [] // TODO
  const targetColor = getColor(targetPoint, context)

  queue.push(targetPoint)

  while (queue.length !== 0) {
    const currentPoint = queue.shift()

    shouldBePresent(currentPoint)

    const currentColor = getColor(currentPoint, context)

    if (!targetColor.equals(currentColor)) {
      continue
    }

    context.fillRect(currentPoint.x, currentPoint.y, 1, 1)

    if (currentPoint.x > 0) {
      queue.push({ x: currentPoint.x - 1, y: currentPoint.y })
    }

    if (currentPoint.y > 0) {
      queue.push({ x: currentPoint.x, y: currentPoint.y - 1 })
    }

    if (currentPoint.x < width - 1) {
      queue.push({ x: currentPoint.x + 1, y: currentPoint.y })
    }

    if (currentPoint.y < height - 1) {
      queue.push({ x: currentPoint.x, y: currentPoint.y + 1 })
    }

    await delay(30)
  }
}
