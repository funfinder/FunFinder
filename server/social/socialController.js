var request=require('request');
var rp=require("request-promise");
module.exports={

    getAll: function(req, res, next){
    	console.log("in here");
    	var city=req.params.city.slice(1);
    	var state=req.params.state.slice(1);
    	console.log(city);
    	console.log(state);
    	var beginms=req.params.beginTime.slice(1);
    	var endms=req.params.endTime.slice(1);
    	console.log(beginms);
    	console.log(endms);
        

        // rp("http://api.zippopotam.us/us/"+state+'/'+city)
        // .then(function(zippobody){
        //     zippobody=JSON.parse(zippobody);
        //     var zipcode=zippobody['places'][0]['post code'];
        //     var meetupAPI='https://api.meetup.com/2/open_events?key=562e4b82c1d1534424d481661495237&zip='+zipcode+'&time='+beginms+','+endms+'&radius=2&sign=true';
        //     request(meetupAPI,function(err,response,body){
        //         var mybody=JSON.parse(body);
        //         console.log(mybody['results'][0]['description']);

        //     });
        //     // console.log(zipcode);
        // }).catch(function(error){
        //     console.log("invalid location");
        //    res.status(404).send("failure to locate, please verify the location you entered is valid!");
        // });
    // 	request("http://api.zippopotam.us/us/"+state+'/'+city,function(err,response,body){
    //         console.log('hello');
    //         var mybody=JSON.parse(body);
    //         zipcode=mybody['places'][0]['post code'];

    // });
    
       
    },

    getAllZip:function(req,res,next){
    	console.log("inside get all zip");
        console.log("in here");
        var zip=req.params.zip.slice(1);
        console.log(zip);
        var beginms=req.params.beginTime.slice(1);
        var endms=req.params.endTime.slice(1);
        console.log(beginms);
        console.log(endms);
        var apiStr='https://api.meetup.com/2/open_events?key=562e4b82c1d1534424d481661495237&zip='+zip+'&time='+beginms+','+endms+'&radius=10&sign=true';
        rp(apiStr).then(function(htmlStr){
            console.log(typeof htmlStr);
            htmlStr=JSON.parse(htmlStr);
            var openEvents=htmlStr['results'];
            console.log(htmlStr['results']);
            res.json(openEvents);


        }).catch(function(error){
            
           res.json("status 404--page not found, invalid location!");
        });
    }

};