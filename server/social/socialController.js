var request=require('request');

module.exports={
    getAllByDatesPlace: function(req, res, next){
    	var datesPlace=req.params.name.slice(1);
        var datesPlaceArr=datesPlace.split('/');
        var datesArr=datesPlaceArr[0].split('-');
        var placeArr=datesPlaceArr[1].split('-');
        var str1="http://api.meetup.com/2/open_events?zip="+placeArr[0]+'&radius='+placeArr[1]+'&time='+datesArr[0]+','+datesArr[1];
        request(str1,function(err,response,body){
        	var mybody=JSON.parse(body);
        	console.log(mybody);
         });

    },

    getAllByDatesGroup:function(req,res,next){
    	var datesGroup=req.params.name.slice(1);
    	var datesGroupArr=datesGroup.split('/');
    	var datesArr=datesGroupArr[0].split('-');
        var groupArr=[datesGroupArr[1]];
        var str2="http://api.meetup.com/2/events?group_urlname="+groupArr[0]+"&time="+datesArr[0]+','+datesArr[1];
        request(str2,function(err,response,body){
        	var mybody=JSON.parse(body);
        	console.log(mybody);
        });
    }

};