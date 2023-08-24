class Timer {
    constructor(root) {
        root.innerHTML = Timer.getHTML();

        this.el = {
            minutes: root.querySelector('.timer__part--minutes'),
            seconds: root.querySelector('.timer__part--seconds'),
            control: root.querySelector('.timer__btn--control'),
            fiveMin: root.querySelector('.timer__btn--5min'),
            tenMin: root.querySelector('.timer__btn--10min'),
            twentyMin: root.querySelector('.timer__btn--20min'),
            userSetMin: root.querySelector('.timer__btn--userSetMin'),
        };

        this.interval = null;
        this.remainingSeconds = 0;

        // console.log(this.el)

        this.el.control.addEventListener('click', () => {
            if (this.interval === null) {
                this.start();
            } else {
                this.stop();
            }
        });

        this.el.userSetMin.addEventListener('click', () => {
            const inputMinutes = prompt(
                'One of those days? 😔 How many minutes do you need?'
            );

            if (inputMinutes <= 60) {
                this.stop();
                this.remainingSeconds = inputMinutes * 60;
                this.updateInterfaceTime();
            }
        });

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
            this.el.control.innerHTML = `<span class="material-icons">pause</span>`;
            this.el.control.classList.add('timer__btn--stop');
            this.el.control.classList.remove('timer__btn--start');
        }
    }

    start() {
        if (this.remainingSeconds === 0) return;

        this.interval = setInterval(() => {
            this.remainingSeconds--;
            this.updateInterfaceTime();

            if (this.remainingSeconds === 0) {
                this.stop();
            }
        }, 1000);

        this.updateInterfaceControls();
    }

    stop() {
        clearInterval(this.interval);

        this.interval = null;

        this.updateInterfaceControls();
    }

    static getHTML() {
        return `
      <div class="timer__buttons--cntr">
        <button type="button" class="timer__btn timer__btn--5min">5min</button>
        <button type="button" class="timer__btn timer__btn--10min">10min</button>
        <button type="button" class="timer__btn timer__btn--20min">20min</button>
        <button type="button" class="timer__btn timer__btn--userSetMin">😔</button>
      </div>

      <div class="timer__display--cntr">
        <div class="timer__part-cntr">
            <span class="timer__part timer__part--minutes">00</span>
            <span class="timer__part">/</span>
            <span class="timer__part timer__part--seconds">00</span>
        </div>

        <button type="button" class="timer__btn timer__btn--control timer__btn--start"><span class="material-icons">play_arrow</span>
        </button>
      </div>
		`;
    }
}

new Timer(document.querySelector('.timer'));

// clear journal entry
function eraseText() {
    console.log('hello');
    document.getElementById('textarea').value = '';
}

function hideTimer() {}
