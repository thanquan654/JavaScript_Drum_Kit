const crash = document.querySelector(".crash")
const hihat = document.querySelector(".hi-hat")
const btns = [...document.querySelectorAll(".drum-container .btn")]

const app = {
    audios: [...document.querySelectorAll(".list-audio>audio")],

    // Methods
    playSound:function (key) {
        const playAudio = this.audios.filter((audio) => {
            return audio.dataset.key === `${key}`
        })
        playAudio[0].play()
    },
    setAnimation: function (key) {
        console.log(key)
        btns.filter((btn) => {
            return btn.accessKey === `${key}`
        }).style.animation = "scale .4s linear"
        switch (key) {
            case "e" || "r":
                crash.style.animation = `crash-shake .15s linear`
                setTimeout(() => {
                    crash.style.animation = "unset"
                }, 1200)
                break
            case "i" || "k":
                hihat.style.animation = `hi-hat-down .15s linear`
                setTimeout(() => {
                hihat.style.animation = `unset`
                    
                }, 1200)
                break
            default:
                break;
        }
    },
    handleEvent: function () {
        // Lắng nghe sự kiện có nút được ấn
        window.addEventListener("keydown", (e) => {
            this.playSound(e.key);
            this.setAnimation(e.key)
            
        });
        
    },
    start: function() {
        this.handleEvent()
    } 
}

app.start()