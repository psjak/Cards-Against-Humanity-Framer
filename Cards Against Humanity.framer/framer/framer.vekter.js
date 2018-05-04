(function(scope) {var GameScreen = new Layer({"name":"GameScreen","backgroundColor":"rgba(255,255,255,1)","width":375,"x":1706,"height":812,"constraintValues":{"left":1706,"height":812,"heightFactor":1,"width":375,"widthFactor":1},"blending":"normal","clip":true,"borderStyle":"solid"});var blackCard = new Layer({"parent":GameScreen,"name":"blackCard","backgroundColor":"#000000","width":375,"height":280,"constraintValues":{"height":280,"centerAnchorX":0.5,"width":375,"right":0,"centerAnchorY":0.17241379310344829},"blending":"normal","clip":false,"borderStyle":"solid"});var __layer_0__ = new TextLayer({"parent":blackCard,"backgroundColor":null,"width":327,"x":24,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":9,"css":{"fontSize":"26px","WebkitTextFillColor":"hsl(0, 0%, 100%)","letterSpacing":"0px","fontWeight":600,"lineHeight":"1.2","tabSize":4,"fontFamily":"\"OpenSans-Semibold\", \"Open Sans\", sans-serif"}}],"text":"Card Text"}]},"height":216,"constraintValues":{"left":24,"height":216,"centerAnchorX":0.5,"width":327,"right":24,"top":40,"centerAnchorY":0.51071428571428568},"blending":"normal","autoSize":false,"y":40});var playCardsText = new TextLayer({"parent":GameScreen,"name":"playCardsText","backgroundColor":null,"width":335,"x":20,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":5,"css":{"fontSize":"20px","WebkitTextFillColor":"#000000","letterSpacing":"0px","fontWeight":600,"lineHeight":"1.2","tabSize":4,"fontFamily":"\"OpenSans-Semibold\", \"Open Sans\", sans-serif"}},{"startIndex":5,"endIndex":15,"css":{"fontSize":"20px","WebkitTextFillColor":"#000000","letterSpacing":"0px","fontWeight":700,"lineHeight":"1.2","tabSize":4,"fontFamily":"\"OpenSans-Bold\", \"Open Sans\", sans-serif"}},{"startIndex":15,"endIndex":25,"css":{"fontSize":"20px","WebkitTextFillColor":"#000000","letterSpacing":"0px","fontWeight":600,"lineHeight":"1.2","tabSize":4,"fontFamily":"\"OpenSans-Semibold\", \"Open Sans\", sans-serif"}}],"text":"Play {numCards} card{plu}"}],"alignment":"center"},"height":24,"constraintValues":{"left":20,"height":24,"centerAnchorX":0.5,"width":335,"bottom":35,"right":20,"top":null,"centerAnchorY":0.94211822660098521},"blending":"normal","autoSize":false,"y":753});var __layer_1__ = new Layer({"parent":GameScreen,"name":"Avatar","backgroundColor":null,"width":24,"x":24,"height":24,"constraintValues":{"left":null,"height":24,"centerAnchorX":0.096000000000000002,"width":24,"bottom":35,"right":327,"top":null,"centerAnchorY":0.94211822660098521},"blending":"normal","clip":false,"borderStyle":"solid","y":753});var avatar = new TextLayer({"parent":__layer_1__,"name":"avatar","backgroundColor":null,"width":13,"x":6,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":1,"css":{"fontSize":"20px","WebkitTextFillColor":"#000000","whiteSpace":"pre","fontWeight":600,"letterSpacing":"0px","tabSize":4,"fontFamily":"\"OpenSans-Semibold\", \"Open Sans\", sans-serif","lineHeight":"1.2"}}],"text":"|"}],"alignment":"center"},"height":24,"constraintValues":{"left":null,"height":24,"centerAnchorX":0.52083333333333337,"width":13,"top":null,"centerAnchorY":0.5},"blending":"normal","autoSize":true});var ActionButton = new Layer({"parent":GameScreen,"name":"ActionButton","backgroundColor":"rgb(0, 0, 0)","width":335,"x":20,"height":54,"constraintValues":{"left":20,"height":54,"centerAnchorX":0.5,"width":335,"bottom":20,"right":20,"top":null,"centerAnchorY":0.94211822660098521},"blending":"normal","borderRadius":16,"opacity":0,"clip":false,"borderStyle":"solid","y":738});var __layer_2__ = new TextLayer({"parent":ActionButton,"backgroundColor":null,"width":68,"x":133,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":6,"css":{"fontSize":"20px","WebkitTextFillColor":"hsl(0, 0%, 100%)","whiteSpace":"pre","fontWeight":600,"letterSpacing":"0px","tabSize":4,"fontFamily":"\"OpenSans-Semibold\", \"Open Sans\", sans-serif","lineHeight":"1.2"}}],"text":"Button"}],"alignment":"center"},"height":24,"constraintValues":{"left":null,"height":24,"centerAnchorX":0.49850746268656715,"width":68,"top":null,"centerAnchorY":0.5},"blending":"normal","autoSize":true,"y":15});var __layer_3__ = new Layer({"backgroundColor":"rgba(255,255,255,1)","width":231,"x":1358,"height":313,"constraintValues":null,"blending":"normal","clip":true,"borderStyle":"solid"});var whiteCard = new Layer({"parent":__layer_3__,"name":"whiteCard","shadows":[{"spread":0,"x":14,"type":"box","y":20,"blur":1,"color":"rgba(0,0,0,0.25)"}],"borderWidth":4,"backgroundColor":"hsl(0, 0%, 100%)","width":231,"borderColor":"#000000","height":313,"constraintValues":{"height":313,"centerAnchorX":0.5,"width":231,"bottom":0,"right":0,"centerAnchorY":0.5},"blending":"normal","borderRadius":10,"clip":false,"borderStyle":"solid"});var __layer_4__ = new TextLayer({"parent":whiteCard,"backgroundColor":null,"width":183,"x":24,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":9,"css":{"fontSize":"26px","WebkitTextFillColor":"#000000","letterSpacing":"0px","fontWeight":600,"lineHeight":"1.2","tabSize":4,"fontFamily":"\"OpenSans-Semibold\", \"Open Sans\", sans-serif"}}],"text":"Card Text"}]},"height":265,"constraintValues":{"left":24,"height":265,"centerAnchorX":0.48917748917748916,"width":183,"bottom":24,"right":24,"top":24,"centerAnchorY":0.48562300319488816},"blending":"normal","autoSize":false,"y":24});var UndoButton = new Layer({"name":"UndoButton","backgroundColor":"#DDDDDD","width":231,"x":1358,"height":54,"constraintValues":null,"blending":"normal","borderRadius":16,"clip":false,"borderStyle":"solid","y":344});var __layer_5__ = new TextLayer({"parent":UndoButton,"backgroundColor":null,"width":54,"x":88,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":4,"css":{"fontSize":"20px","WebkitTextFillColor":"#000000","whiteSpace":"pre","fontWeight":600,"letterSpacing":"0px","tabSize":4,"fontFamily":"\"OpenSans-Semibold\", \"Open Sans\", sans-serif","lineHeight":"1.2"}}],"text":"Undo"}],"alignment":"center"},"height":24,"constraintValues":{"left":null,"height":24,"centerAnchorX":0.49850746268656715,"width":54,"top":null,"centerAnchorY":0.5},"blending":"normal","autoSize":true,"y":15});var setupScreen = new Layer({"name":"setupScreen","backgroundColor":"rgba(255,255,255,1)","width":375,"height":812,"constraintValues":{"height":812,"heightFactor":1,"width":375,"widthFactor":1},"blending":"normal","clip":true,"borderStyle":"solid"});var __layer_6__ = new TextLayer({"parent":setupScreen,"name":"namePromt","backgroundColor":null,"width":154,"x":111,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":15,"css":{"fontSize":"20px","WebkitTextFillColor":"#000000","whiteSpace":"pre","fontWeight":600,"letterSpacing":"0px","tabSize":4,"fontFamily":"\"OpenSans-Semibold\", \"Open Sans\", sans-serif","lineHeight":"1.2"}}],"text":"Pick an avatar…"}],"alignment":"center"},"height":24,"constraintValues":{"left":null,"height":24,"centerAnchorX":0.5013333333333333,"width":154,"top":109,"centerAnchorY":0.14901477832512317},"blending":"normal","autoSize":true,"y":109});var joinButton = new Layer({"parent":setupScreen,"name":"joinButton","backgroundColor":"rgb(0, 0, 0)","width":335,"x":20,"height":54,"constraintValues":{"left":20,"height":54,"centerAnchorX":0.5,"width":335,"bottom":20,"right":20,"top":null,"centerAnchorY":0.94211822660098521},"blending":"normal","borderRadius":16,"clip":false,"borderStyle":"solid","y":738});var __layer_7__ = new TextLayer({"parent":joinButton,"backgroundColor":null,"width":38,"x":148,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":4,"css":{"fontSize":"20px","WebkitTextFillColor":"hsl(0, 0%, 100%)","whiteSpace":"pre","fontWeight":600,"letterSpacing":"0px","tabSize":4,"fontFamily":"\"OpenSans-Semibold\", \"Open Sans\", sans-serif","lineHeight":"1.2"}}],"text":"Join"}],"alignment":"center"},"height":24,"constraintValues":{"left":null,"height":24,"centerAnchorX":0.49850746268656715,"width":38,"top":null,"centerAnchorY":0.5},"blending":"normal","autoSize":true,"y":15});var avatarSelect = new Layer({"parent":setupScreen,"name":"avatarSelect","backgroundColor":null,"width":335,"x":20,"height":453,"constraintValues":{"left":20,"height":453,"heightFactor":0.55788177339901479,"centerAnchorX":0.5,"width":335,"right":20,"top":153,"centerAnchorY":0.46736453201970446},"blending":"normal","clip":false,"borderStyle":"solid","y":153});var __layer_8__ = new Layer({"parent":avatarSelect,"name":"Alien","borderWidth":2,"backgroundColor":null,"width":102,"borderColor":"#222","height":102,"constraintValues":{"height":102,"heightFactor":0.2251655629139073,"centerAnchorX":0.15223880597014924,"width":102,"widthFactor":0.30447761194029849,"top":null,"centerAnchorY":0.11258278145695365},"blending":"normal","borderRadius":12,"clip":false,"borderStyle":"solid"});var __layer_9__ = new TextLayer({"parent":__layer_8__,"name":"emoji","backgroundColor":null,"width":50,"x":26,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":2,"css":{"fontSize":"48px","WebkitTextFillColor":"#000000","whiteSpace":"pre","fontWeight":600,"letterSpacing":"0px","tabSize":4,"fontFamily":"\"OpenSans-Semibold\", \"Open Sans\", sans-serif","lineHeight":"1.2"}}],"text":"👽"}],"alignment":"center"},"height":57,"constraintValues":{"left":null,"height":57,"centerAnchorX":0.5,"width":50,"top":null,"centerAnchorY":0.49509803921568629},"blending":"normal","autoSize":true,"y":22});var __layer_10__ = new Layer({"parent":avatarSelect,"name":"Dog","borderWidth":2,"backgroundColor":null,"width":102,"x":116,"borderColor":"#222","height":102,"constraintValues":{"left":null,"height":102,"heightFactor":0.2251655629139073,"centerAnchorX":0.49850746268656715,"width":102,"widthFactor":0.30447761194029849,"top":null,"centerAnchorY":0.11258278145695365},"blending":"normal","borderRadius":12,"clip":false,"borderStyle":"solid"});var __layer_11__ = new TextLayer({"parent":__layer_10__,"name":"emoji","backgroundColor":null,"width":50,"x":26,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":2,"css":{"fontSize":"48px","WebkitTextFillColor":"#000000","whiteSpace":"pre","fontWeight":600,"letterSpacing":"0px","tabSize":4,"fontFamily":"\"OpenSans-Semibold\", \"Open Sans\", sans-serif","lineHeight":"1.2"}}],"text":"🐶"}],"alignment":"center"},"height":57,"constraintValues":{"left":null,"height":57,"centerAnchorX":0.5,"width":50,"top":null,"centerAnchorY":0.49509803921568629},"blending":"normal","autoSize":true,"y":22});var __layer_12__ = new Layer({"parent":avatarSelect,"name":"Oni","borderWidth":2,"backgroundColor":null,"width":102,"x":233,"borderColor":"#222","height":102,"constraintValues":{"left":null,"height":102,"heightFactor":0.2251655629139073,"centerAnchorX":0.84776119402985073,"width":102,"right":0,"widthFactor":0.30447761194029849,"top":null,"centerAnchorY":0.11258278145695365},"blending":"normal","borderRadius":12,"clip":false,"borderStyle":"solid"});var __layer_13__ = new TextLayer({"parent":__layer_12__,"name":"emoji","backgroundColor":null,"width":50,"x":26,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":2,"css":{"fontSize":"48px","WebkitTextFillColor":"#000000","whiteSpace":"pre","fontWeight":600,"letterSpacing":"0px","tabSize":4,"fontFamily":"\"OpenSans-Semibold\", \"Open Sans\", sans-serif","lineHeight":"1.2"}}],"text":"👹"}],"alignment":"center"},"height":57,"constraintValues":{"left":null,"height":57,"centerAnchorX":0.5,"width":50,"top":null,"centerAnchorY":0.49509803921568629},"blending":"normal","autoSize":true,"y":22});var __layer_14__ = new Layer({"parent":avatarSelect,"name":"Cool","borderWidth":2,"backgroundColor":null,"width":102,"borderColor":"#222","height":102,"constraintValues":{"height":102,"heightFactor":0.2251655629139073,"centerAnchorX":0.15223880597014924,"width":102,"widthFactor":0.30447761194029849,"top":null,"centerAnchorY":0.37086092715231789},"blending":"normal","borderRadius":12,"clip":false,"borderStyle":"solid","y":117});var __layer_15__ = new TextLayer({"parent":__layer_14__,"name":"emoji","backgroundColor":null,"width":50,"x":26,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":2,"css":{"fontSize":"48px","WebkitTextFillColor":"#000000","whiteSpace":"pre","fontWeight":600,"letterSpacing":"0px","tabSize":4,"fontFamily":"\"OpenSans-Semibold\", \"Open Sans\", sans-serif","lineHeight":"1.2"}}],"text":"😎"}],"alignment":"center"},"height":57,"constraintValues":{"left":null,"height":57,"centerAnchorX":0.5,"width":50,"top":null,"centerAnchorY":0.49509803921568629},"blending":"normal","autoSize":true,"y":22});var __layer_16__ = new Layer({"parent":avatarSelect,"name":"Ghost","borderWidth":2,"backgroundColor":null,"width":102,"x":116,"borderColor":"#222","height":102,"constraintValues":{"left":null,"height":102,"heightFactor":0.2251655629139073,"centerAnchorX":0.49850746268656715,"width":102,"widthFactor":0.30447761194029849,"top":null,"centerAnchorY":0.37086092715231789},"blending":"normal","borderRadius":12,"clip":false,"borderStyle":"solid","y":117});var __layer_17__ = new TextLayer({"parent":__layer_16__,"name":"emoji","backgroundColor":null,"width":50,"x":26,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":2,"css":{"fontSize":"48px","WebkitTextFillColor":"#000000","whiteSpace":"pre","fontWeight":600,"letterSpacing":"0px","tabSize":4,"fontFamily":"\"OpenSans-Semibold\", \"Open Sans\", sans-serif","lineHeight":"1.2"}}],"text":"👻"}],"alignment":"center"},"height":57,"constraintValues":{"left":null,"height":57,"centerAnchorX":0.5,"width":50,"top":null,"centerAnchorY":0.49509803921568629},"blending":"normal","autoSize":true,"y":22});var __layer_18__ = new Layer({"parent":avatarSelect,"name":"Moon","borderWidth":2,"backgroundColor":null,"width":102,"x":233,"borderColor":"#222","height":102,"constraintValues":{"left":null,"height":102,"heightFactor":0.2251655629139073,"centerAnchorX":0.84776119402985073,"width":102,"right":0,"widthFactor":0.30447761194029849,"top":null,"centerAnchorY":0.37086092715231789},"blending":"normal","borderRadius":12,"clip":false,"borderStyle":"solid","y":117});var __layer_19__ = new TextLayer({"parent":__layer_18__,"name":"emoji","backgroundColor":null,"width":50,"x":26,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":2,"css":{"fontSize":"48px","WebkitTextFillColor":"#000000","whiteSpace":"pre","fontWeight":600,"letterSpacing":"0px","tabSize":4,"fontFamily":"\"OpenSans-Semibold\", \"Open Sans\", sans-serif","lineHeight":"1.2"}}],"text":"🌚"}],"alignment":"center"},"height":57,"constraintValues":{"left":null,"height":57,"centerAnchorX":0.5,"width":50,"top":null,"centerAnchorY":0.49509803921568629},"blending":"normal","autoSize":true,"y":22});var __layer_20__ = new Layer({"parent":avatarSelect,"name":"Frog","borderWidth":2,"backgroundColor":null,"width":102,"borderColor":"#222","height":102,"constraintValues":{"height":102,"heightFactor":0.2251655629139073,"centerAnchorX":0.15223880597014924,"width":102,"widthFactor":0.30447761194029849,"top":null,"centerAnchorY":0.62913907284768211},"blending":"normal","borderRadius":12,"clip":false,"borderStyle":"solid","y":234});var __layer_21__ = new TextLayer({"parent":__layer_20__,"name":"emoji","backgroundColor":null,"width":50,"x":26,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":2,"css":{"fontSize":"48px","WebkitTextFillColor":"#000000","whiteSpace":"pre","fontWeight":600,"letterSpacing":"0px","tabSize":4,"fontFamily":"\"OpenSans-Semibold\", \"Open Sans\", sans-serif","lineHeight":"1.2"}}],"text":"🐸"}],"alignment":"center"},"height":57,"constraintValues":{"left":null,"height":57,"centerAnchorX":0.5,"width":50,"top":null,"centerAnchorY":0.49509803921568629},"blending":"normal","autoSize":true,"y":22});var __layer_22__ = new Layer({"parent":avatarSelect,"name":"Egg Plant","borderWidth":2,"backgroundColor":null,"width":102,"x":116,"borderColor":"#222","height":102,"constraintValues":{"left":null,"height":102,"heightFactor":0.2251655629139073,"centerAnchorX":0.49850746268656715,"width":102,"widthFactor":0.30447761194029849,"top":null,"centerAnchorY":0.62913907284768211},"blending":"normal","borderRadius":12,"clip":false,"borderStyle":"solid","y":234});var __layer_23__ = new TextLayer({"parent":__layer_22__,"name":"emoji","backgroundColor":null,"width":50,"x":26,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":2,"css":{"fontSize":"48px","WebkitTextFillColor":"#000000","whiteSpace":"pre","fontWeight":600,"letterSpacing":"0px","tabSize":4,"fontFamily":"\"OpenSans-Semibold\", \"Open Sans\", sans-serif","lineHeight":"1.2"}}],"text":"🍆"}],"alignment":"center"},"height":57,"constraintValues":{"left":null,"height":57,"centerAnchorX":0.5,"width":50,"top":null,"centerAnchorY":0.49509803921568629},"blending":"normal","autoSize":true,"y":22});var __layer_24__ = new Layer({"parent":avatarSelect,"name":"Clown","borderWidth":2,"backgroundColor":null,"width":102,"x":233,"borderColor":"#222","height":102,"constraintValues":{"left":null,"height":102,"heightFactor":0.2251655629139073,"centerAnchorX":0.84776119402985073,"width":102,"right":0,"widthFactor":0.30447761194029849,"top":null,"centerAnchorY":0.62913907284768211},"blending":"normal","borderRadius":12,"clip":false,"borderStyle":"solid","y":234});var __layer_25__ = new TextLayer({"parent":__layer_24__,"name":"emoji","backgroundColor":null,"width":50,"x":26,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":2,"css":{"fontSize":"48px","WebkitTextFillColor":"#000000","whiteSpace":"pre","fontWeight":600,"letterSpacing":"0px","tabSize":4,"fontFamily":"\"OpenSans-Semibold\", \"Open Sans\", sans-serif","lineHeight":"1.2"}}],"text":"🤡"}],"alignment":"center"},"height":57,"constraintValues":{"left":null,"height":57,"centerAnchorX":0.5,"width":50,"top":null,"centerAnchorY":0.49509803921568629},"blending":"normal","autoSize":true,"y":22});var __layer_26__ = new Layer({"parent":avatarSelect,"name":"Poo","borderWidth":2,"backgroundColor":null,"width":102,"borderColor":"#222","height":102,"constraintValues":{"height":102,"heightFactor":0.2251655629139073,"centerAnchorX":0.15223880597014924,"width":102,"widthFactor":0.30447761194029849,"top":null,"centerAnchorY":0.88741721854304634},"blending":"normal","borderRadius":12,"clip":false,"borderStyle":"solid","y":351});var __layer_27__ = new TextLayer({"parent":__layer_26__,"name":"emoji","backgroundColor":null,"width":50,"x":26,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":2,"css":{"fontSize":"48px","WebkitTextFillColor":"#000000","whiteSpace":"pre","fontWeight":600,"letterSpacing":"0px","tabSize":4,"fontFamily":"\"OpenSans-Semibold\", \"Open Sans\", sans-serif","lineHeight":"1.2"}}],"text":"💩"}],"alignment":"center"},"height":57,"constraintValues":{"left":null,"height":57,"centerAnchorX":0.5,"width":50,"top":null,"centerAnchorY":0.49509803921568629},"blending":"normal","autoSize":true,"y":22});var __layer_28__ = new Layer({"parent":avatarSelect,"name":"Dance","borderWidth":2,"backgroundColor":null,"width":102,"x":116,"borderColor":"#222","height":102,"constraintValues":{"left":null,"height":102,"heightFactor":0.2251655629139073,"centerAnchorX":0.49850746268656715,"width":102,"widthFactor":0.30447761194029849,"top":null,"centerAnchorY":0.88741721854304634},"blending":"normal","borderRadius":12,"clip":false,"borderStyle":"solid","y":351});var __layer_29__ = new TextLayer({"parent":__layer_28__,"name":"emoji","backgroundColor":null,"width":50,"x":26,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":2,"css":{"fontSize":"48px","WebkitTextFillColor":"#000000","whiteSpace":"pre","fontWeight":600,"letterSpacing":"0px","tabSize":4,"fontFamily":"\"OpenSans-Semibold\", \"Open Sans\", sans-serif","lineHeight":"1.2"}}],"text":"💃"}],"alignment":"center"},"height":57,"constraintValues":{"left":null,"height":57,"centerAnchorX":0.5,"width":50,"top":null,"centerAnchorY":0.49509803921568629},"blending":"normal","autoSize":true,"y":22});var __layer_30__ = new Layer({"parent":avatarSelect,"name":"Robot","borderWidth":2,"backgroundColor":null,"width":102,"x":233,"borderColor":"#222","height":102,"constraintValues":{"left":null,"height":102,"heightFactor":0.2251655629139073,"centerAnchorX":0.84776119402985073,"width":102,"right":0,"widthFactor":0.30447761194029849,"top":null,"centerAnchorY":0.88741721854304634},"blending":"normal","borderRadius":12,"clip":false,"borderStyle":"solid","y":351});var __layer_31__ = new TextLayer({"parent":__layer_30__,"name":"emoji","backgroundColor":null,"width":50,"x":26,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":2,"css":{"fontSize":"48px","WebkitTextFillColor":"#000000","whiteSpace":"pre","fontWeight":600,"letterSpacing":"0px","tabSize":4,"fontFamily":"\"OpenSans-Semibold\", \"Open Sans\", sans-serif","lineHeight":"1.2"}}],"text":"🤖"}],"alignment":"center"},"height":57,"constraintValues":{"left":null,"height":57,"centerAnchorX":0.5,"width":50,"top":null,"centerAnchorY":0.49509803921568629},"blending":"normal","autoSize":true,"y":22});var waitScreen = new Layer({"name":"waitScreen","backgroundColor":"rgba(255,255,255,1)","width":375,"x":470,"height":812,"constraintValues":{"left":470,"height":812,"heightFactor":1,"width":375,"widthFactor":1},"blending":"normal","clip":true,"borderStyle":"solid"});var __layer_32__ = new TextLayer({"parent":waitScreen,"name":"message","backgroundColor":null,"width":325,"x":24,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":26,"css":{"fontSize":"40px","WebkitTextFillColor":"#777777","letterSpacing":"0px","fontWeight":600,"lineHeight":"1.2","tabSize":4,"fontFamily":"\"OpenSans-Semibold\", \"Open Sans\", sans-serif"}}],"text":"Waiting for round to start"}],"alignment":"left"},"height":207,"constraintValues":{"left":24,"height":207,"centerAnchorX":0.49733333333333335,"width":325,"right":26,"top":104,"centerAnchorY":0.25554187192118227},"blending":"normal","autoSize":false,"y":104});var helloText = new TextLayer({"parent":waitScreen,"name":"helloText","backgroundColor":null,"width":277,"x":24,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":15,"css":{"fontSize":"40px","WebkitTextFillColor":"#000000","whiteSpace":"pre","fontWeight":600,"letterSpacing":"0px","tabSize":4,"fontFamily":"\"OpenSans-Semibold\", \"Open Sans\", sans-serif","lineHeight":"1.2"}}],"text":"Hello {avatar},"}],"alignment":"left"},"height":48,"constraintValues":{"left":24,"height":48,"centerAnchorX":0.41866666666666669,"width":277,"top":50,"centerAnchorY":0.091133004926108374},"blending":"normal","autoSize":true,"y":50});if(blackCard !== undefined){blackCard.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|blackCard","targetName":"blackCard","vekterClass":"FrameNode"}};if(__layer_9__ !== undefined){__layer_9__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_9__","vekterClass":"TextNode","text":"👽"}};if(whiteCard !== undefined){whiteCard.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|whiteCard","targetName":"whiteCard","vekterClass":"FrameNode"}};if(__layer_25__ !== undefined){__layer_25__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_25__","vekterClass":"TextNode","text":"🤡"}};if(__layer_28__ !== undefined){__layer_28__.__framerInstanceInfo = {"hash":"#vekter|__layer_28__","vekterClass":"FrameNode","framerClass":"Layer"}};if(__layer_30__ !== undefined){__layer_30__.__framerInstanceInfo = {"hash":"#vekter|__layer_30__","vekterClass":"FrameNode","framerClass":"Layer"}};if(__layer_10__ !== undefined){__layer_10__.__framerInstanceInfo = {"hash":"#vekter|__layer_10__","vekterClass":"FrameNode","framerClass":"Layer"}};if(__layer_32__ !== undefined){__layer_32__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_32__","vekterClass":"TextNode","text":"Waiting for round to start"}};if(__layer_0__ !== undefined){__layer_0__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_0__","vekterClass":"TextNode","text":"Card Text"}};if(__layer_12__ !== undefined){__layer_12__.__framerInstanceInfo = {"hash":"#vekter|__layer_12__","vekterClass":"FrameNode","framerClass":"Layer"}};if(UndoButton !== undefined){UndoButton.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|UndoButton","targetName":"UndoButton","vekterClass":"FrameNode"}};if(__layer_21__ !== undefined){__layer_21__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_21__","vekterClass":"TextNode","text":"🐸"}};if(helloText !== undefined){helloText.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|helloText","targetName":"helloText","vekterClass":"TextNode","text":"Hello {avatar},"}};if(__layer_23__ !== undefined){__layer_23__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_23__","vekterClass":"TextNode","text":"🍆"}};if(__layer_4__ !== undefined){__layer_4__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_4__","vekterClass":"TextNode","text":"Card Text"}};if(__layer_31__ !== undefined){__layer_31__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_31__","vekterClass":"TextNode","text":"🤖"}};if(GameScreen !== undefined){GameScreen.__framerInstanceInfo = {"deviceName":"Apple iPhone X","framerClass":"Layer","hash":"#vekter|GameScreen","targetName":"GameScreen","vekterClass":"FrameNode","deviceType":"apple-iphone-x-space-gray"}};if(__layer_26__ !== undefined){__layer_26__.__framerInstanceInfo = {"hash":"#vekter|__layer_26__","vekterClass":"FrameNode","framerClass":"Layer"}};if(__layer_20__ !== undefined){__layer_20__.__framerInstanceInfo = {"hash":"#vekter|__layer_20__","vekterClass":"FrameNode","framerClass":"Layer"}};if(avatarSelect !== undefined){avatarSelect.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|avatarSelect","targetName":"avatarSelect","vekterClass":"FrameNode"}};if(__layer_7__ !== undefined){__layer_7__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_7__","vekterClass":"TextNode","text":"Join"}};if(__layer_18__ !== undefined){__layer_18__.__framerInstanceInfo = {"hash":"#vekter|__layer_18__","vekterClass":"FrameNode","framerClass":"Layer"}};if(__layer_27__ !== undefined){__layer_27__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_27__","vekterClass":"TextNode","text":"💩"}};if(__layer_2__ !== undefined){__layer_2__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_2__","vekterClass":"TextNode","text":"Button"}};if(__layer_8__ !== undefined){__layer_8__.__framerInstanceInfo = {"hash":"#vekter|__layer_8__","vekterClass":"FrameNode","framerClass":"Layer"}};if(playCardsText !== undefined){playCardsText.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|playCardsText","targetName":"playCardsText","vekterClass":"TextNode","text":"Play {numCards} card{plu}"}};if(__layer_14__ !== undefined){__layer_14__.__framerInstanceInfo = {"hash":"#vekter|__layer_14__","vekterClass":"FrameNode","framerClass":"Layer"}};if(__layer_15__ !== undefined){__layer_15__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_15__","vekterClass":"TextNode","text":"😎"}};if(__layer_13__ !== undefined){__layer_13__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_13__","vekterClass":"TextNode","text":"👹"}};if(__layer_11__ !== undefined){__layer_11__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_11__","vekterClass":"TextNode","text":"🐶"}};if(__layer_19__ !== undefined){__layer_19__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_19__","vekterClass":"TextNode","text":"🌚"}};if(__layer_24__ !== undefined){__layer_24__.__framerInstanceInfo = {"hash":"#vekter|__layer_24__","vekterClass":"FrameNode","framerClass":"Layer"}};if(__layer_29__ !== undefined){__layer_29__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_29__","vekterClass":"TextNode","text":"💃"}};if(setupScreen !== undefined){setupScreen.__framerInstanceInfo = {"deviceName":"Apple iPhone X","framerClass":"Layer","hash":"#vekter|setupScreen","targetName":"setupScreen","vekterClass":"FrameNode","deviceType":"apple-iphone-x-space-gray"}};if(__layer_16__ !== undefined){__layer_16__.__framerInstanceInfo = {"hash":"#vekter|__layer_16__","vekterClass":"FrameNode","framerClass":"Layer"}};if(waitScreen !== undefined){waitScreen.__framerInstanceInfo = {"deviceName":"Apple iPhone X","framerClass":"Layer","hash":"#vekter|waitScreen","targetName":"waitScreen","vekterClass":"FrameNode","deviceType":"apple-iphone-x-space-gray"}};if(ActionButton !== undefined){ActionButton.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|ActionButton","targetName":"ActionButton","vekterClass":"FrameNode"}};if(__layer_1__ !== undefined){__layer_1__.__framerInstanceInfo = {"hash":"#vekter|__layer_1__","vekterClass":"FrameNode","framerClass":"Layer"}};if(avatar !== undefined){avatar.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|avatar","targetName":"avatar","vekterClass":"TextNode","text":"|"}};if(__layer_6__ !== undefined){__layer_6__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_6__","vekterClass":"TextNode","text":"Pick an avatar…"}};if(joinButton !== undefined){joinButton.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|joinButton","targetName":"joinButton","vekterClass":"FrameNode"}};if(__layer_17__ !== undefined){__layer_17__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_17__","vekterClass":"TextNode","text":"👻"}};if(__layer_3__ !== undefined){__layer_3__.__framerInstanceInfo = {"hash":"#vekter|__layer_3__","vekterClass":"FrameNode","framerClass":"Layer"}};if(__layer_22__ !== undefined){__layer_22__.__framerInstanceInfo = {"hash":"#vekter|__layer_22__","vekterClass":"FrameNode","framerClass":"Layer"}};if(__layer_5__ !== undefined){__layer_5__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_5__","vekterClass":"TextNode","text":"Undo"}};if (scope["__vekterVariables"]) { scope["__vekterVariables"].map(function(variable) { delete scope[variable] } ) };Object.assign(scope, {GameScreen, blackCard, playCardsText, avatar, ActionButton, whiteCard, UndoButton, setupScreen, joinButton, avatarSelect, waitScreen, helloText});scope["__vekterVariables"] = ["GameScreen", "blackCard", "playCardsText", "avatar", "ActionButton", "whiteCard", "UndoButton", "setupScreen", "joinButton", "avatarSelect", "waitScreen", "helloText"];if (typeof Framer.CurrentContext.layout === 'function') {Framer.CurrentContext.layout()};})(window);