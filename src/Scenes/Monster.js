class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        
        this.aKey = null;
        this.dKey = null;
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenF.png");
        my.sprite.rightArm = this.add.sprite(this.bodyX+100, this.bodyY, "monsterParts", "arm_greenD.png");
        my.sprite.rightArm.angle = -10;
        my.sprite.leftArm = this.add.sprite(this.bodyX-100, this.bodyY, "monsterParts", "arm_greenD.png");
        my.sprite.leftArm.flipX = true;
        my.sprite.leftArm.angle = 10;

        my.sprite.rightArm2 = this.add.sprite(this.bodyX+150, this.bodyY-40, "monsterParts", "arm_greenD.png");
        my.sprite.rightArm2.angle = -45;
        my.sprite.leftArm2 = this.add.sprite(this.bodyX-150, this.bodyY-40, "monsterParts", "arm_greenD.png");
        my.sprite.leftArm2.flipX = true;
        my.sprite.leftArm2.angle = 45;

        my.sprite.rightLeg = this.add.sprite(this.bodyX+70, this.bodyY+150, "monsterParts", "leg_greenC.png");
        my.sprite.leftLeg = this.add.sprite(this.bodyX-70, this.bodyY+150, "monsterParts", "leg_greenC.png");
        my.sprite.leftLeg.flipX = true;

        my.sprite.eye = this.add.sprite(this.bodyX, this.bodyY-50, "monsterParts", "eye_psycho_dark.png");

        my.sprite.mouth = this.add.sprite(this.bodyX, this.bodyY+20, "monsterParts", "mouthH.png");
        my.sprite.fangs = this.add.sprite(this.bodyX, this.bodyY+20, "monsterParts", "mouthF.png");
        my.sprite.fangs.visible = false;

        my.sprite.horn1 = this.add.sprite(this.bodyX+40, this.bodyY-100, "monsterParts", "detail_green_horn_large.png");
        my.sprite.horn2 = this.add.sprite(this.bodyX-40, this.bodyY-100, "monsterParts", "detail_green_horn_large.png");
        my.sprite.horn2.flipX = true;
        my.sprite.horn3 = this.add.sprite(this.bodyX, this.bodyY-120, "monsterParts", "snot_large.png");

        this.fKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        this.sKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);


        //Event input: show fangs
        this.input.keyboard.on('keydown-F', (event) => {
            my.sprite.mouth.visible = false;
            my.sprite.fangs.visible = true;
        });
        
        //Event input: regular smile
        this.input.keyboard.on('keydown-S', (event) => {
            my.sprite.fangs.visible = false;
            my.sprite.mouth.visible = true;
        });

        this.aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability
        
        if(this.aKey.isDown)
        {
            console.log("pressing a");
            for (let s in my.sprite) {
                my.sprite[s].x -= 2;
            }
        }
        else if(this.dKey.isDown)
        {
            console.log("pressing d");
            for (let s in my.sprite) {
                my.sprite[s].x += 2;
            }
        }
    }

}