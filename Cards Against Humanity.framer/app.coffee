######Functions and Setup######
OpenSans = Utils.loadWebFont("Open Sans")
allText = [blackCard,whiteCard.children[0],ActionButton.children[0],playCardsText]
for text in allText
	text.fontFamaily = OpenSans

#Tries to remove unwanted html tags etc from string
textFormat = (text) ->
	formattedText = text.replace(/_/g, "___").replace(/ <br> /g, "\n").replace(/&copy;/g, "\u00A9").replace(/&reg;/g, "\u00AE").replace(/&#174;/g, "\u00AE").replace(/&trade;/g, "\u2122").replace(/&#34;/g, "\u0022").replace(/&Uuml;/g, "\u00DC").replace(/&middot;/g, "\u00B7")
	return formattedText

Function::getter = (prop, get) ->
  Object.defineProperty @prototype, prop, {get, configurable: yes}

Function::setter = (prop, set) ->
  Object.defineProperty @prototype, prop, {set, configurable: yes}

#Create a button from a layer and add a callback + Params
createButton = (layer) ->
	DefaultColour = new Color(layer.backgroundColor)
	DarkColour = DefaultColour.lighten(20)
	layer.onTapStart ->
		@backgroundColor = DarkColour
	layer.onTapEnd ->
		@backgroundColor = DefaultColour
	layer.onTouchMove ->
		@backgroundColor = DefaultColour

######Card Functions######



######Variables######
handSize = 10
cardInset = (Screen.width - whiteCard.width) / 2

######Card Variables######


whiteCards = []
blackCards = []
hand = [] #Players Hand
class CAHGame
	roundCount: 0
	constructor: ->
		@Player = new Player
		@Deck = new Deck
		@Round = new Round
		@roundCount++
	newRound: ->
		@Round = new Round
		@roundCount++

class Player
	constructor: ->
		@hand = []
class Deck
	constructor: ->
		Cards = JSON.parse Utils.domLoadDataSync "https://raw.githubusercontent.com/nodanaonlyzuul/against-humanity/master/source/cards.json"
		@whiteCards = []
		@blackCards = []
		for card in Cards
			card.text = textFormat(card.text)
			if card.cardType == "A"
				@whiteCards.push card
			else
				@blackCards.push card
		@shuffleCards(@whiteCards)
		@shuffleCards(@blackCards)
	#A function to shuffle a given deck of cards
	shuffleCards: (arr) ->
		i = arr.length
		
		while --i
			j = Math.floor(Math.random() * (i+1))
			[arr[i], arr[j]] = [arr[j], arr[i]]
		
		return arr unless i > 0
	pickUpWhite: ->
		return @whiteCards.splice(0,1)[0]
	pickUpBlack: ->
		return @blackCards.splice(0,1)[0]
	getCardByID: (cardID) ->
	# 	print "ID: " + cardID
		card = (whiteCards.filter (i) -> i.id is cardID)[0]
		return card
	getCardByText: (cardText) ->
	# 	print "Text: " + cardText
		card = (whiteCards.filter (i) -> i.text is cardText)[0]
		return card
	deal: ->
		while hand.length < handSize
			newCard = @pickUpWhite()
			whiteCard.children[0].text = newCard.text
			thisCard = whiteCard.copy()
			hand.push thisCard
		for card, i in hand
			card.x = (card.width + 40) * i + card.x
			card.parent = handScroll.content
			card.states = 
				dragStart:
					shadowY: 0
					shadowX: 0
				dragEnd:
					shadowY: 20
					shadowX: 14
					y: 0
				sumbmit:
					y: -400
			card.animationOptions = 
				time: 0.4
			card.draggable.enabled = true
			card.draggable.horizontal = false
			card.draggable.directionLock = true
			card.draggable.constraints =
				x: 0
				y: 0
				width: card.width
				height: card.height
			card.onTouchStart ->
		# 		@animate "dragStart"
			card.onTouchEnd ->
	# 				@animate "dragEnd"
			card.onDrag ->
				@shadowY = Utils.modulate(event.offset.y,[0,-100],[20,0],true)
				@shadowX = Utils.modulate(event.offset.y,[0,-100],[14,0],true)
				if event.offset.y < -80
					@y = -100 + (event.offset.y/10)
			card.onDragEnd ->
				if @.y < -80
					Game.Round.playCard(@)
				else
					@animate "dragEnd"
class Round
	constructor: ->
		@numBlanks = 1
		@cardRemaining = 0
		@numCardsPlayed = 0
		@playedCards = []
		@blackCard = null

	start: ->
		Game.Deck.deal()
		@blackCard = Game.Deck.pickUpBlack()
		blackCard.children[0].text = @blackCard.text
		@numBlanks = @blackCard.numAnswers
		@numCardsPlayed = 0
	
	playCard: (card) ->
		if @cardRemaining > 0
			@playedCards.push card
			@numCardsPlayed = @playedCards.length
			card.animate
				y: -100
			card.draggable = false
			undo = UndoButton.copy()
			createButton(undo)
			undo.parent = handScroll.content
			undo.point = {x:card.x, y: card.height - undo.height}
			undo.sendToBack()
			undo.onClick ->
				Game.Round.removeCard(card,@)
		else
			card.animate "dragEnd"
	
	removeCard: (card,button) ->
		button.destroy()
		index = @playedCards.indexOf(card)
		@playedCards.splice(index,1)
		@numCardsPlayed = @playedCards.length
		card.draggable.enabled = true
		card.draggable.horizontal = false
		card.draggable.constraints =
			x: 0
			y: 0
			width: card.width
			height: card.height
		card.animate "dragEnd"

	#Updates values and text when numCardsPlayed is set
	@setter 'numCardsPlayed', (num) ->
		@cardRemaining = @numBlanks - num
		if @cardRemaining == 0
			ActionButton.children[0].text = "Ready"
			ActionButton.opacity = 1
		else
			ActionButton.opacity = 0
		playCardsText.template = {numCards:"#{@cardRemaining}",plu:if @cardRemaining > 1 then "s" else ""}

flow = new FlowComponent

flow.showNext(GameScreen)

handScroll = new ScrollComponent
	width: Screen.width
	height: whiteCard.height + 20
	y: blackCard.height + 32
	scrollVertical: false
	directionLock: true
	clip: false
	parent: GameScreen
	contentInset: {left:cardInset,right:cardInset}
handScroll.content.clip = false

createButton(ActionButton)

Game = new CAHGame
Game.Round.start()

blackCard.children[0].text.slice(1,6).color = "Grey"

#test comment