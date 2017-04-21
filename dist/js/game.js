var game = function(){
    /*
     * 替换数组两个元素
     */
    function swapItems(arr, index1, index2) {
        arr[index1] = arr.splice(index2, 1, arr[index1])[0];
        return arr;
    };
    /*
     * 击败多少人
     */
    function beat(o){
        var result;
        if(o >= 0&&o<=4){
            result = '10%';   
        }else if(o >= 5&&o<=10){
            result = '30%';  
        }else if(o >= 11&&o<=20){
            result = '50%';  
        }else if(o >= 21&&o<=40){
            result = '70%';  
        }else if(o >= 41&&o<=60){
            result = '85%';  
        }else{
            result = '95%';  
        }
        return result;
    }
    /*
     * 倒计时
     */
    function changeTimeStamp(num){
        var distancetime = num;
        var ms = Math.floor(distancetime%1000)/10;
        var sec = Math.floor(distancetime/1000%60);
        var result = sec + "\u2032" + ms + "\u2033";
        return result;
    }
    /*
    * 获取随机数
    */
    function getRandom(n, m) {
        return Math.floor(Math.random() * (n - m) + m);
    }
    var list = {
        numRight:null,
        numWrong:null,
        target:null,
        title:null,
        count:0,
        Interval:null,
        typeArray: DATA,
        typeName:'all',
        startGame:false,
        num:null,
        chooseIndex:0,
        Right:null,
        Wrong:null,
        start:function(){
            $("#start").click(function(){
                $("#index").addClass('hide');
                $("#main").removeClass('hide');
                $("#time").html('20' + '\u2032' + '00' + '\u2033');
                list.gameInit(list.typeArray);
            })
        },
        getDiffent:function(a,arr){
            list.num = getRandom(0,arr.length);
            if(a == list.num){
                arguments.callee(a,arr);
            }else{
                list.numWrong = list.num;
                list.Wrong = arr[list.numWrong];
                
                var data = [list.Right,list.Wrong]
                var i = getRandom(0,2);
                var html ='<div><span class="thumb-wrap" data-title="'+data[1-i].title+'"><img src="'+'images/'+list.typeName+'/'+data[i].url+'" class="chooseImg"></span></div>'+
                        ' <div><span class="thumb-wrap" data-title="'+data[i].title+'"><img src="'+'images/'+list.typeName+'/'+data[1-i].url+'" class="chooseImg"></span></div>';
                $("#img-wrap").html(html);
                list.count++;
                list.choose();
            }
        },
        
        choose:function(){
            	$(".chooseImg").click(function(){
				var thisTitle  = $(this).parent(".thumb-wrap").data("title");
				if(!list.startGame){
					var allTime = 20000;
					var time = $("#time");
					list.Interval = setInterval(function(){
                        console.log(121212);
						if(allTime>0){
							time.text(changeTimeStamp(allTime));allTime=allTime-10;
						}else{
							list.gameEnd();
						}
					},10)
					list.startGame =true;
				}
				if(thisTitle == list.title){
					list.gameInit(list.typeArray);
				}else{
					list.gameEnd();
				}
			})
        },
        gameInit(array){
            if(list.chooseIndex == array.length){
				alert('游戏已结束');
				window.clearInterval(list.Interval); 
				list.gameEnd();
				return;
			}
			list.numRight=getRandom(0,array.length-list.chooseIndex);
			list.title = array[list.numRight].title;
			list.Right = array[list.numRight];
			$("#tit").text(list.title);
			list.chooseIndex++;
			list.getDiffent(list.numRight,array);
			swapItems(array,list.numRight,array.length-length-list.chooseIndex);
        },
        gameEnd(){
            list.count --;
			var bestCount = localStorage.getItem("beforeCount")?localStorage.getItem("beforeCount"):count;
			if(bestCount<list.count){
				bestCount = list.count;
			}
			localStorage.setItem("beforeCount",bestCount);
			$("#score").text(list.count);
   			$("#beat").text(beat(list.count));
   			$("#bestScore").text(bestCount);
   			$("#result").removeClass("hide");
   			window.clearInterval(list.Interval); 
			$("#time").html(0 + "\u2032" + 00 + "\u2033");
			list.startGame =false;
			list.chooseIndex = 0;
		},
        reStart(){
            $('.continue').click(function(){
      			list.typeName = $(this).data("category");
      			if(list.typeName == 'all'){
      				list.typeArray = DATA;
      			}else if(list.typeName == 'animal'){
      				list.typeArray = ANIMAL;
      			}else if(list.typeName == 'love'){
      				list.typeArray = LOVE;
      			}else if(list.typeName == 'greens'){
      				list.typeArray = GREENS;
      			}
      			$("#result").addClass("hide");
				list.gameInit(list.typeArray,list.typeName);
				$("#time").html('20' + '\u2032' + '00' + '\u2033');
				list.count=0;
      		})
      		
      		$(".share").click(function(){
      			$(".wxShare").show();
      		})
      		$(".wxShare").click(function(){
      			$(".wxShare").hide();
      		})
        }

    }
    list.start();
    list.reStart();
    return list;
}