class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	}

	addClock(time, callback) {
		if (time == undefined || callback == undefined) {
			throw new Error('Отсутсвуют обязательные аргументы');
		}

		const sameTime = this.alarmCollection.find(item => item.time === time);
		if (sameTime) {
			console.warn('Уже присутствует звонок на это время');
		}

		this.alarmCollection.push({
			callback: callback,
			time: time,
			canCall: true
		});
	}

	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter(item => {
			return item.time !== time;
		});
	}

	getCurrentFormattedTime() {
		const today = new Date();
		let hours = today.getHours();
		let minutes = today.getMinutes();

		if (hours < 10) {
			hours = '0' + hours;
		}
		if (minutes < 10) {
			minutes = '0' + minutes;
		}
		return `${hours}:${minutes}`;
	}

	start() {
		if (this.intervalId != undefined) {
			return;
		} else {
			this.intervalId = setInterval(() => {
				this.alarmCollection.forEach((item) => {
					if ((this.getCurrentFormattedTime() == item.time) && item.canCall == true) {
						item.canCall = false;
						item.callback();
					}
				})
			}, 1000)
		}
	}

	stop() {
		clearInterval();
		this.intervalId = null;
	}

	resetAllCalls() {
		this.alarmCollection.forEach(item => {
			item.canCall = true;
		});
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}