import Phaser from 'phaser';

export default class GameOver extends Phaser.Scene {
  constructor() {
    super('game-over');
  }

  preload() {
    this.load.audio('gameOver', './assets/sfx/spaceTrash5.ogg');
  }

  create() {
    const { width } = this.scale;
    const { height } = this.scale;

    this.add.text(width * 0.5, height * 0.5, 'GAME OVER', { fontSize: 48 }).setOrigin(0.5);

    this.input.keyboard.once('keydown_SPACE', () => {
      this.scene.start('game');
    });

    this.sound.play('gameOver');
  }
}
