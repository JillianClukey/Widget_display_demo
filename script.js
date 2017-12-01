// JavaScript Document
$(document).ready(function(e) {
	display_switch();
});
//=========================================================================================//
//--------------------------------Settings/displays----------------------------------------//
//========================================================================================//
function display_switch(){
	hide_thumbnail_tab();
	
	//Call current display settings
	var wdg= $('#widget_dropdown').val();
	var dsp= $('#display_dropdown').val();
	var count = $('#count_dropdown').val();
	var ico_type= $('#content_icon_dropdown').val();
	var row = $('#thumbnails_per_row_dropdown').val();
	var thumb_ttl= $('#thumbnails_title_display').val();
	var thumb_sum= $('#thumbnails_summary_display').val();
	
	// Call function based on selected widget type value
	switch(wdg){
		case "events":
			show_cal_ico_option();
			//console.log('Widget has class Events');
			$("#icon_option_dropdown").val("option29").change();
			var url='xml/events.xml';
			events(dsp,count,ico_type,row,thumb_ttl,thumb_sum,url);
			break;
		case "links":
			//console.log('Widget has class Links');
			$("#icon_option_dropdown").val("option11").change();
			var url='xml/links.xml';
			var xml_var = "link";
			switch(dsp) {
					case "list":
						u_list(dsp,count,ico_type,row,thumb_ttl,thumb_sum,xml_var,url);
						break;
					case "summary":
						u_summary(dsp,count,ico_type,row,thumb_ttl,thumb_sum,xml_var,url);
						break;
					case "thumbnails":
						show_thumbnail_tab();
						u_thumbnails(dsp,count,ico_type,row,thumb_ttl,thumb_sum,xml_var,url);
						break;
				}
			break;
		case "news":
			//console.log('Widget has class News');
			$("#icon_option_dropdown").val("option13").change();
			var url='xml/news.xml';
			var xml_var = "news";
			switch(dsp) {
					case "list":
						u_list(dsp,count,ico_type,row,thumb_ttl,thumb_sum,xml_var,url);
						break;
					case "summary":
						u_summary(dsp,count,ico_type,row,thumb_ttl,thumb_sum,xml_var,url);
						break;
					case "thumbnails":
						show_thumbnail_tab();
						u_thumbnails(dsp,count,ico_type,row,thumb_ttl,thumb_sum,xml_var,url);
						break;
				}
			break;
		case "people":
			//console.log('Widget has class People');
			$("#icon_option_dropdown").val("option32").change();
			var url='xml/people.xml';
			var xml_var = "people";
			switch(dsp) {
					case "list":
						u_list(dsp,count,ico_type,row,thumb_ttl,thumb_sum,xml_var,url);
						break;
					case "summary":
						u_summary(dsp,count,ico_type,row,thumb_ttl,thumb_sum,xml_var,url);
						break;
					case "thumbnails":
						show_thumbnail_tab();
						u_thumbnails(dsp,count,ico_type,row,thumb_ttl,thumb_sum,xml_var,url);
						break;
				}
			break;
		case "recognition":
			//console.log('Widget has class Recognition');
			$("#icon_option_dropdown").val("option33").change();
			var url='xml/recognition.xml';
			var xml_var = "recognition";
			switch(dsp) {
					case "list":
						u_list(dsp,count,ico_type,row,thumb_ttl,thumb_sum,xml_var,url);
						break;
					case "summary":
						u_summary(dsp,count,ico_type,row,thumb_ttl,thumb_sum,xml_var,url);
						break;
					case "thumbnails":
						show_thumbnail_tab();
						u_thumbnails(dsp,count,ico_type,row,thumb_ttl,thumb_sum,xml_var,url);
						break;
				}
			break;
		case "image":
			//console.log('Widget has class image');
			$("#icon_option_dropdown").val("option34").change();
			var url='xml/image.xml';
			image(url);
			break;
		}
}
//=========================================================================================//
//-------------------------Type specific display functions--------------------------------//
//========================================================================================//
//EVENTS DISPLAYS AREA-----------------------------------------------------------------------//
function events(dsp,count,ico_type,row,thumb_ttl,thumb_sum,url){
	$.ajax({
		type:'POST',
		url:url,
		dataType:'xml',
		success:function(xml){
			//console.log('SUCCESS');
			var $set=$(xml).find('event');
			var html = '';
			var i = 1;
			$set.each(function() {
				var $this = $(this);
				var ttl=$this.find('title').text().trim();
				var txt=$this.find('summary').text().trim();
				var month=$this.find('month').text().trim();
				var day=$this.find('day').text().trim();
				var start=$this.find('start').text().trim();
				var end=$this.find('end').text().trim();
				var img=$this.find('img').text().trim();
				switch(dsp) {
					case "list":
						if (i <= count){
							switch (ico_type) {
								case "image":
									if(start == end){
										html +='<div class="image"><div><div><a href="" class="jnav" title="'+ttl+'" data-type="Events" data-id="36"><img src="'+img+'" title="'+ttl+'"></a></div></div><div><span class="title"><a href="" class="jnav" title="'+ttl+'" data-type="Events" data-id="36">'+ttl+'</a></span><div>'+start+'</div></div></div>'	
									}else{html +='<div class="image"><div><div><a href="" class="jnav" title="'+ttl+'" data-type="Events" data-id="36"><img src="'+img+'" title="'+ttl+'"></a></div></div><div><span class="'+ttl+'"><a href="" class="jnav" title="'+ttl+'" data-type="Events" data-id="36">'+ttl+'</a></span><div>'+start+' - '+end+'</div></div></div>'}
									break;
								case "calendar":
									if(start == end){
										html +='<div class="calendar"><div><div>'+month+'</div><div>'+day+'</div></div><div><span class="'+ttl+'"><a href="" class="jnav" title="'+ttl+'" data-type="Events" data-id="34">'+ttl+'</a><div class="display_date">'+start+'</div></span></div></div>'	
									}else{html +='<div class="calendar"><div><div>'+month+'</div><div>'+day+'</div></div><div><span class="'+ttl+'"><a href="" class="jnav" title="'+ttl+'" data-type="Events" data-id="34">'+ttl+'</a><div class="display_date">'+start+' - '+end+'</div></span></div></div>'}
									break;
								case "none":
									if(start == end){
										html+='<div class="icon"><div><span class="'+ttl+'"><a href="" class="jnav" title="'+ttl+'" data-type="Events" data-id="34">'+ttl+'</a></span><div class="display_date">'+start+'</div></div></div>'	
									}else{html+='<div class="icon"><div><span class="'+ttl+'"><a href="" class="jnav" title="'+ttl+'" data-type="Events" data-id="34">'+ttl+'</a></span><div class="display_date">'+start+' - '+end+'</div></div></div>'}
									break;
								default:
									if(start == end){
										html+='<div class="icon '+ico_type+'"><div><span class="'+ttl+'"><a href="" class="jnav" title="'+ttl+'" data-type="Events" data-id="34">'+ttl+'</a></span><div class="display_date">'+start+'</div></div></div>'	
									}else{html+='<div class="icon '+ico_type+'"><div><span class="'+ttl+'"><a href="" class="jnav" title="'+ttl+'" data-type="Events" data-id="34">'+ttl+'</a></span><div class="display_date">'+start+' - '+end+'</div></div></div>'}
							}
							i++;
						}else{return false;}
						break;
					case "summary":
						if (i <= count){
							if (txt != ''){
								switch (ico_type) {
									case "image":
										if(start == end){
											html +='<div class="image"><div><div><a href="" class="jnav" title="'+ttl+'" data-type="Events" data-id="36"><img src="'+img+'" title="'+ttl+'"></a></div></div><div><span class="title"><a href="" class="jnav" title="'+ttl+'" data-type="Events" data-id="36">'+ttl+'</a></span><div>'+start+'</div><div class="text">'+txt+'<span class="nowrap">…<a href="" class="jnav" title="'+ttl+'" data-type="Events" data-id="36">more</a></span></div></div></div>'	
										}else{html +='<div class="image"><div><div><a href="" class="jnav" title="'+ttl+'" data-type="Events" data-id="36"><img src="'+img+'" title="'+ttl+'"></a></div></div><div><span class="title"><a href="" class="jnav" title="'+ttl+'" data-type="Events" data-id="36">'+ttl+'</a></span><div>'+start+' - '+end+'</div><div class="text">'+txt+'<span class="nowrap">…<a href="" class="jnav" title="'+ttl+'" data-type="Events" data-id="36">more</a></span></div></div></div>'}
										break;
									case "calendar":
										if(start == end){
											html +='<div class="calendar"><div><div>'+month+'</div><div>'+day+'</div></div><div><span class="'+ttl+'"><a href="" class="jnav" title="'+ttl+'" data-type="Events" data-id="34">'+ttl+'</a></span><div>'+start+'</div><div class="text">'+txt+'<span class="nowrap">…<a href="" class="jnav" title="'+ttl+'" data-type="Events" data-id="34">more</a></span></div></div></div>'	
										}else{html +='<div class="calendar"><div><div>'+month+'</div><div>'+day+'</div></div><div><span class="'+ttl+'"><a href="" class="jnav" title="'+ttl+'" data-type="Events" data-id="34">'+ttl+'</a></span><div>'+start+' - '+end+'</div><div class="text">'+txt+'<span class="nowrap">…<a href="" class="jnav" title="'+ttl+'" data-type="Events" data-id="34">more</a></span></div></div></div>'}
										break;
									case "none":
										if(start == end){
											html+='<div class="icon '+ico_type+'" id="icon"><div><span class="title"><a href="" >'+ttl+'</a></span><div class="display_date">'+start+'</div><div class="text">'+txt+'<span class="nowrap"></span></div></div></div>'	
										}else{html+='<div class="icon '+ico_type+'" id="icon"><div><span class="title"><a href="" >'+ttl+'</a></span><div class="display_date">'+start+' - '+end+'</div><div class="text">'+txt+'<span class="nowrap"></span></div></div></div>'}
										break;
									default:
										if(start == end){
											html+='<div class="icon '+ico_type+'" id="icon"><div><span class="title"><a href="" >'+ttl+'</a></span><div class="display_date">'+start+'</div><div class="text">'+txt+'<span class="nowrap"></span></div></div></div>'	
										}else{html+='<div class="icon '+ico_type+'" id="icon"><div><span class="title"><a href="" >'+ttl+'</a></span><div class="display_date">'+start+' - '+end+'</div><div class="text">'+txt+'<span class="nowrap"></span></div></div></div>'}
								}
							}else{
								switch (ico_type) {
									case "image":
										if(start == end){
											html +='<div class="image"><div><div><a href="" class="jnav" title="'+ttl+'" data-type="Events" data-id="36"><img src="'+img+'" title="'+ttl+'"></a></div></div><div><span class="title"><a href="" class="jnav" title="'+ttl+'" data-type="Events" data-id="36">'+ttl+'</a></span><div>'+start+'</div><div class="text">'+txt+'<span class="nowrap">…<a href="" class="jnav" title="'+ttl+'" data-type="Events" data-id="36">more</a></span></div></div></div>'	
										}else{html +='<div class="image"><div><div><a href="" class="jnav" title="'+ttl+'" data-type="Events" data-id="36"><img src="'+img+'" title="'+ttl+'"></a></div></div><div><span class="title"><a href="" class="jnav" title="'+ttl+'" data-type="Events" data-id="36">'+ttl+'</a></span><div>'+start+' - '+end+'</div><div class="text">'+txt+'<span class="nowrap">…<a href="" class="jnav" title="'+ttl+'" data-type="Events" data-id="36">more</a></span></div></div></div>'}
										break;
									case "calendar":
										if(start == end){
											html +='<div class="calendar"><div><div>'+month+'</div><div>'+day+'</div></div><div><span class="'+ttl+'"><a href="" class="jnav" title="'+ttl+'" data-type="Events" data-id="34">'+ttl+'</a></span><div>'+start+'</div><div class="text">'+txt+'<span class="nowrap">…<a href="" class="jnav" title="'+ttl+'" data-type="Events" data-id="34">more</a></span></div></div></div>'	
										}else{html +='<div class="calendar"><div><div>'+month+'</div><div>'+day+'</div></div><div><span class="'+ttl+'"><a href="" class="jnav" title="'+ttl+'" data-type="Events" data-id="34">'+ttl+'</a></span><div>'+start+' - '+end+'</div><div class="text">'+txt+'<span class="nowrap">…<a href="" class="jnav" title="'+ttl+'" data-type="Events" data-id="34">more</a></span></div></div></div>'}
										break;
									case "none":
										if(start == end){
											html+='<div class="icon '+ico_type+'" id="icon"><div><span class="title"><a href="" >'+ttl+'</a></span><div class="display_date">'+start+'</div><div class="text">'+txt+'<span class="nowrap"></span></div></div></div>'	
										}else{html+='<div class="icon '+ico_type+'" id="icon"><div><span class="title"><a href="" >'+ttl+'</a></span><div class="display_date">'+start+' - '+end+'</div><div class="text">'+txt+'<span class="nowrap"></span></div></div></div>'}
										break;
									default:
										if(start == end){
											html+='<div class="icon '+ico_type+'" id="icon"><div><span class="title"><a href="" >'+ttl+'</a></span><div class="display_date">'+start+'</div><div class="text">'+txt+'<span class="nowrap"></span></div></div></div>'	
										}else{html+='<div class="icon '+ico_type+'" id="icon"><div><span class="title"><a href="" >'+ttl+'</a></span><div class="display_date">'+start+' - '+end+'</div><div class="text">'+txt+'<span class="nowrap"></span></div></div></div>'}
								}
							}
							i++;
						}else{return false;}
						break;
					case "thumbnails":
						show_thumbnail_tab();
						if (i <= count){
								switch (thumb_ttl) {
									case "oly":
										//console.log('events thumbnail overlay title applied');
										if(txt != ''){
											//console.log('events thumbnail overlay title applied - summary text present');
											switch (thumb_sum) {
												case "oly":
													//console.log('events thumbnail overlay title applied - overlay summary applied');
													html += '<div class="thumbnail '+row+'"><div class=""><div><div><img src="'+img+'" class="width"><div class="calendar"><div>'+month+'</div><div>'+day+'</div></div><div class="thumb_ttl oly"><div class="title"><div>'+ttl+'</div></div><div class="text"><div>'+txt+'<span class="nowrap">… more</span></div></div></div></div></div></div></div>'
													break;
												case "std":
													//console.log('events thumbnail overlay title applied - standard summary applied');
													html += '<div class="thumbnail '+row+'"><div class=""><div><div><img src="'+img+'" class="width"><div class="calendar"><div>'+month+'</div><div>'+day+'</div></div><div class="thumb_ttl oly"><div class="title"><div>'+ttl+'</div></div></div></div><div class="text"><div>'+txt+'<span class="nowrap">…more</span></div></div></div></div></div>'
													break;
												case "hov":
													//console.log('events thumbnail overlay title applied - hover summary applied');
													html += '<div class="thumbnail '+row+'"><div class=""><div><div><img src="'+img+'" class="width"><div class="calendar"><div>'+month+'</div><div>'+day+'</div></div><div class="thumb_ttl oly"><div class="title"><div>'+ttl+'</div></div><div class="text hover"><div>'+txt+'<span class="nowrap">…more</span></div></div></div></div></div></div></div>'
													break;
												default:
													//console.log('summary is turned off');
													html += '<div class="thumbnail '+row+'"><div class=""><div><div><img src="'+img+'" class="width"><div class="calendar"><div>'+month+'</div><div>'+day+'</div></div><div class="thumb_ttl oly"><div class="title"><div>'+ttl+'</div></div></div></div></div></div></div>'
												}
										}else{
											//console.log('no summary available');
											html += '<div class="thumbnail '+row+'"><div class=""><div><div><img src="'+img+'" class="width"><div class="calendar"><div>'+month+'</div><div>'+day+'</div></div><div class="thumb_ttl oly"><div class="title"><div>'+ttl+'</div></div></div></div></div></div></div>'
										}
										break;
									case "std":
										//console.log('events thumbnail standard title applied');
										if(txt != ''){
											//console.log('events thumbnail standard title applied - summary text present');
											switch (thumb_sum) {
												case "oly":
													//console.log('events thumbnail overlay title applied - overlay summary applied');
													html += '<div class="thumbnail '+row+'"><div class=""><div><div><img src="'+img+'" class="width"><div class="calendar"><div>'+month+'</div><div>'+day+'</div></div><div class="oly"><div class="text"><div>'+txt+'<span class="nowrap">…more</span></div></div></div></div><div class="thumb_ttl std"<div class="title"><div>'+ttl+'</div></div></div></div></div></div>'
													break;
												case "std":
													//console.log('events thumbnail overlay title applied - standard summary applied');
													html += '<div class="thumbnail '+row+'"><div class=""><div><div><img src="'+img+'" class="width"><div class="calendar"><div>'+month+'</div><div>'+day+'</div></div><div class="thumb_ttl std"><div class="title"><div>'+ttl+'</div></div></div></div><div class="text"><div>'+txt+'<span class="nowrap">…more</span></div></div></div></div></div>'
													break;
												case "hov":
													//console.log('events thumbnail overlay title applied - hover summary applied');
													html += '<div class="thumbnail '+row+'"><div class=""><div><div><img src="'+img+'" class="width"><div class="calendar"><div>'+month+'</div><div>'+day+'</div></div><div class="oly"><div class="text hover"><div>'+txt+'<span class="nowrap">…more</span></div></div></div></div><div class="thumb_ttl std"><div class="title"><div>'+ttl+'</div></div></div></div></div></div>'
													break;
												default:
													//console.log('summary is turned off');
													html += '<div class="thumbnail '+row+'"><div class=""><div><div><img src="'+img+'" class="width"><div class="calendar"><div>'+month+'</div><div>'+day+'</div></div><div class="thumb_ttl std"><div class="title"><div>'+ttl+'</div></div></div></div></div></div></div>'
												}
										}else{
											//console.log('no summary available');
											html += '<div class="thumbnail '+row+'"><div class=""><div><div><img src="'+img+'" class="width"><div class="calendar"><div>'+month+'</div><div>'+day+'</div></div><div class="thumb_ttl std"><div class="title"><div>'+ttl+'</div></div></div></div></div></div></div>'
										}
										break;
									case "hov":
										//console.log('events thumbnail hover title applied');
										if(txt != ''){
											//console.log('events thumbnail standard title applied - summary text present');
											switch (thumb_sum) {
												case "std":
													//console.log('events thumbnail overlay title applied - standard summary applied');
													html += '<div class="thumbnail '+row+'"><div class=""><div><div><img src="'+img+'" class="width"><div class="calendar"><div>'+month+'</div><div>'+day+'</div></div><div class="oly"><div class="thumb_ttl hover"><div class="title"><div>'+ttl+'</div></div></div></div></div><div class="text"><div>'+txt+'<span class="nowrap">…more</span></div></div></div></div></div>'
													break;
												case "hov":
													//console.log('events thumbnail overlay title applied - hover summary applied');
												html += '<div class="thumbnail '+row+'"><div class=""><div><div><img src="'+img+'" class="width"><div class="calendar"><div>'+month+'</div><div>'+day+'</div></div><div class="oly"><div class="thumb_ttl hover"><div class="title"><div>'+ttl+'</div></div><div class="text"><div>'+txt+'<span class="nowrap">…more</span></div></div></div></div></div></div></div></div>'
													break;
												default:
													//console.log('summary is turned off');
													html += '<div class="thumbnail '+row+'"><div class=""><div><div><img src="'+img+'" class="width"><div class="calendar"><div>'+month+'</div><div>'+day+'</div></div><div class="oly"><div class="thumb_ttl hover"><div class="title"><div>'+ttl+'</div></div></div></div></div></div></div></div>'
												}
										}else{
											//console.log('no summary available');
											html += '<div class="thumbnail '+row+'"><div class=""><div><div><img src="'+img+'" class="width"><div class="calendar"><div>'+month+'</div><div>'+day+'</div></div><div class="oly"><div class="thumb_ttl hover"><div class="title"><div>'+ttl+'</div></div></div></div></div></div></div></div>'
										}
										break;
									case "off":
										//console.log('events thumbnail title removed');
										if(txt != ''){
											//console.log('events thumbnail standard title applied - summary text present');
											switch (thumb_sum) {
												case "oly":
													//console.log('events thumbnail overlay title applied - overlay summary applied');
													html += '<div class="thumbnail '+row+'"><div class=""><div><div><img src="'+img+'" class="width"><div class="calendar"><div>'+month+'</div><div>'+day+'</div></div><div class="oly"><div class="text"><div>'+txt+'<span class="nowrap">…more</span></div></div></div></div></div></div></div>'
													break;
												case "std":
													//console.log('events thumbnail overlay title applied - standard summary applied');
													html += '<div class="thumbnail '+row+'"><div class=""><div><div><img src="'+img+'" class="width"><div class="calendar"><div>'+month+'</div><div>'+day+'</div></div></div><div class="text"><div>'+txt+'<span class="nowrap">…more</span></div></div></div></div></div>'
													break;
												case "hov":
													//console.log('events thumbnail overlay title applied - hover summary applied');
													html += '<div class="thumbnail '+row+'"><div class=""><div><div><img src="'+img+'" class="width"><div class="calendar"><div>'+month+'</div><div>'+day+'</div></div><div class="oly"><div class="text hover"><div>'+txt+'<span class="nowrap">…more</span></div></div></div></div></div></div></div>'
													break;
												default:
													//console.log('summary is turned off');
													html += '<div class="thumbnail '+row+'"><div class=""><div><div><img src="'+img+'" class="width"><div class="calendar"><div>'+month+'</div><div>'+day+'</div></div></div></div></div></div>'
												}
										}else{
											//console.log('no summary available');
											html += '<div class="thumbnail '+row+'"><div class=""><div><div><img src="'+img+'" class="width"><div class="calendar"><div>'+month+'</div><div>'+day+'</div></div></div></div></div></div>'
										}
										break;
								}
								i++;	
						}else{return false;}
						break;
					}
					
				});
			$('#item').empty().append(html);
		},error:function(xml){
			//console.log('Error loading Events XML');
		}
	});
}
//-------------------------------Universal list display----------------------------------------//
function u_list(dsp,count,ico_type,row,thumb_ttl,thumb_sum,xml_var,url){
	$.ajax({
		type:'POST',
		url:url,
		dataType:'xml',
		success:function(xml){
			//console.log('SUCCESS');
			var $set=$(xml).find(xml_var);
			var html = '';
			var i = 1;
			$set.each(function() {
				var $this = $(this);
				var ttl=$this.find('title').text().trim();
				var txt=$this.find('summary').text().trim();
				var img=$this.find('img').text().trim();
				if (i <= count){
					switch (ico_type) {
						case "image":
							html+='<div class="image"><div><div><a href="" title="'+ttl+'" data-type="Links" data-id="134"><img src="'+img+'" title="'+ttl+'"></a></div></div><div><span class="title"><a href="" title="'+ttl+'" data-type="Links" data-id="134">'+ttl+'</a></span></div></div>'
							break;
						case "none":
							html+='<div class="icon" id="icon"><div><span class="title"><a href="" title="'+ttl+'" data-type="Links" data-id="168">'+ttl+'</a></span></div></div>'
							break;
						default:
							html+='<div class="icon '+ico_type+'" id="icon"><div><span class="title"><a href="" title="'+ttl+'" data-type="Links" data-id="168">'+ttl+'</a></span></div></div>'
					}
					i++;
				}else{return false;}
			});
			$('#item').empty().append(html);
		},error:function(xml){
			console.log('Error loading list XML');
		}
	});
}
//-------------------------------Universal summary display----------------------------------------//
function u_summary(dsp,count,ico_type,row,thumb_ttl,thumb_sum,xml_var,url){
	$.ajax({
		type:'POST',
		url:url,
		dataType:'xml',
		success:function(xml){
			//console.log('SUCCESS');
			var $set=$(xml).find(xml_var);
			var html = '';
			var i = 1;
			$set.each(function() {
				var $this = $(this);
				var ttl=$this.find('title').text().trim();
				var txt=$this.find('summary').text().trim();
				var img=$this.find('img').text().trim();
				if (i <= count){
							switch (ico_type) {
								case "image":
									if (txt != ''){
										html+='<div class="image"><div><div><a href="" title="'+ttl+'" data-type="Links"><img src="'+img+'" title="'+ttl+'"></a></div></div><div><span class="title"><a href="" title="'+ttl+'" data-type="Links">'+ttl+'</a></span><div class="text">'+txt+'</div></div></div>'
									}else{
										html+='<div class="image"><div><div><a href="" title="'+ttl+'" data-type="Links" data-id="134"><img src="'+img+'" title="'+ttl+'"></a></div></div><div><span class="title"><a href="" title="'+ttl+'" data-type="Links" data-id="134">'+ttl+'</a></span></div></div>'	
									}
									break;
								case "none":
									if (txt != ''){
										html+='<div class="icon" id="icon"><div><span class="title"><a href="" >'+ttl+'</a></span><div class="text">'+txt+'<span class="nowrap"></span></div></div></div>'
									}else{
										html+='<div class="icon" id="icon"><div><span class="title"><a href="" title="'+ttl+'" data-type="Links" data-id="168">'+ttl+'</a></span></div></div>'	
									}
									
									break;
								default:
									if (txt != ''){
										html+='<div class="icon '+ico_type+'" id="icon"><div><span class="title"><a href="" >'+ttl+'</a></span><div class="text">'+txt+'<span class="nowrap"></span></div></div></div>'
									}else{
										html+='<div class="icon '+ico_type+'" id="icon"><div><span class="title"><a href="" title="'+ttl+'" data-type="Links" data-id="168">'+ttl+'</a></span></div></div>'	
									}	
							}
							i++;
				}else{return false;}
			});
			$('#item').empty().append(html);
		},error:function(xml){
			//console.log('Error loading list XML');
		}
	});
}
//-------------------------------Universal thumbnails display----------------------------------------//
function u_thumbnails(dsp,count,ico_type,row,thumb_ttl,thumb_sum,xml_var,url){
	$.ajax({
		type:'POST',
		url:url,
		dataType:'xml',
		success:function(xml){
			//console.log('SUCCESS');
			var $set=$(xml).find(xml_var);
			var html = '';
			var i = 1;
			$set.each(function() {
				var $this = $(this);
				var ttl=$this.find('title').text().trim();
				var txt=$this.find('summary').text().trim();
				var img=$this.find('img').text().trim();
				if (i <= count){
					switch (thumb_ttl) {
						case "oly":
							//console.log('links thumbnail overlay title applied');
									if(txt != ''){
										//console.log('links thumbnail overlay title applied - summary text present');
										switch (thumb_sum) {
											case "oly":
												//console.log('links thumbnail overlay title applied - overlay summary applied');
												html += '<div class="thumbnail '+row+'"><div class=""><div><div><img src="'+img+'" class="width"><div class="thumb_ttl oly"><div class="title"><div>'+ttl+'</div></div><div class="text"><div>'+txt+'<span class="nowrap">… more</span></div></div></div></div></div></div></div>'
												break;
											case "std":
												//console.log('links thumbnail overlay title applied - standard summary applied');
												html += '<div class="thumbnail '+row+'"><div class=""><div><div><img src="'+img+'" class="width"><div class="thumb_ttl oly"><div class="title"><div>'+ttl+'</div></div></div></div><div class="text"><div>'+txt+'<span class="nowrap">…more</span></div></div></div></div></div>'
												break;
											case "hov":
												//console.log('links thumbnail overlay title applied - hover summary applied');
												html += '<div class="thumbnail '+row+'"><div class=""><div><div><img src="'+img+'" class="width"><div class="thumb_ttl oly"><div class="title"><div>'+ttl+'</div></div><div class="text hover"><div>'+txt+'<span class="nowrap">…more</span></div></div></div></div></div></div></div>'
												break;
											default:
												//console.log('summary is turned off');
												html += '<div class="thumbnail '+row+'"><div class=""><div><div><img src="'+img+'" class="width"><div class="thumb_ttl oly"><div class="title"><div>'+ttl+'</div></div></div></div></div></div></div>'
										}
									}else{
										//console.log('no summary available');
										html += '<div class="thumbnail '+row+'"><div class=""><div><div><img src="'+img+'" class="width"><div class="thumb_ttl oly"><div class="title"><div>'+ttl+'</div></div></div></div></div></div></div>'
									}
							break;
						case "std":
							//console.log('links thumbnail standard title applied');
									if(txt != ''){
										//console.log('links thumbnail standard title applied - summary text present');
										switch (thumb_sum) {
											case "oly":
												//console.log('links thumbnail overlay title applied - overlay summary applied');
												html += '<div class="thumbnail '+row+'"><div class=""><div><div><img src="'+img+'" class="width"><div class="oly"><div class="text"><div>'+txt+'<span class="nowrap">…more</span></div></div></div></div><div class="thumb_ttl std"><div class="title"><div>'+ttl+'</div></div></div></div></div></div>'
												break;
											case "std":
												//console.log('links thumbnail overlay title applied - standard summary applied');
												html += '<div class="thumbnail '+row+'"><div class=""><div><div><img src="'+img+'" class="width"></div><div class="thumb_ttl std"><div class="title"><div>'+ttl+'</div></div></div></div><div class="text"><div>'+txt+'<span class="nowrap">…more</span></div></div></div></div></div>'
												break;
											case "hov":
												//console.log('links thumbnail overlay title applied - hover summary applied');
								html += '<div class="thumbnail '+row+'"><div class=""><div><div><img src="'+img+'" class="width"><div class="oly"><div class="text hover"><div>'+txt+'<span class="nowrap">…more</span></div></div></div></div><div class="thumb_ttl std"><div class="title"><div>'+ttl+'</div></div></div></div></div></div>'
												break;
											default:
												//console.log('summary is turned off');
												html += '<div class="thumbnail '+row+'"><div class=""><div><div><img src="'+img+'" class="width"><div class="thumb_ttl std"><div class="title"><div>'+ttl+'</div></div></div></div></div></div></div>'
										}
									}else{
										//console.log('no summary available');
										html += '<div class="thumbnail '+row+'"><div class=""><div><div><img src="'+img+'" class="width"><div class="thumb_ttl std"><div class="title"><div>'+ttl+'</div></div></div></div></div></div></div>'
									}
							break;
						case "hov":
							//console.log('links thumbnail hover title applied');
									if(txt != ''){
										//console.log('links thumbnail overlay title applied - summary text present');
										switch (thumb_sum) {
											case "std":
												//console.log('links thumbnail overlay title applied - standard summary applied');
												html += '<div class="thumbnail '+row+'"><div class=""><div><div><img src="'+img+'" class="width"><div class="oly"><div class="thumb_ttl hover"><div class="title"><div>'+ttl+'</div></div></div></div></div><div class="text"><div>'+txt+'<span class="nowrap">…more</span></div></div></div></div></div>'
												break;
											case "hov":
												//console.log('links thumbnail overlay title applied - hover summary applied');
												html += '<div class="thumbnail '+row+'"><div class=""><div><div><img src="'+img+'" class="width"><div class="oly"><div class="thumb_ttl hover"><div class="title"><div>'+ttl+'</div></div><div class="text"><div>'+txt+'<span class="nowrap">…more</span></div></div></div></div></div></div></div></div>'
												break;
											default:
											//console.log('summary is turned off');
											html += '<div class="thumbnail '+row+'"><div class=""><div><div><img src="'+img+'" class="width"><div class="oly"><div class="thumb_ttl hover"><div class="title"><div>'+ttl+'</div></div></div></div></div></div></div></div>'	
										}
									}else{
										//console.log('no summary available');
										html += '<div class="thumbnail '+row+'"><div class=""><div><div><img src="'+img+'" class="width"><div class="oly"><div class="thumb_ttl hover"><div class="title"><div>'+ttl+'</div></div></div></div></div></div></div></div>'
									}
							break;
						default:
							//console.log('links thumbnail title removed');
									if(txt != ''){
										//console.log('links thumbnail overlay title applied - summary text present');
										switch (thumb_sum) {
											case "oly":
												//console.log('links thumbnail overlay title applied - overlay summary applied');
												html += '<div class="thumbnail '+row+'"><div class=""><div><div><img src="'+img+'" class="width"><div class="oly"><div class="text"><div>'+txt+'<span class="nowrap">…more</span></div></div></div></div></div></div></div>'
												break;
											case "std":
												//console.log('links thumbnail overlay title applied - standard summary applied');
												html += '<div class="thumbnail '+row+'"><div class=""><div><div><img src="'+img+'" class="width"></div><div class="text"><div>'+txt+'<span class="nowrap">…more</span></div></div></div></div></div>'
												break;
											case "hov":
												//console.log('links thumbnail overlay title applied - hover summary applied');
												html += '<div class="thumbnail '+row+'"><div class=""><div><div><img src="'+img+'" class="width"><div class="oly"><div class="text hover"><div>'+txt+'<span class="nowrap">…more</span></div></div></div></div></div></div></div>'
												break;
											default:
												//console.log('summary is turned off');
												html += '<div class="thumbnail '+row+'"><div class=""><div><div><img src="'+img+'" class="width"></div></div></div></div>'
										}
									}else{
										//console.log('no summary available');
										html += '<div class="thumbnail '+row+'"><div class=""><div><div><img src="'+img+'" class="width"></div></div></div></div>'
									}
								}
							i++;	
				}else{return false;}
			});
			$('#item').empty().append(html);
		},error:function(xml){
			//console.log('Error loading list XML');
		}
	});
}

//-------------------------------IMAGE DISPLAYS AREA---------------------------------------//
function image(url){
	$.ajax({
		type:'POST',
		url:url,
		dataType:'xml',
		success:function(xml){
			//console.log('SUCCESS');
			var $set=$(xml).find('image');
			var html = '';
			$set.each(function() {
				var $this = $(this);
				var con=$this.find('content').text().trim();
					html+='<div><img src="'+con+'" title="image widget"></div>'	
				});
			$('#item').empty().append(html);
		},error:function(xml){
			//console.log('Error loading image XML');
		}
	});	
}

//======================================================================================//
//---------------------------------Controls area----------------------------------------//
//======================================================================================//
//----------------Side controls ---------------//
//THEME DROPDOWN SWITCH//
$('#theme_dropdown').change(function(){
    $(".widget")
    	.removeClass('default theme1 theme2 theme3 theme4 theme5 theme6 theme7 theme8 theme9')	
    	.addClass( $(this).val() );	
  })
//WIDGET TYPE SWITCH//
$('#widget_dropdown').change(function(){
    $(".widget")
    	.removeClass('events links news people recognition text html image video')	
    	.addClass( $(this).val() );
    $("#item")
    	.removeClass('events links news people recognition text html image video')	
    	.addClass( $(this).val() );
  })
//
//PLACEMENT SIZE SWITCH//
$('#placement_dropdown').change(function(){
    $(".widget")
    	.removeClass('side_200 side_250 side_300 side_350 side_400 center')	
    	.addClass( $(this).val() );	
  })
//SIDE-SIZE SWITCH//
$('#size_dropdown').change(function(){
    $(".widget")
    	.removeClass('side_200 side_250 side_300 side_350 side_400')	
    	.addClass( $(this).val() );
  })
//CONTENT TABS//
$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');
		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');
		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})
//----------------LAYOUT TAB ---------------//
//TITLE ON/OFF SWITCH//
document.getElementById('button_title').onclick = function(){
	$(".header .title").each(function() {
		$(this).toggleClass("hide");
		$('#header').toggleClass("hide");
		});
  document.getElementsByClassName('button_title')[0].classList.toggle("active");
}	
//HEADER ON/LIGHT/OFF SWITCH//
$('#header_dropdown').change(function(){
    $(".header")
    	.removeClass('solid light off')	
    	.addClass( $(this).val() );	
  })
//HEADER UNDERLINE SWITCH//	
document.getElementById('button_underline').onclick = function(){
	$(".header").each(function() {
		$(this).toggleClass("underline");
		});
  document.getElementsByClassName('button_underline')[0].classList.toggle("active");
}
//ICON OPTIONS
$('#icon_option_dropdown').change(function(){
    $(".ico")
    	.removeClass('none option1 option2 option3 option4 option5 option6 option7 option8 option9 option10 option11 option12 option13 option14 option15 option16 option17 option18 option19 option20 option21 option22 option23 option24 option25 option26 option27 option28 option29 option31 option32 option33 option34')	
    	.addClass( $(this).val() );	
  })
//ICON DROPDOWN SWITCH//
$('#icon_background_dropdown').change(function(){
    $(".ico")
    	.removeClass('none tab-background square-background round-square-background circle-background')	
    	.addClass( $(this).val() );	
  })
//TOGGLE BACKGROUND//
document.getElementById('button_background').onclick = function(){
	$(".content").each(function() {
		$(this).toggleClass("background");
		});
  document.getElementsByClassName('button_background')[0].classList.toggle("active");
}
//TOGGLE BOTTOM LINE//
document.getElementById('button_bottom_line').onclick = function(){
  document.getElementsByClassName('content-placeholder')[0].classList.toggle("bottom-line");
  document.getElementsByClassName('button_bottom_line')[0].classList.toggle("active");
}
//TOGGLE BORDER//
document.getElementById('button_border').onclick = function(){
	$(".header").each(function() {
		$(this).toggleClass("border");
		});
	$(".content").each(function() {
		$(this).toggleClass("border");
		});
  document.getElementsByClassName('button_border')[0].classList.toggle("active");
}
//----------------OPTIONS TAB --------------//
$('#display_dropdown').change(function(){
    $(".item")
    	.removeClass('list summary thumbnails slideshow')	
    	.addClass( $(this).val() );	
  })
$('#content_icon_dropdown').change(function(){
    $(".icon")
    	.removeClass('arrow1 round-bullet square-bullet image')	
    	.addClass( $(this).val() );	
  })
//SHOW / HIDE OPTIONS BASED ON DISPLAY DROPDOWN SELECTION
function hide_thumbnail_tab(){$("#thumbnails_tab").hide();}
function show_thumbnail_tab(){$("#thumbnails_tab").show();}
function hide_cal_ico_option(){$("#cal_ico_option").hide();}
function show_cal_ico_option(){$("#cal_ico_option").show();}
function hide_thumbnail_summary_overlay(){$("#thumbnail_summary_overlay").hide();}
function show_thumbnail_summary_overlay(){$("#thumbnail_summary_overlay").show();}

//--------------THUMBNAILS TAB -------------//
$('#thumbnails_per_row_dropdown').change(function(){
    $(".thumbnail")
    	.removeClass('w1 w2 w3 w4 w5 w6 w7 w8')	
    	.addClass( $(this).val() );	
  })
$('#thumbnails_title_display').change(function(){
	console.log('function activated');
	show_thumbnail_summary_overlay();
	var thumb_ttl= $('#thumbnails_title_display').val();
	if(thumb_ttl=='hov'){
		$('#thumbnails_summary_display option:first').prop('selected', 'selected');
		hide_thumbnail_summary_overlay();
	}else{return false;}
      	
  })
//--------------ARCHIVE TAB-----------------//
//ARCHIVE TYPE
$('#archive_type').change(function(){
    $(".archive")
    	.removeClass('background')	
    	.addClass( $(this).val() );	
  })
//ARCHIVE COLOR
$('#archive_color').change(function(){
    $(".archive")
    	.removeClass('theme gray')	
    	.addClass( $(this).val() );	
  })
//ARCHIVE ICONS//
$('#archive_icon').change(function(){
    $(".archive")
    	.removeClass('plus arrow video')	
    	.addClass( $(this).val() );	
  })
//ARCHIVE TEXT
$('#archive_text').change(function(){
    $(".archive")
    	.removeClass('more view ondemand hide')	
    	.addClass( $(this).val() );	
  })
