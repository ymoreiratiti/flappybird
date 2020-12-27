import { gameConfig } from '../gameConfig';
import { GameScene } from '../gameScene';

const IMAGE_WIDTH = 37;
export class Ground {
  public ground: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody[] = [];

  /**
   *
   * @param scene
   */
  public create (scene: GameScene): void {
    scene.anims.create({
      key: 'ground',
      frames: scene.anims.generateFrameNumbers('ground', { start: 0, end: 36 }),
      frameRate: 200,
      repeat: -1,
    });

    const Y = Number(gameConfig.height) - Math.ceil(IMAGE_WIDTH / 2);

    for (let X = 0; X <= gameConfig.width; X++) {
      const ground = scene.physics.add.sprite(X, Y, 'ground');
      ground.setImmovable(true);
      ground.body.setAllowGravity(false);

      ground.anims.play({ key: 'ground', startFrame: (X + 1) % Number(scene.anims.get('ground').frames.length) }, true);
      this.ground.push(ground);
    }
  }

  public update (scene: GameScene): void {
    if (scene.gameOver) {
      this.ground.forEach((ground) => {
        ground.anims.stop();
      });
    }
  }
}
