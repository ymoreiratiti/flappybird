import { gameConfig } from './gameConfig';
import { Background, Ground, Pipe, Player, Score } from './object';

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
  active: false,
  visible: false,
  key: 'Game',
};

export class GameScene extends Phaser.Scene {
  private ground = new Ground();
  private background = new Background();
  private player = new Player();
  public cursors: Phaser.Types.Input.Keyboard.CursorKeys;
  public pipe = new Pipe();
  public gameOver = false;
  private score = new Score();

  constructor() {
    super(sceneConfig);
  }

  public preload (): void {
    this.load.image('background', 'assets/background.png');
    // this.load.image('logo', 'assets/logo.png');
    this.load.spritesheet('bird', 'assets/bird.png', { frameWidth: 92, frameHeight: 64 });
    this.load.spritesheet('ground', 'assets/ground.png', { frameWidth: 1, frameHeight: 128 });
    this.load.image('pipe', 'assets/pipe.png');
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
    this.pipe.create(this);
    this.ground.create(this);
    this.player.create(this);
    this.score.create(this);

    this.physics.add.collider(this.player.player, this.ground.ground, () => {
      this.gameOver = true;
    });
    this.physics.add.collider(this.player.player, this.pipe.pipe, () => {
      this.gameOver = true;
    });
  }

  /**
   *
   */
  public update (): void {
    this.player.update(this);
    this.pipe.update(this);
    this.ground.update(this);
  }
}
