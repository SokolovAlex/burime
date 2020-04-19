export class Timer {
    timerId: any;

    constructor(private callback, private delay) {}

    stop() {
        clearInterval(this.timerId);
    }

    start() {
        clearInterval(this.timerId);
        this.timerId = setInterval(this.callback, this.delay);
    }
}
