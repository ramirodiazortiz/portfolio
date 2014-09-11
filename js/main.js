(function ($) {

	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollup').fadeIn();
			} else {
				$('.scrollup').fadeOut();
			}
		});
		$('.scrollup').click(function(){
			$("html, body").animate({ scrollTop: 0 }, 1000);
				return false;
		});
	
	// local scroll
	jQuery('.navbar').localScroll({hash:true, offset: {top: 0},duration: 800, easing:'easeInOutExpo'});

	
	// portfolio
    setTimeout(function() {
    if($('.isotopeWrapper').length){

        var $container = $('.isotopeWrapper');
        var $resize = $('.isotopeWrapper').attr('id');
        // initialize isotope
        
        $container.isotope({
            itemSelector: '.isotopeItem',
            resizable: false, // disable normal resizing
            masonry: {
                columnWidth: $container.width() / $resize
            }


            
        });

        $('#filter a').click(function(){



            $('#filter a').removeClass('current');
            $(this).addClass('current');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 1000,
                    easing: 'easeOutQuart',
                    queue: false
                }
            });
            return false;
        });
        
        
        $(window).smartresize(function(){
            $container.isotope({
                // update columnWidth to a percentage of container width
                masonry: {
                    columnWidth: $container.width() / $resize
                }
            });
        });    
    }  

}, 1000);


	// fancybox
	jQuery(".fancybox").fancybox();


	if (Modernizr.mq("screen and (max-width:1024px)")) {
			jQuery("body").toggleClass("body");
			
	} else {
		var s = skrollr.init({
			mobileDeceleration: 1,
			edgeStrategy: 'set',
			forceHeight: true,
			smoothScrolling: true,
			smoothScrollingDuration: 300,
				easing: {
					WTF: Math.random,
					inverted: function(p) {
						return 1-p;
					}
				}
			});	
	}



	//scroll menu
	jQuery('.appear').appear();
	jQuery(".appear").on("appear", function(data) {
			var id = $(this).attr("id");
			jQuery('.nav li').removeClass('active');
			jQuery(".nav a[href='#" + id + "']").parent().addClass("active");					
		});


		//parallax
        var isMobile = false;

        if(Modernizr.mq('only all and (max-width: 1024px)') ) {
            isMobile = true;
        }

        
        if (isMobile == false && ($('#parallax1').length  ||isMobile == false &&  $('#parallax2').length ||isMobile == false &&  $('#testimonials').length))
        {


            $(window).stellar({
                responsive:true,
                scrollProperty: 'scroll',
                parallaxElements: false,
                horizontalScrolling: false,
                horizontalOffset: 0,
                verticalOffset: 0
            });

        }
	
	//nicescroll
	$("html").niceScroll({zindex:999,cursorborder:"",cursorborderradius:"2px",cursorcolor:"#191919",cursoropacitymin:.5});
	function initNice() {
		if($(window).innerWidth() <= 960) {
			$('html').niceScroll().remove();
		} else {
			$("html").niceScroll({zindex:999,cursorborder:"",cursorborderradius:"2px",cursorcolor:"#191919",cursoropacitymin:.5});
		}
	}
	$(window).load(initNice);
	$(window).resize(initNice);

})(jQuery);


$(".open_fancybox_amciphone").click(function() {
    
    $.fancybox.open([
        {
            href : 'img/portfolio/amciphone/1.png',                
            title : 'Amc Theatres iPhone'
        },
        {
            href : 'img/portfolio/amciphone/2.png',                
            title : 'Amc Theatres iPhone'
        },
        {
            href : 'img/portfolio/amciphone/3.png',                
            title : 'Amc Theatres iPhone'
        },
        {
            href : 'img/portfolio/amciphone/4.png',                
            title : 'Amc Theatres iPhone'
        },
        {
            href : 'img/portfolio/amciphone/5.png',                
            title : 'Amc Theatres iPhone'
        }
    ], {
        padding : 0
    });
    
    return false;
    
});

$(".open_fancybox_amcipad").click(function() {
    
    $.fancybox.open([
        {
            href : 'img/portfolio/amcipad/1.png',                
            title : 'Amc Theatres iPad'
        },
        {
            href : 'img/portfolio/amcipad/2.png',                
            title : 'Amc Theatres iPad'
        },
        {
            href : 'img/portfolio/amcipad/3.png',                
            title : 'Amc Theatres iPad'
        },
        {
            href : 'img/portfolio/amcipad/4.png',                
            title : 'Amc Theatres iPad'
        },
        {
            href : 'img/portfolio/amcipad/5.png',                
            title : 'Amc Theatres iPad'
        }
    ], {
        padding : 0
    });
    
    return false;
    
});

$(".open_fancybox_ecotaxi").click(function() {
    
    $.fancybox.open([
        {
            href : 'img/portfolio/ecotaxi/1.png',                
            title : 'EcoTaxi'
        },
        {
            href : 'img/portfolio/ecotaxi/2.png',                
            title : 'EcoTaxi'
        },
        {
            href : 'img/portfolio/ecotaxi/3.png',                
            title : 'EcoTaxi'
        },
        {
            href : 'img/portfolio/ecotaxi/4.png',                
            title : 'EcoTaxi'
        },
        {
            href : 'img/portfolio/ecotaxi/5.png',                
            title : 'EcoTaxi'
        }
    ], {
        padding : 0
    });
    
    return false;
    
});

$(".open_fancybox_footballchallenge").click(function() {
    
    $.fancybox.open([
        {
            href : 'img/portfolio/footballchallenge/1.png',                
            title : 'Football Challenge'
        },
        {
            href : 'img/portfolio/footballchallenge/2.png',                
            title : 'Football Challenge'
        },
        {
            href : 'img/portfolio/footballchallenge/3.png',                
            title : 'Football Challenge'
        },
        {
            href : 'img/portfolio/footballchallenge/4.png',                
            title : 'Football Challenge'
        },
        {
            href : 'img/portfolio/footballchallenge/5.png',                
            title : 'Football Challenge'
        }
    ], {
        padding : 0
    });
    
    return false;
    
});

$(".open_fancybox_roost").click(function() {
    
    $.fancybox.open([
        {
            href : 'img/portfolio/roost/1.png',                
            title : 'Roost'
        },
        {
            href : 'img/portfolio/roost/2.png',                
            title : 'Amc Theatres iPhone'
        },
        {
            href : 'img/portfolio/roost/3.png',                
            title : 'Amc Theatres iPhone'
        }
    ], {
        padding : 0
    });
    
    return false;
    
});

$(".open_fancybox_someecards").click(function() {
    
    $.fancybox.open([
        {
            href : 'img/portfolio/someecards/1.png',                
            title : 'Someecards'
        },
        {
            href : 'img/portfolio/someecards/2.png',                
            title : 'Someecards'
        },
        {
            href : 'img/portfolio/someecards/3.png',                
            title : 'Someecards'
        },
        {
            href : 'img/portfolio/someecards/4.png',                
            title : 'Someecards'
        },
        {
            href : 'img/portfolio/someecards/5.png',                
            title : 'Someecards'
        }
    ], {
        padding : 0
    });
    
    return false;
    
});
$(".open_fancybox_unf").click(function() {
    
    $.fancybox.open([
        {
            href : 'img/portfolio/unf/1.png',                
            title : 'United Nations Foundation'
        },
        {
            href : 'img/portfolio/unf/2.png',                
            title : 'United Nations Foundation'
        },
        {
            href : 'img/portfolio/unf/3.png',                
            title : 'United Nations Foundation'
        }
    ], {
        padding : 0
    });
    
    return false;
    
});
$(".open_fancybox_dcbd").click(function() {
    
    $.fancybox.open([
        {
            href : 'img/portfolio/dcbd/0.png',                
            title : 'Digital CBD'
        }
    ], {
        padding : 0
    });
    
    return false;
    
});

$('.current').trigger('click');