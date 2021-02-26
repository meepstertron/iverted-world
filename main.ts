controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
tiles.setTilemap(tilemap`Level1`)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . d d d d d . . . . . 
    . . . . . d d d d d d d . . . . 
    . . . . . d d d d d d d . . . . 
    . . . . . d d d d d d d . . . . 
    . . . . . d d d d d d d . . . . 
    . . . . . d d d d d d d . . . . 
    . . . . . . d d d d d . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
mySprite.ay = 500
scene.cameraFollowSprite(mySprite)
scene.cameraShake(4, 500)
