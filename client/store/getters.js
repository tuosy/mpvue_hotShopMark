export default{
	//过滤出附近商家
	getNearShop(state){
		const myLng = 103.04954262
		const myLat = 30.01679255
		// const {lng,lat} = state.shopList
		return state.shopList.filter(item=>{
			return GetDistance(myLat,myLng,item.lat,item.lng)<15
		})
	}
}
function GetDistance( lat1, lng1, lat2, lng2){
	var radLat1 = lat1*Math.PI / 180.0;
	var radLat2 = lat2*Math.PI / 180.0;
	var a = radLat1 - radLat2;
	var  b = lng1*Math.PI / 180.0 - lng2*Math.PI / 180.0;
	var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a/2),2) +
	Math.cos(radLat1)*Math.cos(radLat2)*Math.pow(Math.sin(b/2),2)));
	s = s *6378.137 ;// EARTH_RADIUS;
	s = Math.round(s * 10000) / 10000;
	return s;
}