//var oShow = document.getElementById('show');
window.onload = function(){
var pic=['0pLKZeHD1mx2v31NPCL0p4T1808091712_1920_506.jpg',
         '4JFuZkWWXTu3Gu4SiZO2VCsZ-pcT1808091627_1920_506.jpg',
         '4ThdwIGA7eaaHTlOTTCVPCNiFwT1808091449_1920_506.jpg',
         '8bV1Aaktznbrr6AIPC_ibq5T1808092114_1920_506.jpg',
         'DmWNTagBpR5MoysTBswIT1808091646_1920_506.jpg',
         'XhF8n2IFExKkABE68rv10hbPCwOes6U1AT1808091109_1920_506.jpg'];
i=0;
function begin()	{
	show.src="images/"+pic[i];
	i++;
	if (i==6) {i=0}
	console.log(i,pic[i]);
}
setInterval(begin,3000);
}

