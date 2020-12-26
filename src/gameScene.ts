import { Ground } from './object/ground';

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
  active: false,
  visible: false,
  key: 'Game',
};

export class GameScene extends Phaser.Scene {
  private ground = new Ground();

  constructor() {
    super(sceneConfig);
  }

  public preload (): void {
    console.log('PRELOAD');
    this.load.image('background', 'assets/background.png');
    // this.load.image('logo', 'assets/logo.png');
    // this.load.image('bird', 'assets/bird.png');
    this.load.image('ground', 'assets/ground.png');
    // this.load.image('pipe', 'assets/pipe.png');
    // this.load.image('restart', 'assets/restart.png');
    // this.load.image('score', 'assets/score.png');
  }

  /**
   *
   */
  public create (): void {
    console.log('CREATE');

    this.ground.create(this);

    // this.setupGround();
  }

  /**
   *
   */
  public update (): void {
    this.ground.update();
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
