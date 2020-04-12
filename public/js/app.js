new Vue({
    el: '#app',
    data: {
        player_life: 100,
        monster_life: 100,
        player_life_now: {
            width: 300 + 'px',
            backgroundColor: 'green'
        },
        monster_life_now: {
            width: 300 + 'px',
            backgroundColor: 'green'
        },
        history: [],
        gameEnd: false
    },
    methods: {
        restartGame: function() {
            this.history = []
            this.player_life = 100
            this.monster_life = 100
            this.gameEnd = false
            this.player_life_now.width = this.player_life * 3 + 'px'
            this.monster_life_now.width = this.monster_life * 3 + 'px'
        },
        attack: function() {
            this.player_life = this.player_life - Math.random() * 10
            this.monster_life = this.monster_life - Math.random() * 10
            this.player_life_now.width = this.player_life * 3 + 'px'
            this.monster_life_now.width = this.monster_life * 3 + 'px'
            this.history.push('You have ' + this.player_life + ' now and Monster have ' + this.monster_life + ' now')
            if (this.player_life <= 0) {
                alert('Monster Win!')
                this.gameEnd = true
            }
            if (this.monster_life <= 0) {
                alert('You Win!')
                this.gameEnd = true
            }
            // console.log(this.history)
            // console.log(Math.random())
        },
        specialAttack: function() {
            this.player_life = this.player_life - Math.random() * 10
            this.monster_life = this.monster_life - Math.random() * 10 * 2
            this.player_life_now.width = this.player_life * 3 + 'px'
            this.monster_life_now.width = this.monster_life * 3 + 'px'
            if (this.player_life <= 0) {
                alert('Monster Win!')
                this.gameEnd = true
            }
            if (this.monster_life <= 0) {
                alert('You Win!')
                this.gameEnd = true
            }
        },
        heaf: function() {
            this.player_life = this.player_life + Math.random() * 10
            this.player_life = this.player_life - Math.random() * 10
            this.player_life_now.width = this.player_life * 3 + 'px'
            if (this.player_life <= 0) {
                alert('Monster Win!')
                this.gameEnd = true
            }
            if (this.monster_life <= 0) {
                alert('You Win!')
                this.gameEnd = true
            }
        },
        giveUp: function() {
            this.gameEnd = true
        }
    }
})