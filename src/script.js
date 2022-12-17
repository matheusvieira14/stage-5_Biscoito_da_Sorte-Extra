export class Cookie {
    constructor(root) {
        this.root = document.querySelector(root)
        this.containerOne = document.querySelector(".containerOne")
        this.containerTwo = document.querySelector(".containerTwo")
        this.openCookie()
        this.closeCookie()

        this.phrases = [
            "A vida trará coisas boas se tiver paciência.",
            "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
            "Não compense na ira o que lhe falta na razão.",
            "Defeitos e virtudes são apenas dois lados da mesma moeda.",
            "A maior de todas as torres começa no solo.",
            "Não há que ser forte. Há que ser flexível.",
            "Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?",
            "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.",
            "A juventude não é uma época da vida, é um estado de espírito.",
            "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.",
            "Se alguém está tão cansado que não possa te dar udam sorriso, deixa-lhe o teu."
        ]

        this.loadPhrases()
    }
}

export class ViewCookie extends Cookie {
    constructor(root) {
        super(root)
    }

    openCookie() {
        const cookie = this.root.querySelector(".boxOne button");

        cookie.addEventListener("click", () => {
            this.addHide()
        })
    }

    closeCookie() {
        const btn = this.root.querySelector(".boxTwo .btn");

        btn.addEventListener("click", () => {
            this.removeHide()
            this.loadPhrases()
        })
    }

    addHide() {
        this.containerOne.classList.add("hide")
        this.containerTwo.classList.remove("hide")
    }

    removeHide() {
        this.containerOne.classList.remove("hide")
        this.containerTwo.classList.add("hide")
    }

    loadPhrases() {
        const randomPhrases = this.phrases[Math.floor(Math.random() * this.phrases.length)];
        document.querySelector("p").innerHTML = randomPhrases
    }
}