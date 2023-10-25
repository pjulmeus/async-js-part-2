
let deck = {

    async getCards(){
    let res = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    this.deckId = (res.data.deck_id)
    console.log(this.deckId)
    },
 async shuffle () {
       let res = await axios.get(`https://deckofcardsapi.com/api/deck/${this.deckId}/shuffle/`)
       console.log(res)
    },

async drawCards () {
    let res = await axios.get(`https://deckofcardsapi.com/api/deck/${this.deckId}/draw/?count=1`)
    console.log(res.data)
    let value = res.data.cards[0].value
    let suit = res.data.cards[0].suit
    console.log(`${value} of ${suit}`)
    newImg = $("<img>")
    $("#game").append(newImg)
    $(newImg).attr('src' , res.data.cards[0].image)
    }
}

deck.getCards()
deck.shuffle()

$("#draw").on('click' ,function(){
    console.log("click")
   deck.drawCards ()
}
 
)


