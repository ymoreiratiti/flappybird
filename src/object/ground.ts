import { gameConfig } from '../gameConfig';

const IMAGE_WIDTH = 37;
export class Ground {
  private ground: Phaser.GameObjects.TileSprite[] = [];

  /**
   *
   * @param scene
   */
  public create (scene: Phaser.Scene): void {
    const Y = Number(gameConfig.height) - Math.ceil(IMAGE_WIDTH / 2);

    for (let X = 0; X <= Math.ceil(Number(gameConfig.width) / IMAGE_WIDTH); X++) {
      this.ground.push(scene.add.tileSprite(X * IMAGE_WIDTH, Y, 0, 0, 'ground'));
    }
  }

  /**
   *
   */
  public update (): void {
    this.ground.forEach((ground) => {
      ground.tilePositionX += 2;
    });
  }
}
