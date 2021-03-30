input.onButtonPressed(Button.A, function () {
    if (PaddleA.get(LedSpriteProperty.X) > 0) {
        PaddleA.change(LedSpriteProperty.X, -1)
        paddleb.change(LedSpriteProperty.X, -1)
    }
})
input.onButtonPressed(Button.B, function () {
    if (PaddleA.get(LedSpriteProperty.X) < 3) {
        PaddleA.change(LedSpriteProperty.X, 1)
        paddleb.change(LedSpriteProperty.X, 1)
    }
})
let paddleb: game.LedSprite = null
let PaddleA: game.LedSprite = null
game.setScore(0)
PaddleA = game.createSprite(2, 4)
paddleb = game.createSprite(3, 4)
let ball = game.createSprite(randint(0, 4), 0)
let directy = 1
let directx = randint(-1, 1)
basic.pause(500)
basic.forever(function () {
    ball.change(LedSpriteProperty.X, directx)
    ball.change(LedSpriteProperty.Y, directy)
    if (ball.isTouching(PaddleA) || ball.isTouching(paddleb)) {
        game.addScore(2)
        ball.change(LedSpriteProperty.X, directx * -1)
        ball.change(LedSpriteProperty.Y, -1)
        directy = -1
        directx = randint(-1, 1)
    } else {
        if (ball.get(LedSpriteProperty.Y) <= 0) {
            directy = 1
            directx = randint(-1, 1)
        } else if (ball.get(LedSpriteProperty.Y) >= 4) {
            basic.pause(1000)
            game.gameOver()
        }
        if (ball.get(LedSpriteProperty.X) <= 0) {
            directx = 1
        } else if (ball.get(LedSpriteProperty.X) >= 4) {
            directx = -1
        }
        basic.pause(200)
    }
})
