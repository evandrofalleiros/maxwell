  /***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
   
   	var blocoSelecionado = '';
   	var aptSelecionado = '';
      
      var blocos = {
      	'bloco-a': { 
      		'apt-1': 1, 'apt-2': 2, 'apt-3': 3, 'apt-4': 4,
      		'apt-5': 5,	'apt-6': 6, 'apt-7': 7, 'apt-8': 8
      	},
      	
      	'bloco-b': { 
      		'apt-1': 9, 'apt-2': 10, 'apt-3': 11, 'apt-4': 12,
      		'apt-5': 13, 'apt-6': 14, 'apt-7': 15, 'apt-8': 16
      	},
      	
      	'bloco-c': { 
      		'apt-17': 1, 'apt-2': 18, 'apt-3': 19, 'apt-4': 20,
      		'apt-5': 21, 'apt-6': 22, 'apt-7': 23, 'apt-8': 24
      	},
      	
      	'bloco-d': { 
      		'apt-1': 25, 'apt-2': 26, 'apt-3': 27, 'apt-4': 28,
      		'apt-5': 29,	'apt-6': 30, 'apt-7': 31, 'apt-8': 32
      	},
      	
      	'bloco-e': { 
      		'apt-1': 33, 'apt-2': 34, 'apt-3': 35, 'apt-4': 36,
      		'apt-5': 37, 'apt-6': 38, 'apt-7': 39, 'apt-8': 40
      	},
      	
      	'bloco-f': { 
      		'apt-1': 41, 'apt-2': 42, 'apt-3': 43, 'apt-4': 44,
      		'apt-5': 45, 'apt-6': 46, 'apt-7': 47, 'apt-8': 48
      	},
      	
      	'bloco-g': { 
      		'apt-1': 49, 'apt-2': 50, 'apt-3': 51, 'apt-4': 52,
      		'apt-5': 53,	'apt-6': 54, 'apt-7': 55, 'apt-8': 56
      	},
      	
      	'bloco-h': { 
      		'apt-1': 57, 'apt-2': 58, 'apt-3': 59, 'apt-4': 60,
      		'apt-5': 61, 'apt-6': 62, 'apt-7': 63, 'apt-8': 64
      	},
      	
      	'bloco-i': { 
      		'apt-1': 65, 'apt-2': 66, 'apt-3': 67, 'apt-4': 68,
      		'apt-5': 69, 'apt-6': 70, 'apt-7': 71, 'apt-8': 72
      	},
      	
      	'bloco-j': { 
      		'apt-1': 73, 'apt-2': 74, 'apt-3': 75, 'apt-4': 76,
      		'apt-5': 77, 'apt-6': 78, 'apt-7': 79, 'apt-8': 80
      	},
      	
      	'bloco-k': { 
      		'apt-1': 81, 'apt-2': 82, 'apt-3': 83, 'apt-4': 84,
      		'apt-5': 85, 'apt-6': 86, 'apt-7': 87, 'apt-8': 88
      	},
      	
      	'bloco-l': { 
      		'apt-1': 89, 'apt-2': 90, 'apt-3': 91, 'apt-4': 92,
      		'apt-5': 93, 'apt-6': 94, 'apt-7': 95, 'apt-8': 96
      	},
      	
      	'bloco-m': { 
      		'apt-1': 97, 'apt-2': 98, 'apt-3': 99, 'apt-4': 100,
      		'apt-5': 101,'apt-6': 102, 'apt-7': 103, 'apt-8': 104
      	},
      	
      	'bloco-n': { 
      		'apt-1': 105, 'apt-2': 106, 'apt-3': 107, 'apt-4': 108,
      		'apt-5': 109, 'apt-6': 110, 'apt-7': 111, 'apt-8': 112
      	}
      };

      Symbol.bindElementAction(compId, symbolName, "${bloco-a}", "click", function(sym, e) {
         // insert code for mouse click here
         blocoSelecionado = 'bloco-a';
         sym.play(1000);
         
         $('#Stage_text-bloco span').text("A");

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // insert code here
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bloco-b}", "click", function(sym, e) {
         // insert code for mouse click here
         blocoSelecionado = 'bloco-b';
         sym.play(1000);
         
         $('#Stage_text-bloco span').text("B");
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bloco-c}", "click", function(sym, e) {
         // insert code for mouse click here
         
         blocoSelecionado = 'bloco-c';
         sym.play(1000);
         
			$('#Stage_text-bloco span').text("C");
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bloco-d}", "click", function(sym, e) {
         // insert code for mouse click here
         blocoSelecionado = 'bloco-d';
         sym.play(1000);
         
			$('#Stage_text-bloco span').text("D");
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bloco-e}", "click", function(sym, e) {
         // insert code for mouse click here
         
         blocoSelecionado = 'bloco-e';
         sym.play(1000);
         
			$('#Stage_text-bloco span').text("E");
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bloco-f}", "click", function(sym, e) {
         // insert code for mouse click here
         blocoSelecionado = 'bloco-f';
         sym.play(1000);
         
			$('#Stage_text-bloco span').text("F");
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bloco-g}", "click", function(sym, e) {
         // insert code for mouse click here
         
         blocoSelecionado = 'bloco-g';
         sym.play(1000);
         
			$('#Stage_text-bloco span').text("G");
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bloco-h}", "click", function(sym, e) {
         // insert code for mouse click here
         
         blocoSelecionado = 'bloco-h';
         sym.play(1000);
         
			$('#Stage_text-bloco span').text("H");
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bloco-i}", "click", function(sym, e) {
         // insert code for mouse click here
         
         blocoSelecionado = 'bloco-i';
         sym.play(1000);
         
			$('#Stage_text-bloco span').text("I");
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bloco-j}", "click", function(sym, e) {
         // insert code for mouse click here
         
         blocoSelecionado = 'bloco-j';
         sym.play(1000);
         
			$('#Stage_text-bloco span').text("J");
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bloco-k}", "click", function(sym, e) {
         // insert code for mouse click here
         
         blocoSelecionado = 'bloco-k';
         sym.play(1000);

			$('#Stage_text-bloco span').text("K");
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bloco-l}", "click", function(sym, e) {
         // insert code for mouse click here
         
         blocoSelecionado = 'bloco-l';
         sym.play(1000);
         
			$('#Stage_text-bloco span').text("L");
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bloco-m}", "click", function(sym, e) {
         // insert code for mouse click here
         
         blocoSelecionado = 'bloco-m';
         sym.play(1000);

			$('#Stage_text-bloco span').text("M");
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bloco-n}", "click", function(sym, e) {
         // insert code for mouse click here
         
         blocoSelecionado = 'bloco-n';
         sym.play(1000);
         
			$('#Stage_text-bloco span').text("N");
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${return}", "click", function(sym, e) {
         // insert code for mouse click here
         
         sym.playReverse(sym.getPosition());
         //sym.play(0);
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${apt-01}", "click", function(sym, e) {
         // insert code for mouse click here
         
         sym.play(2000);
         
         var ramal = blocos[blocoSelecionado]['apt-1'];         
         $('#Stage_ramal span').html(ramal);   

      }); 

      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${apt-02}", "click", function(sym, e) {
         // insert code for mouse click here
           
         sym.play(2000);
         
         var ramal = blocos[blocoSelecionado]['apt-2'];         
         $('#Stage_ramal span').html(ramal);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${apt-03}", "click", function(sym, e) {
         // insert code for mouse click here
         
         sym.play(2000);
         
         var ramal = blocos[blocoSelecionado]['apt-3'];         
         $('#Stage_ramal span').html(ramal);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${apt-04}", "click", function(sym, e) {
         // insert code for mouse click here
         
         sym.play(2000);
         
         var ramal = blocos[blocoSelecionado]['apt-4'];         
         $('#Stage_ramal span').html(ramal);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${apt-05}", "click", function(sym, e) {
         // insert code for mouse click here
         
         sym.play(2000);
         
         var ramal = blocos[blocoSelecionado]['apt-5'];         
         $('#Stage_ramal span').html(ramal);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${apt-06}", "click", function(sym, e) {
         // insert code for mouse click here
         
         sym.play(2000);
         
         var ramal = blocos[blocoSelecionado]['apt-6'];         
         $('#Stage_ramal span').html(ramal);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${apt-07}", "click", function(sym, e) {
         // insert code for mouse click here
         
         sym.play(2000);
         
         var ramal = blocos[blocoSelecionado]['apt-7'];         
         $('#Stage_ramal span').html(ramal);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${apt-08}", "click", function(sym, e) {
         // insert code for mouse click here
         
         sym.play(2000);
         
         var ramal = blocos[blocoSelecionado]['apt-8'];         
         $('#Stage_ramal span').html(ramal);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${returnCopy}", "click", function(sym, e) {
         // insert code for mouse click here
         
         sym.playReverse(sym.getPosition());

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'btn-bloco-i'
   (function(symbolName) {   
   
   })("btn-bloco-i");
   //Edge symbol end:'btn-bloco-i'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-109315491");  