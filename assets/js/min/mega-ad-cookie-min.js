jQuery(document).ready(function(){jQuery.cookie("mega-ad")?jQuery("#mega_ad_wrap").hide():(jQuery("#mega_ad_wrap").fadeIn(0),jQuery("body").addClass("has-message"),jQuery("html, body").css({overflow:"hidden",height:"100%"})),jQuery("#dismiss").click(function(){jQuery.cookie("mega-ad",1,{path:"/",expires:1}),jQuery("#mega_ad_wrap").hide(),jQuery("body").css({overflow:"scroll",height:"100%"})}),jQuery("#mega_ad").click(function(){jQuery.cookie("mega-ad",1,{path:"/",expires:1}),jQuery("#mega_ad_wrap").hide()}),jQuery("body").hasClass("login")&&jQuery("#mega_ad_wrap").hide()});