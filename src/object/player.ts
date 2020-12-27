import { GameScene } from '../gameScene';

const stop = 10;

export class Player {
  public player: Phaser.Physics.Arcade.Sprite;

  /**
   *
   * @param scene
   */
  public create (scene: GameScene): void {
    this.player = scene.physics.add.sprite(50, 100, 'bird');
    this.player.setCollideWorldBounds(true);
    this.player.setScale(0.5);
    this.player.anims.create({
      key: 'jump',
      frames: scene.anims.generateFrameNumbers('bird', { start: 0, end: 2 }),
      frameRate: 10,
      duration: 24,
    });
  }

  /**
   *
   * @param scene
   */
  public update (scene: GameScene): void {
    if (scene.gameOver) {
      return undefined;
    }

    if (this.player.angle <= 25) {
      this.player.angle += 2;
    }

    if (scene.cursors.space.isDown) {
      this.player.setVelocityY(-500);
      this.player.anims.play('jump', true);

      this.player.setAngle(-25);
    }
  }
}
