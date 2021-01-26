class LevelElement extends BaseComponent
{
    constructor(id, width, height, imagePath, x, y, keyDown, keyUp)
    {
        super(width, height, imagePath, x, y, keyDown, keyUp);
        this.id = id;
    }
}

class Wall extends LevelElement
{
    constructor(x, y) {
        super(null, 32, 32, "resources/level/wall.png", x, y);
    }
}

class Console extends LevelElement
{
    constructor(id, x, y, onSucces) {
        super(id, 32, 32, "resources/level/console.png", x, y,(keyPressed) => this.onKeyUp(keyPressed));
        this.hasInteraction = true;
        this.onSucces = onSucces !== undefined ? onSucces : () => {}
    }

    onKeyUp(keyPressed)
    {
        if (keyPressed !== " ") return;

        gameArea.characterIsInteracting = !gameArea.characterIsInteracting;

        if (!gameArea.characterIsInteracting)
        {
            this.image.src = "resources/level/console.png";
            gameArea.informationBox.hide();
            return;
        }

        this.image.src = "resources/level/console-active.png";
        gameArea.informationBox.setContent("<p>Well done! You've disabled the laser!</p><p>Exit with [SPACEBAR]</p>");
        gameArea.informationBox.show();
        this.onSucces();
    }
}

class Laser extends LevelElement
{
    constructor(groupID, x, y) {
        super(groupID, 32, 16, "resources/level/laser.png", x, y);
    }

    update() {
        if (this.enabled)
            super.update();
    }

    static disableGroup(groupId)
    {
        objects.filter(obj => obj.id === groupId).forEach(laser => {
            laser.enabled = false;
        });
    }
}