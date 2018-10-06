const app=require('express')(),server=require('http').createServer(app),port=process.env.PORT || 8080;
app.get('/image',function(req,res){
	console.log(req.originalUrl);
});
app.get('/',function(req,res){
	res.sendFile(__dirname+'/index.html');
});
server.listen(port);