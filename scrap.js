class Timer {
    constructor(root) {
        root.innerHTML = Timer.getHTML();

        this.el = {
            minutes: root.querySelector('.timer__part--minutes'),
            seconds: root.querySelector('.timer__part--seconds'),
            control: root.querySelector('.timer__btn--control'),
            fiveMin: root.querySelector('.timer__btn--fiveMin'),
            tenMin: root.querySelector('.timer__btn--tenMin'),
            twentyMin: root.querySelector('.timer__btn--twentyMin'),
            userSetMin: root.querySelector('.timer__btn--userSetMin'),
        };

        this.interval = null;
        this.remainingSeconds = 0;

        // The timer's start and stop button fxn
        this.el.control.addEventListener('click', () => {
            this.interval === null ? this.start() : this.stop();

            // if (this.interval === null) {
            //     this.start()
            // } else {
            //     this.stop()
            // }
        });

        // The timer's user input fxn
        this.el.userSetMin.addEventListener('click', () => {
            const inputMinutes = prompt(
                `Sorry you're feeling off 😔 How many minutes do you want to journal?`
            );

            if (inputMinutes < 60) {
                this.stop();
                this.remainingSeconds = inputMinutes * 60;
                this.updateInterfaceTime();
            }
        });

        // Preset Minutes buttons fxn
        this.el.fiveMin.addEventListener('click', () => {
            this.remainingSeconds = 5 * 60;
            this.updateInterfaceTime();
        });
        this.el.tenMin.addEventListener('click', () => {
            this.remainingSeconds = 10 * 60;
            this.updateInterfaceTime();
        });
        this.el.twentyMin.addEventListener('click', () => {
            this.remainingSeconds = 20 * 60;
            this.updateInterfaceTime();
        });
    }

    // Update Interface Time
    updateInterfaceTime() {
        const minutes = Math.floor(this.remainingSeconds / 60);
        const seconds = this.remainingSeconds % 60;

        this.el.minutes.textContent = minutes.toString().padStart(2, '0');
        this.el.seconds.textContent = seconds.toString().padStart(2, '0');
    }

    updateInterfaceControls() {
        if (this.interval === null) {
            this.el.control.innerHTML = `<span class="material-icons">play_arrow</span>`;
            this.el.control.classList.add('timer__btn--start');
            this.el.control.classList.remove('timer__btn--stop');
        } else {
            this.el.control.innerHTML =
                '<span class="material-icons">pause</span>';
            this.el.control.classList.add(`timer__btn--stop`);
            this.el.control.classList.remove(`timer__btn--start`);
        }
    }

    start() {
        if (this.remainingSeconds === 0) return;

        this.interval = setInterval(() => {
            this.remainingSeconds--;
            this.updateInterfaceTime();

            if (this.remainingSeconds === 0) this.stop();
        }, 1000);

        this.updateInterfaceControls();
        updateInterfaceTimer;
    }

    stop() {
        clearInterval(this.interval);
        this.interval = null;
        this.updateInterfaceControls();
    }

    static getHTML() {
        return `
        
        div
        
        `;
    }
}

new Timer(document.querySelector('.timer'));
