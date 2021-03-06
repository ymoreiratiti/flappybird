import { GameScene } from '../gameScene';
import * as rando from 'random-number-in-range';
import { gameConfig } from '../gameConfig';

const GAP_SPACE = 100;
const PIPE_START_X = 400;
const PIPE_SPACE_BETWEEN = 200;

export class Pipe {
  public pipe: Phaser.Types.Physics.Arcade.ImageWithDynamicBody[] = [];

  /**
   *
   * @param scene
   */
  public create (scene: GameScene): void {
    for (let x = 1; x <= 200; x++) {
      const gap = rando(100, Number(gameConfig.height) - 400);
      const pipeBottom = scene.physics.add
        .image(PIPE_START_X + PIPE_SPACE_BETWEEN * x, gap + GAP_SPACE, 'pipe')
        .setOrigin(0.5, 0);
      const pipeTop = scene.physics.add
        .image(PIPE_START_X + PIPE_SPACE_BETWEEN * x, gap - GAP_SPACE, 'pipe')
        .setOrigin(0.5, 1);

      this.setupPipe(pipeTop, true);
      this.setupPipe(pipeBottom, false);
    }
  }

  /**
   *
   * @param scene
   */
  public update (scene: GameScene): void {
    if (scene.gameOver) {
      this.pipe.forEach((pipe) => {
        pipe.setVelocityX(0);
      });
    }

    const score: number = this.pipe
      .filter((pipe) => pipe.flipY)
      .map((pipe) => pipe.x)
      .filter((X: number) => X <= 0).length;

    scene.score.setScore(score);
  }

  private setupPipe (pipe: Phaser.Types.Physics.Arcade.ImageWithDynamicBody, setFlipY: boolean) {
    pipe.setVelocityX(-150).setScale(0.5).setFlipY(setFlipY).setImmovable(true).body.setAllowGravity(false);
    this.pipe.push(pipe);
  }
}
