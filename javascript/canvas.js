class HangmanCanvas {
    constructor(secretWord) {
        this.canvas = document.getElementById('hangman')
        this.context = this.canvas.getContext('2d');
        // ... your code goes here
        this.secretWord = secretWord
        this.indexFalso = 800
    }

    createBoard() {
        // ... your code goes here
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.drawLines()
    }

    drawLines() {
        // ... your code goes here
        let numberOfLines = this.secretWord.length
        this.context.strokeStyle = 'black'
        this.context.beginPath()
        for (let i = 0; i < numberOfLines; i++) {
            this.context.moveTo(60 + (i + 1) * 40, 760)
            this.context.lineTo(60 + (i + 1) * 40 + 35, 760)
        }
        this.context.stroke()
        this.context.closePath()
    }

    writeCorrectLetter(index) {
        // ... your code goes here
        let secretLetter = this.secretWord[index]
        this.context.font = '30px Arial'
        this.context.fillText(secretLetter, 60 + (index + 1) * 40, 725)
    }

    writeWrongLetter(letter, errorsLeft) {
        // ... your code goes here
        this.context.font = '30px Arial'
        this.context.fillText(letter, this.indexFalso, 300)
        this.indexFalso += 40
        errorsLeft--
    }

    drawHangman(errorsLeft) {
        // ... your code goes here
        this.context.strokeStyle = 'black'

        const drawTriangle = () => {
            this.context.beginPath()
            this.context.moveTo(10, 760)
            this.context.lineTo(70, 760)
            this.context.lineTo(40, 730)
            this.context.lineTo(10, 760)
            this.context.stroke()
            this.context.closePath()
        }

        const drawPole = () => {
            this.context.beginPath()
            this.context.moveTo(40, 730)
            this.context.lineTo(40, 50)
            this.context.stroke()
            this.context.closePath()
        }

        const drawRowbar = () => {
            this.context.beginPath()
            this.context.moveTo(40, 50)
            this.context.lineTo(500, 50)
            this.context.stroke()
            this.context.closePath()
        }

        const drawRope = () => {
            this.context.beginPath()
            this.context.moveTo(500, 50)
            this.context.lineTo(500, 100)
            this.context.stroke()
            this.context.closePath()
        }

        const drawHead = () => {
            this.context.beginPath()
            this.context.arc(500, 130, 30, 0, 2 * Math.PI)
            this.context.stroke()
            this.context.closePath()
        }

        const drawBody = () => {
            this.context.beginPath()
            this.context.moveTo(500, 160)
            this.context.lineTo(500, 400)
            this.context.stroke()
            this.context.closePath()
        }

        const drawRightLeg = () => {
            this.context.beginPath()
            this.context.moveTo(500, 400)
            this.context.lineTo(550, 450)
            this.context.stroke()
            this.context.closePath()
        }

        const drawLeftLeg = () => {
            this.context.beginPath()
            this.context.moveTo(500, 400)
            this.context.lineTo(450, 450)
            this.context.stroke()
            this.context.closePath()
        }

        const drawRightArm = () => {
            this.context.beginPath()
            this.context.moveTo(500, 260)
            this.context.lineTo(520, 280)
            this.context.stroke()
            this.context.closePath()
        }

        const drawLeftArm = () => {
            this.context.beginPath()
            this.context.moveTo(500, 260)
            this.context.lineTo(480, 280)
            this.context.stroke()
            this.context.closePath()
        }

        switch (errorsLeft) {
            case 9:
                drawTriangle()
                break
            case 8:
                drawPole()
                break
            case 7:
                drawRowbar()
                break
            case 6:
                drawRope()
                break
            case 5:
                drawHead()
                break
            case 4:
                drawBody()
                break
            case 3:
                drawRightLeg()
                break
            case 2:
                drawLeftLeg()
                break
            case 1:
                drawLeftArm()
                break
            case 0:
                drawRightArm()
                this.gameOver()
                break
            default:
                return "Switch default reached"
        }
    }


    gameOver() {
        // ... your code goes here ok
    }

    winner() {
        // ... your code goes here
    }
}