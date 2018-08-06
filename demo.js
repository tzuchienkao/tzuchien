(function($){

    $.ajax({
        'url' : 'demo.json', 
        'dataType' : 'json',
        'async' : false, 
        success : function(content){
            for(var i = 0; i < content.length; i++){
                var _id = i + 1;
                $('[id^=demo_' + _id + ']').popup_box({
                    "title" : content[i].title, 
                    "content" : content[i].content, 
                    "btn_close" : content[i].btn_close, 
                    "btn_group_1" : content[i].btn_group_1, 
                    "btn_group_2" : content[i].btn_group_2, 
                    "modal_ctrl" : content[i].modal_ctrl
                });
            }
        }
    });

})(jQuery)