import { Background, Ground, Player } from './object';

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
  active: false,
  visible: false,
  key: 'Game',
};

export class GameScene extends Phaser.Scene {
  private ground = new Ground();
  private background = new Background();
  public player = new Player();
  public cursors: Phaser.Types.Input.Keyboard.CursorKeys;

  constructor() {
    super(sceneConfig);
  }

  public preload (): void {
    console.log('PRELOAD');
    this.load.image('background', 'assets/background.png');
    // this.load.image('logo', 'assets/logo.png');
    this.load.spritesheet('bird', 'assets/bird.png', { frameWidth: 92, frameHeight: 64 });
    this.load.spritesheet('ground', 'assets/ground.png', { frameWidth: 1, frameHeight: 128 });
    // this.load.image('pipe', 'assets/pipe.png');
    // this.load.image('restart', 'assets/restart.png');
    // this.load.image('score', 'assets/score.png');
  }

  /**
   *
   */
  public create (): void {
    console.log('CREATE');
    this.cursors = this.input.keyboard.createCursorKeys();

    this.background.create(this);
    this.ground.create(this);
    this.player.create(this);

    this.physics.add.collider(this.player.player, this.ground.ground);

    // this.setupGround();
  }

  /**
   *
   */
  public update (): void {
    this.player.update(this);

    // this.ground.tilePositionX++;
    // this.player.setVelocity(0);
    // if (this.cursors.left.isDown) {
    //   this.player.setFlipX(false).setVelocityX(-125);
    //   this.player.anims.play('mario_small_walk', true);
    // }
    // if (this.cursors.right.isDown) {
    //   this.player.setFlipX(true).setVelocityX(125);
    //   this.player.anims.play('mario_small_walk', true);
    // }
    // if (this.cursors.up.isDown) {
    //   this.player.setVelocityY(-200);
    // } else if (this.cursors.down.isDown) {
    //   this.player.setVelocityY(200);
    // }
  }
}
